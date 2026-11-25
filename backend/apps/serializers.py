from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers

User = get_user_model()


class UsuarioSerializer(serializers.ModelSerializer):
    """Datos públicos del jugador que se mandan al frontend."""

    usuario = serializers.CharField(source='username')
    nombre = serializers.CharField(source='first_name')

    class Meta:
        model = User
        fields = ['id', 'usuario', 'nombre']


class RegistroSerializer(serializers.Serializer):
    nombre = serializers.CharField(max_length=60)

    usuario = serializers.RegexField(
        regex=r'^[a-zA-Z0-9_.]{3,30}$',
        error_messages={
            'invalid': 'Usa de 3 a 30 letras sin acentos, números, punto o guion bajo.'
        }
    )

    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate_usuario(self, valor):
        if User.objects.filter(username__iexact=valor).exists():
            raise serializers.ValidationError(
                'Ese nombre de usuario ya está ocupado.'
            )
        return valor

    def validate(self, datos):
        if datos['password'] != datos['password2']:
            raise serializers.ValidationError(
                'Las contraseñas no coinciden.'
            )

        return datos

    def create(self, datos):
        return User.objects.create_user(
            username=datos['usuario'],
            first_name=datos['nombre'],
            password=datos['password'],
        )


class LoginSerializer(serializers.Serializer):
    usuario = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, datos):
        user = authenticate(
            username=datos['usuario'],
            password=datos['password']
        )

        if user is None:
            raise serializers.ValidationError(
                'Usuario o contraseña incorrectos.'
            )

        datos['user'] = user
        return datos
    