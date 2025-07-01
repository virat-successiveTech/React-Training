"use client"
const HelloComponent = ({ name }) => {
  return (
    <div style={{ fontSize: '20px', padding: '20px' }}>
      Hello, {name || 'Guest'}!
    </div>
  );
};

export default HelloComponent;
