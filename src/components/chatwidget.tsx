// components/ChatWidget.tsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ChatWidget = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 50,
        right: 50,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        zIndex: 1000,
      }}
    >
      {/* Telegram */}
      <a
        href="https://t.me/@cuongnguyencnn1"
        target="_blank"
        rel="noopener noreferrer"
        className="chat-icon telegram"
        title="Chat Telegram"
      >
        <i className="fab fa-telegram-plane" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0964675349"
        target="_blank"
        rel="noopener noreferrer"
        className="chat-icon zalo"
        title="Chat Zalo"
      >
        <img src="/zalo.webp" alt="Zalo" style={{ width: 28, height: 28 }} />
      </a>

      <style jsx>{`
        .chat-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          transition: all 1s ease;
          animation: spin 8s linear infinite, pulse-glow 3s ease-in-out infinite;
        }

        .chat-icon:hover {
          transform: scale(1.15);
          animation: blink 0.5s alternate infinite, spin 8s linear infinite;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .telegram {
          background-color: #0088cc;
          color: white;
          font-size: 26px;
        }

        .zalo {
          background-color: #0068ff;
          overflow: hidden;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes blink {
          0% {
            filter: brightness(1);
          }
          100% {
            filter: brightness(1.5);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 18px rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;
