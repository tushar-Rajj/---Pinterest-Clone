# 📌 Pinterest Clone || By Tushar Raj

A backend-focused Pinterest-style app where users can upload images with titles and descriptions.  
Uploads are displayed in a public feed with the uploader’s name.  
Users can manage their profile, upload/edit/delete images, and track likes on their posts.  
Anyone can browse the feed and view details of uploaded images.  

---

## 🚀 Features

### 👤 User
- Register and login (secure authentication with Passport.js).
- Upload images with title/description.
- Manage uploaded images (edit/delete).
- Manage profile details.
- View likes on their images.

### 🌍 Public
- Browse a feed of all uploaded images.
- Open and view image details with description and uploader info.
- See other users’ profiles and their uploaded images.

---

## 🖥️ Tech Stack / Tools

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Templating Engine:** EJS  
- **Authentication:** Passport.js, Passport-Local, Passport-Local-Mongoose, Express-Session  
- **File Uploads:** Multer  
- **Utilities & Middleware:** Connect-Flash, UUID, Morgan, Cookie-Parser, Http-Errors  

---

## ⚡ Installation & Setup


# Clone repository
git clone https://github.com/your-username/pinterest-clone.git
cd pinterest-clone

# Install dependencies
npm install

# Create .env file and add:
# MONGO_URI=your-mongodb-uri
# SESSION_SECRET=your-secret

# Start the server
node app.js

# copy right Tushar raj
# or with nodemon
nodemon app.js
