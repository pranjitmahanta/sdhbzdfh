# FLIPKART CLONE - MERN



## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project




The Flipkart Clone project is a comprehensive e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It aims to replicate the functionality and user experience of the popular e-commerce platform Flipkart, incorporating essential features and technologies for a seamless shopping experience.

## Key Features
### 1. User Authentication
The project employs secure user authentication using JSON Web Tokens (JWT). Users can register, log in, and maintain a personalized shopping experience with their accounts.

### 2. Razor Pay Integration
Seamless payment integration is achieved through Razor Pay, allowing users to make secure transactions for their purchases.

### 3. Material-UI for Stylish UI Components
The user interface is crafted using Material-UI, providing a modern and responsive design with a rich set of UI components for a visually appealing experience.

### 4. React Redux for Efficient State Management
React Redux is employed for efficient state management, ensuring a smooth and predictable flow of data throughout the application.

### 5. React Router DOM for Navigation
Navigation within the application is facilitated by React Router DOM, enabling users to explore different sections effortlessly.

### 6. RESTful APIs
The backend, powered by Express.js, exposes RESTful APIs for seamless communication between the frontend and backend, handling data requests and updates.

### 7. Middleware Implementation
Middleware is used for various functionalities, enhancing the application's extensibility and maintaining a clean separation of concerns.

### 8. Bcrypt for Password Hashing
User passwords are securely stored using Bcrypt, adding an extra layer of protection to sensitive user data.


# Built With

## Frontend Technologies
### React.js: 
A powerful JavaScript library for building user interfaces, providing a reactive and component-based structure for the frontend.

### Material-UI: 
A React UI framework that leverages the principles of Google's Material Design, offering a comprehensive set of visually appealing and responsive components.

### React Redux: 
A state management library for React applications, ensuring efficient handling of state throughout the application.

### React Router DOM: 
Facilitates seamless navigation between different sections of the application, enhancing the overall user experience.

## Backend Technologies:
### Node.js: 
A runtime environment that allows the execution of JavaScript code server-side, providing the foundation for building scalable and efficient backend services.

### Express.js: 
A minimalist and flexible Node.js web application framework that simplifies the process of building robust and scalable web applications.

### MongoDB: 
A NoSQL database that provides a flexible and scalable solution for handling large amounts of data, crucial for storing product information, user details, and more.

### Authentication and Security
JSON Web Tokens (JWT): Employed for secure user authentication, ensuring that user sessions and interactions are authenticated and authorized.

### Bcrypt:
Utilized for password hashing, enhancing the security of user credentials by converting passwords into a secure and irreversible format.

### Payment Integration
Razor Pay: Integrated to facilitate seamless and secure payment transactions, providing users with a reliable and efficient payment gateway.

### Middleware
Middleware components are strategically implemented to enhance the application's functionality, including logging, authentication checks, and more.


## Usage

The usage of the Flipkart Clone app involves navigating through its features, making purchases, and experiencing the functionalities inspired by the original Flipkart platform. Here's a guide on how to use the app:

### 1.User Registration and Login
Create an Account:

Visit the registration page.
Enter your details, including username, email, and password.
Click on the "Register" button to create an account.
Log In:

If you already have an account, go to the login page.
Enter your credentials (username/email and password).
Click on the "Log In" button to access your account.


### 2. Explore Products
Homepage:

Upon login, you'll be directed to the homepage showcasing featured products.
Explore different categories and products available for purchase.
Product Details:

Click on a product to view its details, images, and specifications.


### 3. Add to Cart and Checkout
Add to Cart:

From the product details page, click on the "Add to Cart" button.
The selected item will be added to your shopping cart.
View Cart:

Navigate to the shopping cart to review your selected items.
Checkout:

Proceed to the checkout page.
Provide shipping details and choose a payment method.

### 4. Payment
Razor Pay Integration:
The app integrates Razor Pay for secure payment processing.
Enter your payment details to complete the transaction.

### 5. Logout:
Logout of your account when done using the app.
Additional Features
Search Functionality:

Utilize the search functionality to find specific products.
Responsive Design:

## Database Schema

### 🔹 Users Table
| Column Name  | Type        | Description           |
|-------------|------------|-----------------------|
| id          | INT (PK)    | Unique user ID       |
| name        | VARCHAR     | User's full name     |
| email       | VARCHAR (Unique) | User's email (login) |
| password    | VARCHAR     | Hashed password      |
| role        | ENUM       | user, admin          |
| created_at  | TIMESTAMP   | Account creation date |

### 🔹 Products Table
| Column Name  | Type        | Description           |
|-------------|------------|-----------------------|
| id          | INT (PK)    | Unique product ID    |
| name        | VARCHAR     | Product name         |
| description | TEXT        | Product description  |
| price       | DECIMAL     | Price of the product |
| image_url   | VARCHAR     | Product image link   |
| stock       | INT         | Available stock      |
| category    | VARCHAR     | Product category     |
| rating      | FLOAT       | Product rating       |

### 🔹 Orders Table
| Column Name  | Type        | Description               |
|-------------|------------|---------------------------|
| id          | INT (PK)    | Unique order ID          |
| user_id     | INT (FK)    | User who placed the order |
| total_price | DECIMAL     | Total cost               |
| status      | ENUM       | Pending, Shipped, Delivered, Cancelled |
| payment_status | ENUM    | Pending, Completed, Failed |
| created_at  | TIMESTAMP   | Order creation date      |

---

##  API Endpoints

### 🔹 User Authentication
- `POST /api/register` – Register new users.
- `POST /api/login` – Authenticate users.

### 🔹 Product Management
- `GET /api/products` – Fetch all products.
- `POST /api/products` – Add new product (**Admin only**).
- `PUT /api/products/:id` – Update product details (**Admin only**).
- `DELETE /api/products/:id` – Remove a product (**Admin only**).

### 🔹 Cart Management
- `POST /api/cart` – Add product to cart.
- `GET /api/cart/:userId` – Get cart items.
- `DELETE /api/cart/:id` – Remove item from cart.

### 🔹 Orders & Payments
- `POST /api/orders` – Place an order.
- `GET /api/orders/:userId` – Get order history.
- `PUT /api/orders/:id` – Update order status (**Admin only**).

### 🔹 Admin Panel
- `GET /api/admin/users` – Fetch all users.
- `GET /api/admin/orders` – Fetch all orders.
- `PUT /api/admin/orders/:id` – Change order status.
- `GET /api/admin/stats` – Fetch total users, orders, revenue.

## Deployment & Hosting

| Component  | Deployment Platform |
|------------|----------------------|
| **Frontend** | Vercel |
| **Backend**  | Firebase / Heroku |
| **Database** | MySQL Cloud |

---

## Future Enhancements

✅ **AI-Based Recommendations** – Suggests products based on browsing history.  
✅ **Live Chat Support** – Allows real-time customer queries.  
✅ **Multi-Vendor Support** – Enables multiple sellers on the platform.  
✅ **Progressive Web App (PWA)** – Optimized for mobile users.  

---

##  Conclusion

This Flipkart Clone aims to provide a fully functional e-commerce experience with scalability, security, and performance optimization. The project will serve as a strong portfolio piece, showcasing expertise in full-stack web development with modern technologies.





