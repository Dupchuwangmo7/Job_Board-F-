import React, { useState } from "react";

const SeekerPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    portfolioURL: "",
    contactNumber: "",
    resume: null,
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Seeker Data Submitted:", formData);
    // Add API call or form validation logic here
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.header}>Job Seeker Sign Up</h1>

        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
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

        <label style={styles.label}>Portfolio URL</label>
        <input
          type="url"
          name="portfolioURL"
          placeholder="Enter your portfolio URL"
          value={formData.portfolioURL}
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

        <label style={styles.label}>Resume (Upload)</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          style={styles.input}
        />

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

export default SeekerPage;
