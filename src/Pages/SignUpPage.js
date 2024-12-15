import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  // Navigate to Employer or Seeker page
  const handleNavigation = (role) => {
    if (role === "employer") {
      navigate("/employer-signup");
    } else if (role === "seeker") {
      navigate("/seeker-signup");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        {/* Header */}
        <h2 style={styles.header}>Welcome to Job Board Bhutan</h2>
        <p style={styles.subHeader}>Sign Up As</p>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => handleNavigation("employer")}
          >
            Employer
          </button>
          <button
            style={styles.button}
            onClick={() => handleNavigation("seeker")}
          >
            Seeker
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "30px",
    width: "400px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    margin: "0 0 10px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  subHeader: {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#666",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default SignUpPage;
