import React from "react";

const Loader = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    marginBottom: "5px",
  };

  const dotStyle = {
    height: "12px",
    width: "12px",
    marginRight: "10px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    animation: "pulse 1.5s infinite ease-in-out",
  };

  const lastDotStyle = {
    ...dotStyle,
    marginRight: "0",
  };

  const keyframes = `
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    `;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <div style={{ ...dotStyle, animationDelay: "-0.3s" }}></div>
      <div style={{ ...dotStyle, animationDelay: "-0.1s" }}></div>
      <div style={{ ...dotStyle, animationDelay: "0.1s" }}></div>
      <div style={{ ...dotStyle, animationDelay: "0.3s" }}></div>
      <div style={lastDotStyle}></div>
    </div>
  );
};

export default Loader;
