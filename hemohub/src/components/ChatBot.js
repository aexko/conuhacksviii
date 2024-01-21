import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello there! I am HemoBot, your personal assistant. How can I help you today?",
      time: new Date(),
      avatar: "https://picsum.photos/200",
      sender: "HemoBot",
    },
  ]);

  const handleSend = async (message) => {
    console.log(`New message incoming! ${message}`);
    const newMessage = {
      message: message,
      time: new Date(),
      is_user: true,
      avatar: "https://picsum.photos/200",
      sender: "User",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage]; // add the new message to the list of messages

    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <h1>ChatBot</h1>
      <div>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, index) => {
                return <Message key={index} model={message} />;
              })}
            </MessageList>
            <MessageInput
              onSend={handleSend}
              attachButton={false}
              placeholder="TYPE"
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

// export
export default ChatBot;
