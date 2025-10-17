import React from 'react';

// Card component that accepts props.children
function Card({ children }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', marginBottom: '10px' }}>
      {children}
    </div>
  );
}

// Example usage: wrapping different elements inside Card
function App() {
  return (
    <div style={{ width: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <Card>
        <h2>Card Title</h2>
        <p>This is a simple card with a title and text content.</p>
      </Card>

      <Card>
        <button style={{ padding: '8px 12px', borderRadius: '5px', border: 'none', background: '#007bff', color: '#fff' }}>
          Click Me
        </button>
      </Card>

      <Card>
        <img src="https://via.placeholder.com/350x150" alt="Example" style={{ width: '100%', borderRadius: '8px' }} />
        <p>Image inside a card with consistent styling.</p>
      </Card>
    </div>
  );
}

export default App;