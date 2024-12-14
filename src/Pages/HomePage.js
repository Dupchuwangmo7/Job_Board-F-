import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Job Board</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About</a>
          <a href="#" style={styles.navLink}>Company reviews</a>
        </nav>
        <div style={styles.authLinks}>
          <Link to="/sign-in" style={styles.authLink}>Sign in</Link>
          <Link to="/sign-up" style={styles.authLink}>Sign Up</Link>
        </div>
      </header>
            {/* Search Section */}
            <section style={styles.searchSection}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            style={styles.input}
          />
          
          <button style={styles.searchButton}>Search</button>
        </div>
      </section>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1>Welcome to Indeed!</h1>
          <p>Create an account or sign in to see your personalized job recommendations.</p>
          <button style={styles.getStartedButton}>Get Started →</button>
        </div>
        <img
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Welcome illustration"
          style={styles.heroImage}
        />
      </section>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#003b9f',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#003b9f',
  },
  authLinks: {
    display: 'flex',
    gap: '15px',
  },
  authLink: {
    textDecoration: 'none',
    color: '#003b9f',
  },
  searchSection: {
    backgroundColor: '#f9f9f9',
    padding: '20px 0',
    textAlign: 'center',
  },
  searchContainer: {
    display: 'inline-flex',
    gap: '10px',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '300px',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: '#003b9f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  heroSection: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#eef4fc',
  },
  heroText: {
    maxWidth: '400px',
  },
  heroImage: {
    maxWidth: '300px',
  },
  getStartedButton: {
    padding: '10px 20px',
    backgroundColor: '#003b9f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '10px',
  },
  footerLink: {
    textDecoration: 'none',
    color: '#003b9f',
  },
};

export default HomePage;
