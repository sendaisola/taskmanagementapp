"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  // 画面全体をクリックしたときに実行される関数
  const handleScreenClick = () => {
    router.push('/class'); // class.html ではなく /class へ移動
  };

  return (
    <div 
      onClick={handleScreenClick}
      className="flex items-center justify-center min-h-screen cursor-pointer select-none"
    >
      <div className="text-[2em] font-bold underline">
        TaskHero
      </div>
    </div>
  );
};

export default HomePage;