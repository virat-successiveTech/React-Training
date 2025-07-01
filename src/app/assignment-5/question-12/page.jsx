import WithDataFetching from '@/components/assignment-5/WithDataFetching';
import DisplayData from '@/components/assignment-5/DisplayData';

const WrappedDisplayData = WithDataFetching(DisplayData);

const Page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store' 
  });
  const data = await res.json();

  return (
    <div
      style={{
        padding: '2em',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      <h1
        style={{
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        App Router - SSR with HOC
      </h1>
      <WrappedDisplayData data={data} />
    </div>
  );
};

export default Page;
