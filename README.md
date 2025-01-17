# List&Stay

**List&Stay** is a platform designed to simplify the process of listing properties and managing accommodations. Whether you're a property owner looking to showcase your listings or a traveler searching for unique and comfortable places to stay, **List&Stay** provides a seamless and user-friendly experience. With features like property listing management, map integration, secure reviews, cloud-based image storage, and robust authentication & authorization, **List&Stay** ensures that both hosts and guests can interact safely and efficiently.


---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Features  

- **Add Listings**: Users can create new property listings.  
- **Delete Listings**: Easily remove property listings.  
- **Add Reviews**: Guests can leave reviews for their stays.  
- **Delete Reviews**: Manage and remove inappropriate reviews.  
- **Map Integration**: Interactive map to locate properties.  
- **Cloud Storage**: Property images are securely stored in the cloud.  
- **Responsive Design**: Fully functional across devices and screen sizes.  
- **Authentication**: Secure login and registration system.  
- **Authorization**: Role-based access control to manage user permissions.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Cloud**: Cloudinary API for image storage  
- **Map**: OpenStreetMap API for map integration  
- **Hosting**: GitHub  

---

## Getting Started

To get started with **List&Stay**, follow these steps:

1. **Clone the Repository**:
   ```bash
    git clone https://github.com/aj-024/List-Stay.git
2. **Navigate to the Project Directory**:
     ```bash
    cd List-Stay
     ```
3. **Install Dependencies**:
     ```bash
    npm install
   ```
4. **Run the Application**:
     ```bash
    npm start
     ```

---

## Project Structure
   ```
   MAJORPROJECT
   ├── controllers
   │   └── listings.js
   │   └── user.js
   │   └── review.js
   ├── init
   │   └── data.js
   │   └── index.js
   ├── models
   │   └── listing.js
   │   └── review.js
   │   └── user.js
   ├── node_modules
   ├── public
   │   ├── css
   │   │   └── ratings.css
   │   │   └── style.css
   │   ├── js
   │       └── map.js
   │       └── script.js
   ├── routes
   │   └── listings.js
   │   └── review.js
   │   └── user.js
   ├── utils
   │   └── ExpressError.js
   │   └── wrapAsync.js
   ├── views
   │   ├── includes
   │   │   └── flash.ejs
   │   │   └── footer.ejs
   │   │   └── navbar.ejs
   │   ├── layouts
   │   │   └── boilerplate.ejs
   │   ├── listings
   │   │   └── edit.ejs
   │   │   └── index.ejs
   │   │   └── new.ejs
   │   │   └── show.ejs
   │   └── users
   │       └── login.ejs
   │       └── signup.ejs
   │       └── error.ejs
   ├── .env
   ├── .gitignore
   ├── app.js
   ├── cloudConfig.js
   ├── middleware.js
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── schema.js
   ```

## Contributing

 - We welcome contributions! If you'd like to contribute to the project:

1. Fork the repo and create your branch (git checkout -b feature-name).

2. Commit your changes (git commit -m "Add new feature").

3. Push to the branch (git push origin feature-name).

4. Create a pull request.
