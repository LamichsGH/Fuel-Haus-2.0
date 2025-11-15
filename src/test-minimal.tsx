// Minimal test component to isolate the issue
import React from 'react';

export const MinimalTest = () => {
  return (
    <div style={{ padding: '20px', background: '#f5efea', minHeight: '100vh' }}>
      <h1 style={{ color: '#1c1c1c' }}>Minimal Test Component</h1>
      <p>If you can see this, React is working!</p>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{
          padding: '10px 20px',
          background: '#8b5e46',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Test Button
      </button>
    </div>
  );
};