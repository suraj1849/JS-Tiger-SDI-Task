import React from "react";
import DownloadIcon from "../../assets/icons/download.png";

const DownloadBtn = () => {
  const handleDownload = () => {
    const fileUrl = "data/analytics.json";
    window.open(fileUrl, "_blank");
  };

  return (
    <button
      style={{
        backgroundColor: "#EB5D50",
        color: "white",
        padding: "16px 24px",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontWeight: "bold",
        fontSize: "1rem",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleDownload}
    >

      <img src={DownloadIcon} alt="Download Icon" /> Download
    </button>
  );
};

export default DownloadBtn;
