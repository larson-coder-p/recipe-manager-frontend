Recipe Manager

Recipe Manager is a full-stack web application that allows users to create, view, and manage their favorite recipes. It provides a user-friendly interface for adding recipes, exploring detailed instructions, and maintaining an organized recipe collection.

 Features
Frontend:
1.Landing Page: A welcoming page with a call to action.
2.Home Page: Displays all recipes in a card-based layout.
3.Recipe Details: A detailed page for each recipe with ingredients and instructions.
4.Add Recipe Form: Allows users to add new recipes to the collection.
5.About & Contact Pages: Information about the platform and a contact form with embedded Google Maps.

Backend:
1.Flask Framework: Handles API requests and database operations.
2.RESTful API: Endpoints for recipe management (GET, POST).
3.PostgreSQL Database: Stores recipe data securely and efficiently.


📂 Project Structure
recipe-manager/
├── backend/                  # Flask Backend
│   ├── app.py               # Main Flask application
│   ├── requirements.txt     # Backend dependencies
│   ├── models.py            # Database models
│   └── instance/            # Database files (local SQLite)
│
├── frontend/                 # React Frontend
│   ├── public/              # Static assets
│   │   ├── assets/          # Images and other resources
│   │   ├── index.html       # Main HTML template
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Individual pages (Home, About, etc.)
│   │   ├── styles/          # CSS files
│   │   ├── api.js           # API calls to backend
│   │   ├── App.js           # Main application
│   │   ├── index.js         # Entry point
│   └── package.json         # Frontend dependencies


Technologies Used
Frontend:
1.React.js: Frontend library for building the user interface.
2.Bootstrap: Styling framework for responsive design.
3.FontAwesome: Icons for visual appeal.

Backend:
1.Flask: Lightweight Python framework for RESTful API development.
2.SQLAlchemy: ORM for managing the PostgreSQL database.
3.CORS: Handles cross-origin requests between frontend and backend.
4.PostgreSQL: Relational database for storing recipe data.


 Deployment
Backend:
Platform: Render
Database: Render PostgreSQL
API Base URL: https://recipe-manager-backend-gpy3.onrender.com
Frontend:
Platform: Vercel
Base URL: Deployed frontend app URL (e.g., https://recipe-manager-frontend.vercel.app)



 Setup Instructions
Prerequisites:
Node.js (Frontend)
Python 3.9+ (Backend)
PostgreSQL (Database)



 Contact
For inquiries or issues, please reach out to:

Email: contact@recipemanager.com
Phone: +254 769 216 414