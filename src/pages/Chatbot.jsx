// // src/components/Chatbot.js
// import React, { useState, useEffect } from 'react';
// import './Rating.css';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [visible, setVisible] = useState(false);

//   const faqData = {
//     "What is your return policy?": "Our return policy is 30 days with a receipt.",
//     "What are your hours of operation?": "We are open from 9am to 9pm, Monday to Saturday.",
//     "Where can I find the courses?": "You can find them all on the landing page of the website.",
//     "Where can I find projects to learn?": "You can find them all at the Projects section collectively.",
//     "Will this be really beneficial for me?": "Yes, of course, if you are a true learner."
//     // Add more FAQs here
     
//   };

//   useEffect(() => {
//     // Add initial message on component mount
//     setMessages([{ text: "Hello, How can I help you?", sender: 'bot' }]);
//   }, []);

//   const handleSend = () => {
//     if (input.trim()) {
//       const userMessage = { text: input, sender: 'user' };
//       const botResponse = faqData[input.trim()] || "Sorry, I can able to answer for courses, projects & return policy.";

//       setMessages([...messages, userMessage, { text: botResponse, sender: 'bot' }]);

//       setInput('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
      
//       handleSend();
//     }
//   };

//   return (
//     <div>
//       <div className="chatbot-icon" onClick={() => setVisible(!visible)}>
//         💬
//       </div>
//       {visible && (
//         <div className="chatbot">
//           <div className="chatbot-header">
//             <h4>FAQ Chatbot</h4>
//             <button onClick={() => setVisible(false)}>X</button>
//           </div>
//           <div className="chatbot-messages">
//             {messages.map((msg, index) => (
//               <div key={index} className={`message ${msg.sender}`}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="chatbot-input">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Ask a question..."
//             />
//             <button onClick={handleSend}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


import React, { useState, useEffect } from 'react';

const faqData = {
  "What is your return policy?": "Our return policy allows returns within 30 days of purchase with a valid receipt. Please retain your receipt for hassle-free service.",
  "How can I track my order?": "You can track your order via the 'Order History' section once you log into your account. Tracking details are updated as soon as your order ships.",
  "How can I contact customer support?": "You can reach customer support through live chat, email at support@example.com, or by calling (123) 456-7890.",
  "What payment methods do you accept?": "We accept credit/debit cards, UPI, net banking, and digital wallets like Paytm and Google Pay.",
  "Where can I find my invoices?": "All your invoices are available in your account’s 'Order History' section.",
  "How do I create an account?": "Click 'Sign Up' on the top-right corner and fill in the details.",
  "How can I reset my password?": "Click 'Forgot Password?' on the login page and follow instructions.",
  "Do you offer discounts or coupons?": "Yes, keep an eye on special events and newsletters!",
  "Where can I find the courses?": "Courses are listed on the landing page under 'Courses'.",
  "Where can I find projects to learn?": "All projects are in the 'Projects' section with resources.",
  "How do I update my profile information?": "Edit details in your account settings.",
  "What are your hours of operation?": "9AM to 9PM, Monday to Saturday.",
  "Is my personal information secure?": "We use strict security protocols to protect your data.",
  "How do I change my shipping address?": "Update it in account settings before placing new orders.",
  "How do I report a technical issue?": "Use 'Report an Issue' in your dashboard or contact support.",
  "Will this be really beneficial for me?": "Yes, designed to maximize your learning!",
  "Can I speak to a human agent?": "Select 'Talk to a human' or contact support.",
  "How to unsubscribe from emails?": "Click 'Unsubscribe' at the bottom of any email.",
  "How do I delete my account?": "In account settings, choose 'Delete Account' and confirm.",
  "What should I do if my payment fails?": "Check payment details and retry or contact support.",
  "How can I leave feedback?": "Use the 'Feedback' section or chat with us.",
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMessages([{ text: "Hello! Select a question below 👇", sender: "bot" }]);
  }, []);

  const handleQuestionClick = (question) => {
    const userMessage = { text: question, sender: "user" };
    const botResponse = faqData[question] || "Sorry, I can answer only about courses, projects & return policy.";
    setMessages((prev) => [...prev, userMessage, { text: botResponse, sender: "bot" }]);
  };

  return (
    <div className="fixed right-8 bottom-20 z-50 font-sans flex flex-col items-end">
      {/* 1. Chatbox appears above the button */}
      {visible && (
        <div
          className="mb-3 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-in-up"
          style={{
            width: 380,
            marginBottom: "1rem", // Extra space between chatbox and icon
          }}
        >
          <header className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <h4 className="text-lg font-semibold">FAQ Chatbot</h4>
            <button
              onClick={() => setVisible(false)}
              aria-label="Close chatbot"
              className="text-white text-xl font-bold hover:text-gray-200 transition"
            >
              ×
            </button>
          </header>
          <main className="flex-1 overflow-y-auto p-4 space-y-2 max-h-80 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-4 py-2 rounded-xl shadow
                  ${msg.sender === "user" ? "bg-blue-100 self-end text-right" : "bg-white self-start text-left"}`}
              >
                {msg.text}
              </div>
            ))}
          </main>
          <footer className="p-4 border-t bg-gray-100 grid grid-cols-2 gap-3 max-h-40 overflow-y-auto">
            {Object.keys(faqData).map((q) => (
              <button
                key={q}
                onClick={() => handleQuestionClick(q)}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md text-xs p-2 truncate shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                title={q}
              >
                {q}
              </button>
            ))}
          </footer>
        </div>
      )}
      {/* 2. Chatbot icon always at bottom */}
      <button
        onClick={() => setVisible(!visible)}
        aria-label="Toggle chatbot"
        className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {visible ? "×" : "💬"}
      </button>
    </div>
  );
};

export default Chatbot;