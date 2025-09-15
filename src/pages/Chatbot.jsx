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


import React, { useState, useEffect, useRef } from 'react';
import './Rating.css'; // Your existing CSS for styling

const faqData = {
  "What is your return policy?": "Our return policy allows returns within 30 days of purchase with a valid receipt. Please retain your receipt for hassle-free service.",
  "How can I track my order?": "You can track your order via the 'Order History' section once you log into your account. Tracking details are updated as soon as your order ships.",
  "How can I contact customer support?": "You can reach customer support through live chat, email at [support@example.com](mailto:support@example.com), or by calling (123) 456-7890.",
  "What payment methods do you accept?": "We accept credit/debit cards, UPI, net banking, and digital wallets like Paytm and Google Pay.",
  
  
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ text: "Hello! Select a question below 👇", sender: "bot" }]);
  }, []);

  useEffect(() => {
    if (visible && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, visible]);

  const handleQuestionClick = (question) => {
    setMessages((prev) => [
      ...prev,
      { text: question, sender: "user" },
      { text: faqData[question] || "Sorry, I can answer only about courses, projects & return policy.", sender: "bot" },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { text: input.trim(), sender: "user" },
      { text: faqData[input.trim()] || "Sorry, I can answer only about courses, projects & return policy.", sender: "bot" },
    ]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div>
      <div
        className="chatbot-icon"
        onClick={() => setVisible(!visible)}
        role="button"
        tabIndex={0}
        aria-label={visible ? "Close chatbot" : "Open chatbot"}
        onKeyDown={(e) => e.key === "Enter" && setVisible(!visible)}
      >
        💬
      </div>

      {visible && (
        <div
          className="chatbot"
          role="region"
          aria-live="polite"
          aria-label="FAQ Chatbot"
        >
          <div className="chatbot-header">
            <h4>FAQ Chatbot</h4>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Close chatbot"
              className="close-btn"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages" aria-live="polite" aria-relevant="additions">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Type your question"
              autoFocus
            />
            <button
              type="button"
              onClick={handleSend}
              aria-label="Send message"
              disabled={!input.trim()}
              className="send-btn"
            >
              Send
            </button>
          </div>

          <div className="chatbot-faq-wrapper" aria-label="Frequently asked questions">
            <div className="chatbot-faq-buttons">
              {Object.keys(faqData).map(q => (
                <button
                  key={q}
                  type="button"
                  className="faq-button"
                  onClick={() => handleQuestionClick(q)}
                  title={q}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;