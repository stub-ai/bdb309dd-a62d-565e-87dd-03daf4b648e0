import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch('/api/visitorCount')
      .then(response => response.json())
      .then(data => setVisitorCount(data.count));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>Visitor count: {visitorCount}</p>
    </main>
  )
}