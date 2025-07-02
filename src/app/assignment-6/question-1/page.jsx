"use client";
import dynamic from 'next/dynamic';

const HomeComponent = dynamic(() => import('@/components/assignment-6/HomeComponent'), {
  loading: () => (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        color: "#555",
      }}
    >
      Loading Home...
    </div>
  ),
  ssr: false,
});

export default function Age() {
  return <HomeComponent />;
}
