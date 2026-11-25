README.md

Plataforma Educativa sobre la lengua otomí y su cultura de la comunidad de las Moras.
Proyecto integrador de la carrera de programación 3er Semestre grupo 304.
-Página principal*Videojuegos*Las 6 casas de resguardo*Lecciones interactivas.

#Tecnologías
-Backend: Django + Django Rest Framework (carpeta frontend/)

##Instalación del backend

cd backend
python -m venv env
. \env\Scrpts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env #y llenar los valores
python manage.py migrate
python manage.py runserver

#Instalacion del frontend
cd frontend
npm install
copy .env.examle .env
npm run dev