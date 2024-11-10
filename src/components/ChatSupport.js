import React, { useState, useEffect } from 'react';
import '../styles/ChatSupport.css';

const ChatSupport = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'How can I contact you?', timestamp: new Date() },
    { sender: 'support', text: 'You can use this chat!', timestamp: new Date() },
    { sender: 'user', text: 'Thanks for your help!', timestamp: new Date() },
  ]);
  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  //данные сотрудника
  const supportAgent = {
    name: 'Ivan Ivanov',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    status: 'online',
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
    setIsTyping(e.target.value !== '');
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([
        ...messages,
        { sender: 'user', text: messageInput, timestamp: new Date() },
      ]);
      setMessageInput('');
      setIsTyping(false);

      //имитация ответа оператора
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'support', text: 'Your request has been accepted. How can I help you?', timestamp: new Date() },
        ]);
      }, 1500); //оператор отвечает через 1,5 секунды
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMessages = messages.filter((message) =>
    message.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const chatWindow = document.querySelector('.chat-body');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      {/* Иконка чата */}
      <div className="chat-support" onClick={toggleChat}>
        <i className="fas fa-comments"></i>
      </div>

      {/* Окно чата */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="support-info">
              <img
                src={supportAgent.avatar}
                alt="Аватар"
                className="support-avatar"
              />
              <div>
                <h3>Technical support</h3>
                <p>{supportAgent.name}</p>
                <span className={`status ${supportAgent.status}`}>
                  {supportAgent.status === 'online' ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            <button className="close-button" onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Поле поиска */}
          <div className="chat-search">
            <input
              type="text"
              placeholder="Search by messages..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* История сообщений */}
          <div className="chat-body">
            {filteredMessages.map((message, index) => (
              <div key={index} className={`message-bubble ${message.sender}`}>
                <div className="message-avatar">
                  <i className={`fas fa-${message.sender === 'user' ? 'user' : 'headset'}`}></i>
                </div>
                <div className="message-text">
                  <p>{message.text}</p>
                  <span className="timestamp">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}

            {/* Индикатор набора текста */}
            {isTyping && (
              <div className="typing-indicator">
                <span>The operator is dialing...</span>
              </div>
            )}
          </div>

          {/* Поле ввода и кнопка отправки */}
          <div className="chat-footer">
            <textarea
              value={messageInput}
              onChange={handleMessageChange}
              placeholder="Enter your message..."
              rows={3}
            />
            <button className="send-button" onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
