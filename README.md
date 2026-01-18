# 🤖 AI Calling Agent – Frontend

A modern, premium SaaS-style frontend for an **AI Calling Agent platform**.  
This project includes authentication flow, protected dashboard access, and an interactive **Request a Demo** modal with demo-type selection.

---

## 🚀 Features

- ✅ Modern SaaS landing page UI
- ✅ Authentication flow (Signup → Login → Dashboard)
- ✅ Protected dashboard (unauthorized users redirected)
- ✅ Logout functionality
- ✅ Request a Demo modal (Call / Text demo options)
- ✅ Premium card-based sections
- ✅ Responsive layout (desktop-first)
- ✅ Clean, modular file structure
- ✅ Backend / ML integration ready

---

## 🧩 Demo Options

Inside **Request a Demo**, users can choose:
- 📞 Demo for Call
- 💬 Demo for Text

The selected option is stored and ready to be sent to backend APIs.

---

## 🗂️ Project Structure

ai-calling-agent/
│
├── index.html
├── login.html
├── signup.html
├── dashboard.html
├── features.html
├── pricing.html
├── solutions.html
├── contact.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── main.js
│ ├── dashboard.js
│ └── animations.js
│
└── README.md


---

## 🔐 Authentication Logic (Frontend)

- Signup stores credentials in `localStorage`
- Login validates credentials
- On successful login:
  - `is_authenticated = true`
  - User is redirected to `dashboard.html`
- Dashboard is protected using `dashboard.js`
- Logout clears authentication state

> ⚠️ Note: This is **frontend-only auth** (for demo/MVP).  
> Replace with backend auth in production.

---

## 🧪 How to Run Locally

### Option 1: Using VS Code (Recommended)
1. Open project folder in VS Code
2. Install **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

### Option 2: Direct Browser
- Open `index.html` directly (some features may be limited)

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Modern UI, gradients, glass effects)
- Vanilla JavaScript
- GSAP (for scroll animations)
- LocalStorage (temporary auth state)

---

## 📌 Future Enhancements

- 🔗 Backend API integration
- 🤖 AI calling & messaging APIs
- 📊 Dashboard analytics
- 👤 Multi-user authentication
- 🌙 Dark mode
- 📱 Full mobile responsiveness

---

## ⚠️ Disclaimer

This project is a **frontend MVP / prototype**.  
Do **not** use localStorage authentication in production environments.

---

## 👨‍💻 Author

Built with ❤️ for an AI SaaS startup project.  
Frontend ready for backend & ML integration.

---

## 📄 License

This project is for educational / demo purposes.

