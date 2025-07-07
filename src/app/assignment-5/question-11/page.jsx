"use client"

import WithLogger from '@/components/assignment-5/WithLogger';
import HelloComponent from '@/components/assignment-5/HelloComponent';

const LoggedHelloComponent = WithLogger(HelloComponent);

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Home Page</h1>
      <LoggedHelloComponent name="Next.js User" />
    </div>
  );
}
