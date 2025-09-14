# **StudyNotion - EdTech Platform**

StudyNotion is a fully functional, feature-rich ed-tech platform designed to revolutionize online learning. Built with the MERN stack (**MongoDB**, **Express.js**, **React.js**, and **Node.js**), this platform offers a seamless learning experience for students while providing instructors with the tools to showcase their expertise.

With a focus on interactivity, scalability, and user-friendliness, StudyNotion bridges the gap between learners and educators worldwide.

---

## **Features**

### **For Students**
- **Explore Courses**: Browse a comprehensive list of courses with detailed descriptions and ratings.
- **Wishlist Management**: Save favorite courses for later.
- **Cart and Checkout**: Purchase courses effortlessly using integrated payment gateways (Razorpay).
- **Learning Experience**: Access course content, including videos, PDFs, and more.
- **Profile Management**: Update and manage user account details.

### **For Instructors**
- **Dashboard**: Track course performance through ratings, feedback, and engagement metrics.
- **Course Management**: Create, update, and delete courses with ease, including media and pricing.
- **Insights**: Get detailed analytics on course performance, including views and clicks.
- **Profile Customization**: Manage personal details and profile information.

### **For Admins (Future Scope)**
- **Platform Overview**: Manage courses, students, and instructors.
- **Insights and Metrics**: Access platform-wide statistics such as revenue and user count.
- **User Management**: Administer user accounts and activities.

---

## **Tech Stack**

### **Front-End**
- **React.js**: For building dynamic, responsive user interfaces.
- **CSS/Tailwind CSS**: For beautiful and mobile-friendly designs.
- **Redux**: For efficient state management.

### **Back-End**
- **Node.js**: Provides a robust runtime environment for scalable server-side applications.
- **Express.js**: Simplifies the development of RESTful APIs.
- **MongoDB**: A flexible, NoSQL database for structured and unstructured data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

### **Additional Tools**
- **JWT**: For secure user authentication.
- **Bcrypt**: For password encryption.
- **Cloudinary**: For managing and optimizing media content.
- **Razorpay**: For seamless payment processing.

---

## **System Architecture**
StudyNotion follows a **client-server architecture** with three key components:

1. **Front-End**: React-based interface that interacts with the back-end via RESTful APIs.
2. **Back-End**: Node.js and Express.js power the server-side logic, handling API requests and processing data.
3. **Database**: MongoDB stores user data, course content, and other critical information.

### **Deployment**
- **Front-End**: Hosted on **Vercel** for scalability and performance.
- **Back-End**: Deployed on **Render** or **Railway**.
- **Database**: Managed on **MongoDB Atlas**.
- **Media Files**: Stored and optimized via **Cloudinary**.

---

## **API Overview**
The RESTful API design ensures efficient communication between the front-end and back-end. Key endpoints include:

- **User Authentication**: `/api/auth/signup`, `/api/auth/login`, `/api/auth/forgot-password`.
- **Course Management**: `/api/courses` (GET, POST, PUT, DELETE).
- **Ratings**: `/api/courses/:id/rate` for adding course ratings.

---

## **Future Enhancements**
- **Gamification**: Badges, points, and leaderboards to motivate learners.
- **Personalized Learning**: Tailored learning paths based on user preferences and performance.
- **Mobile Application**: Enhance accessibility with a dedicated mobile app.
- **AI Recommendations**: Machine learning for personalized course suggestions.
- **Social Learning**: Group discussions and peer feedback for better engagement.
- **AR/VR Integration**: Immersive learning experiences for selected courses.

---

## **Getting Started**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/the-Shikha/Study_Notion.git
   
2. Navigate to the project directory:
   ```bash
   cd studynotion

3. Install dependencies for the back-end and front-end:
   ```bash
   npm install
   cd client && npm install

### **Usage**

1. Start the back-end server:
   ```bash
   npm start

2. Start the front-end development server:
   ```bash
   cd client && npm start

3.Access the application at http://localhost:3000.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> dd888a6 (Project done)
