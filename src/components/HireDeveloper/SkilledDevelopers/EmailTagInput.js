import React, { useState } from "react";

const EmailTagInput = ({ onChange }) => {
  const [emails, setEmails] = useState([]);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputKeydown = (e) => {
    if (e.key === "Enter" && input) {
      const newEmails = [...emails, input];
      setEmails(newEmails);
      setInput("");
      if (onChange) handleTagsChange(newEmails);
    } else if (e.key === "Backspace" && !input) {
      const newEmails = emails.slice(0, emails.length - 1);
      setEmails(newEmails);
      if (onChange) handleTagsChange(newEmails);
    }
  };

  const handleRemoveEmail = (index) => {
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
    if (onChange) handleTagsChange(newEmails);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "6.847px",
        fontSize: "15.65px",
        border: `2px solid ${
          isFocused ? "var(--primary, #28b781)" : "#e3e3e3"
        }`,
        width: "100%",
      }}
      onClick={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {emails.map((email, index) => (
        <div
          key={index}
          style={{
            padding: "5px",
            margin: "2px",
            backgroundColor: "#e4e4e4",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {email}
          <span
            onClick={() => handleRemoveEmail(index)}
            style={{ marginLeft: "5px", cursor: "pointer" }}
          >
            x
          </span>
        </div>
      ))}
      <input
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleInputKeydown}
        style={{ border: "none", outline: "none", flexGrow: 1 }}
        placeholder="Enter Guest Emails"
      />
    </div>
  );
};

export default EmailTagInput;
