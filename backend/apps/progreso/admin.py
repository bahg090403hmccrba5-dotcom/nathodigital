from django.contrib import admin
from .models import Progreso


@admin.register(Progreso)
class ProgresoAdmin(admin.ModelAdmin):
    list_display = (
        'usuario',
        'juego',
        'completado',
        'estrellas',
        'mejor_puntaje',
        'veces_jugado',
        'actualizado',
    )

    list_filter = ('juego', 'nivel', 'completado')

    search_fields = (
        'usuario__username',
        'usuario__first_name',
    )
