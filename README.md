# **Namer** MERN Full-Stack Website  

---

## 📘 **Project Overview**  

**Namer** is a comprehensive full-stack MERN (MongoDB, Express, React, Node.js) website dedicated to promoting solutions for water pollution. It incorporates the **Zero Liquid Discharge (ZLD)** strategy to support environmental sustainability through ZLD-based products. The platform provides clients with information, system diagrams, and water pollution solutions while offering a channel for users to submit inquiries to the Namer team.  

---

## 🚀 **Key Features** 

* **Informative Platform:** Provides detailed information on the ZLD-based water treatment system, covering its benefits, technology, applications, and environmental impact. Users can view diagrams and system workflows for better understanding.

* **Responsive & User-Friendly Design:** Offers a dynamic, interactive design with seamless navigation across desktop, tablet, and mobile devices.

* **Contact Form:** Enables users to submit inquiries directly to the Namer support team via a dedicated contact page, enhancing communication and support.

* **Planned Admin Dashboard:** (**Not Yet Implemented**): A feature in progress for administrators to manage inquiries, update product information, and oversee website content.

* **Backend API Integration:** The frontend communicates with a robust Express.js backend, enabling seamless handling of inquiries, data storage, and interactions with the MongoDB database. 

---

## ⚙️ **Tech Stack** 

### Backend: 
- Node.js  
- Express.js  
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication

### Frontend:  
- React  
- React Router DOM 
- HTML5, CSS3 

- **Environment**:
  - dotenv for environment variable management

---

**Proxy Configuration**:  

To enable seamless communication between the frontend (React) and the backend (Express.js) and to address Cross-Origin Resource Sharing (CORS) issues, a proxy is configured in the `client/package.json` file:

```json
"proxy": "http://localhost:4000"
```

This configuration allows the React frontend to make API calls to the backend server (running on port 4000) using relative paths (e.g., `/api/user/contact-us`) instead of the full URL (`http://localhost:4000/api/user/contact-us`). This simplifies development and improves maintainability.

---

## 📦 **Database**  

- **User Collection**: Stores inquiries submitted via the contact form.

- **Product Collection**: Stores ZLD-based product details displayed on the site.  

- **Admin Collection**: Stores administrator data for secure authentication and access control.  

![alt text](/readme-imgs/mongodb.png)

---

## 🔐 **Authentication and Authorization**  

Admins can register and log in using JWT tokens for secure authentication. Certain routes, such as managing products and viewing inquiries, are protected and require a valid JWT token.  

---

## 🌐 **API Endpoints** 

| **Endpoint**          | **Method** | **Access**    | **Description**         |
|---------------------|------------|---------------|-------------------------|
| `/api/user/contact-us` | POST     | Public        | Submit an inquiry form  |
| `/api/product/`       | GET      | Public        | Get all product details |
| `/api/admin/signup`   | POST     | Public        | Admin registration      |
| `/api/admin/login`    | POST     | Public        | Admin login             |
| `/api/admin/inquiries`| GET      | Admin-only    | View all user inquiries |
| `/api/admin/product`  | POST     | Admin-only    | Add a new product       |
| `/api/admin/product/:id`| PATCH  | Admin-only    | Update product details  |
| `/api/admin/product/:id`| DELETE | Admin-only    | Delete a product        |

---

## 🌟 **Website Preview** 

The following screenshots provide a visual walkthrough (Demo) of the Namer website, showcasing its pages, key features and user interface flow. 

1. **Home Page**  
![alt text](/readme-imgs/1.png)

2. **About Page** 
![alt text](/readme-imgs/2.png)
![alt text](/readme-imgs/3.png)  

3. **Product Page** 
![alt text](/readme-imgs/4.png)
![alt text](/readme-imgs/5.png) 

4. **Water Pollution Control Page**
![alt text](/readme-imgs/6.png)
![alt text](/readme-imgs/7.png)
![alt text](/readme-imgs/8.png)  

5. **Application Page** 
![alt text](/readme-imgs/9.png)
![alt text](/readme-imgs/10.png)
![alt text](/readme-imgs/11.png)  

6. **Contact Us Page**  
   Provides a form for users to submit inquiries and company contact details. 
![alt text](/readme-imgs/12.png)
![alt text](/readme-imgs/13.png)  