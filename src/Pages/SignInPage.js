import React from "react";

const SignInPage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        {/* Header */}
        <h2 style={styles.header}>Welcome back</h2>
        <p style={styles.subHeader}>Enter your details to sign in</p>

        {/* Form */}
        <form>
          {/* Email Input */}
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />

          {/* Password Input */}
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
          />

          {/* Remember Me and Forgot Password */}
          <div style={styles.optionsContainer}>
            <label style={styles.rememberMe}>
              <input type="checkbox" style={styles.checkbox} /> Remember Me
            </label>
            <a href="#" style={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button type="submit" style={styles.signInButton}>
            Sign in
          </button>

          {/* Sign in with Google */}
          <button type="button" style={styles.googleButton}>
            Sign in with Google
          </button>
        </form>

       
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
    color: "#666",
    fontSize: "14px",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginTop: "10px",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  rememberMe: {
    fontSize: "14px",
    color: "#333",
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "5px",
  },
  forgotPassword: {
    fontSize: "14px",
    color: "#6a0dad",
    textDecoration: "none",
  },
  signInButton: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#6a0dad",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  googleButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  footerText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#333",
  },
  signUpLink: {
    color: "#6a0dad",
    textDecoration: "none",
  },
};

export default SignInPage;
