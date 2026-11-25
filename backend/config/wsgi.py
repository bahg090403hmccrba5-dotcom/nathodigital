"""
WSGI config for config project.
"""

import mimetypes
import os

# Corregir el tipo MIME de los archivos CSS
mimetypes.add_type('text/css', '.css', strict=True)

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()