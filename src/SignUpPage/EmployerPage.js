import React, { useState } from "react";

const EmployerPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    contactNumber: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employer Data Submitted:", formData);
    // Add API call or validation logic here
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.header}>Employer Sign Up</h1>

        <label style={styles.label}>Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Website URL</label>
        <input
          type="url"
          name="website"
          placeholder="Enter company website"
          value={formData.website}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Contact Number</label>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Enter contact number"
          value={formData.contactNumber}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Company Description</label>
        <textarea
          name="description"
          placeholder="Enter a short description of the company"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <label style={styles.label}>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  form: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#000",
  },
  label: {
    display: "block",
    marginTop: "10px",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    resize: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default EmployerPage;
