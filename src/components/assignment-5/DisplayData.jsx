'use client';

const DisplayData = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre style={{ background: '#f0f0f0', padding: '1em' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default DisplayData;
