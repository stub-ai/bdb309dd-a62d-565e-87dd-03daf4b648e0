import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Nuts BUSTED {counter}</h1>
    </main>
  );
}