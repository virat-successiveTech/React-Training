"use client";
import dynamic from 'next/dynamic';

const ContactComponent = dynamic(() => import('@/components/assignment-6/ContactComponent'), {
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
      Loading Contact...
    </div>
  ),
  ssr: false,
});

export default function Page() {
  return <ContactComponent />;
}
