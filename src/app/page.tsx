// src/app/page.tsx

export const metadata = {
  title: 'Certificate Generator',
  description: 'ICPEP Tech Dept Certificate Generator',
  icons: {
    icon: "/favicon-32x32.png"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="mesh-gradient">
        <div className="mesh-blob mesh-1"></div>
        <div className="mesh-blob mesh-2"></div>
        <div className="mesh-blob mesh-3"></div>
        <div className="mesh-blob mesh-4"></div>
      </div>
    </div>
  );
}
