# Reservation System

This is a Reservation System application built using the MERN stack. It features user authentication, item management, and a payment gateway integration.

## Features

- **User Authentication:** Secure login with JSON Web Tokens (JWT).
- **Item Management:** Ability to add new items.
- **Purchase and Payment:** Integrated with Razorpay for processing payments.
- **Dummy Card Number for Payments:** 5267 3181 8797 5449

## Installation

Follow these steps to set up and run the project:

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/Avinash-1-10/reserve-ocean>
```

### Setup Backend

#### Navigate to the server directory:

```bash
cd server
```

##### Install dependencies:

```bash
npm install
```

##### Create a .env file in the server directory and add the following configurations:

```javascript
PORT = your_port_number;
MONGO_URI = your_mongodb_uri;
JWT_SECRET = your_jwt_secret;
RAZORPAY_KEY_ID = your_razorpay_key_id;
RAZORPAY_KEY_SECRET = your_razorpay_key_secret;
```

#### Run the server using:

```bash
npm run dev
```

### Setup Frontend

#### Navigate to the client directory:

```bash
cd client
```

##### Install dependencies:

```bash
npm install
```

#### Run the client side:

```bash
npm run dev
```

## Technologies

### Frontend
- **React.js** - A JavaScript library for building user interfaces.
- **Material-UI** - A popular React UI framework.
- **Redux** - A state management library for JavaScript apps.
- **Redux Persist** - To persist and rehydrate a redux store.
- **React Router Dom** - DOM bindings for React Router.
- **Axios** - Promise based HTTP client for the browser and node.js.

### Backend
- **Node.js** - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose** - Elegant MongoDB object modeling for Node.js.
- **jsonwebtoken** - An implementation of JSON Web Tokens.
- **bcryptjs** - A library to help you hash passwords.
- **dotenv** - Loads environment variables from a .env file into process.env.
- **cookie-parser** - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- **Razorpay** - Payment gateway for online payments.

### Database
- **MongoDB** - A NoSQL database that uses a document-oriented data model.

### Tools
- **VSCode (Visual Studio Code)** - A popular and feature-rich code editor developed by Microsoft.
- **Postman** - A platform for API development.
- **Netlify** - A hosting service for the rapid deployment of websites.
- **Vercel** - A platform for frontend frameworks and static sites, optimized for performance.