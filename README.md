# AI Calling Agent 🚀

AI Calling Agent is a Django-based web application that presents a modern SaaS-style interface for an AI-powered calling solution.  
The project focuses on clean UI, proper Django structure, and scalability for future backend and AI integrations.

This application includes authentication pages, informational pages, a dashboard, and a professionally designed **Request a Demo** flow.

---

## ✨ Features

- 🏠 Modern landing page (Home)
- 🔐 User Authentication (Login & Signup)
- 📊 User Dashboard
- 📄 Informational pages:
  - Solutions
  - Features
  - Pricing
  - Contact
- 🧪 Request a Demo page with a clean SaaS-style UI
- 🎨 Custom responsive UI (no CSS frameworks)
- 🧩 Django template inheritance (`base.html`)
- 📁 Static file management (CSS & JavaScript)

---

## 🛠 Tech Stack

### Frontend
- HTML5  
- CSS3 (Custom styling)  
- JavaScript (UI interactions & animations)

### Backend
- Python 3  
- Django Framework

### Tools & Concepts
- Django Authentication System  
- Django Templates  
- Static Files Handling  

---

## 📂 Project Structure

```text
ai-agent/
│
├── manage.py
├── ai_calling_agent/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
├── core/
│   ├── views.py
│   ├── urls.py
│   ├── models.py
│   └── templates/
│       └── core/
│           ├── base.html
│           ├── index.html
│           ├── login.html
│           ├── signup.html
│           ├── dashboard.html
│           ├── demo.html
│           ├── pricing.html
│           ├── features.html
│           ├── solutions.html
│           └── contact.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       └── animations.js
│
├── venv/
└── README.md
```
## ⚙️ Setup & Installation
Follow the steps below to run the project locally.

##1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/spidykrishna/-ai-agent.git
cd ai-agent
##2️⃣ Create & activate virtual environment
bash
Copy code
python -m venv venv
Windows

bash
Copy code
venv\Scripts\activate
Mac / Linux

bash
Copy code
source venv/bin/activate
##3️⃣ Install Django
bash
Copy code
pip install django
##4️⃣ Apply migrations
bash
Copy code
python manage.py migrate
##5️⃣ Run the development server
bash
Copy code
python manage.py runserver
##6️⃣ Open in browser
cpp
Copy code
http://127.0.0.1:8000/
🧪 Request a Demo
The Request a Demo page allows users to submit:

Full Name

Work Email

Company Name

Demo Type (Call / Text)

Currently, the form is focused on UI/UX and is ready to be connected to a database or backend service.

## 🚀 Future Enhancements
Save demo requests to database

Admin panel for demo leads

Email notifications on demo request

AI calling API integration

Advanced dashboard analytics

Improved mobile responsiveness

##👨‍💻 Author
Krishna Sharma
GitHub: https://github.com/spidykrishna

📜 License
This project is created for educational and demonstration purposes.
