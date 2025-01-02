Please follow this steps to start the project

Activate the Virtual Environment:
source env/bin/activate
Install Required Packages:
Make sure the requirements.txt file is in the project directory and run:
pip install -r requirements.txt
Run the Development Server:
Use the Django manage.py script to start the server:
python manage.py runserver

Endpoint of api's
http://localhost:8000/api/v1/announcement/
http://localhost:8000/api/v1/announcement/<int:class_id>/ (the class_id represent the classes eg: 1=js1, 2=js2,....6=ss3)
http://localhost:8000/api/v1/students
http://localhost:8000/api/v1/students/login/
