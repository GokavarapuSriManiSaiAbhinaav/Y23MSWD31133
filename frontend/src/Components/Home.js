import React from 'react';

function Home() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Poppins', sans-serif",
    },
    banner: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    title: {
      fontSize: '3rem',
      color: '#333',
    },
    brandName: {
      color: '#007BFF',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '1.2rem',
      color: '#555',
      marginTop: '10px',
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#ffffff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.brandName}>DOORSTEP</span>
        </h1>
        <p style={styles.description}>
          Your one-stop destination for all your needs, delivered right to your doorstep!
        </p>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Home;
