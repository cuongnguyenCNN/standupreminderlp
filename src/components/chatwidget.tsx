// components/ChatWidget.tsx
import React from "react";

const ChatWidget = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 1000,
      }}
    >
      {/* Telegram */}
      <a
        href="https://t.me/YOUR_TELEGRAM_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#0088cc",
          color: "white",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          fontSize: 24,
        }}
        title="Chat Telegram"
      >
        <i className="fa fa-telegram" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/YOUR_ZALO_ID"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#0068FF",
          color: "white",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          fontSize: 24,
          fontWeight: "bold",
        }}
        title="Chat Zalo"
      >
        Z
      </a>
    </div>
  );
};

export default ChatWidget;
