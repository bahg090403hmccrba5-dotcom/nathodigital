from rest_framework import serializers

from .constantes import ESTRELLAS_MAXIMAS,JUEGOS, NIVELES

class GuardarProgresoSerializer(serializers.Serializer):
    juego= serializers.ChoiceField(choices=JUEGOS)
    nivel= serializers.ChoiceField(choices=NIVELES)
    puntaje= serializers.IntegerField(min_value=0, max_value=100000)
    estrellas= serializers.IntegerField(min_value=0, max_value=ESTRELLAS_MAXIMAS)
    completado= serializers.BooleanField()

    def validate(self, datos):

        if datos['completado'] and datos ['estrellas'] ==0:
            raise serializers.ValidationError('un nivel completado debe tener almenos 1 estrella.')
        if not datos ['completado'] and datos['estrellas'] > 0:
            raise serializers.ValidationError('un nivel no no completado no puede tener estrellas. ')
        return datos