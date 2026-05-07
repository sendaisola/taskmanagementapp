"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const JugyouPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#282828]">
      {/* ヘッダー */}
      <header className="w-full">
        <div className="px-12 py-5">
          <button 
            onClick={() => router.push('/class')}
            className="text-xl font-bold hover:opacity-50 transition-opacity"
          >
            ＜戻る
          </button>
        </div>

        <div className="mx-12 mb-5 mt-10 flex flex-row justify-around items-center">
          <h2 className="text-2xl font-bold">授業登録</h2>
          
          <button 
            className="bg-gray-300 px-3 py-1 rounded-xl text-lg hover:opacity-50 transition-opacity"
            onClick={() => alert('登録しました')}
          >
            登録
          </button>
        </div>
      </header>

      {/* 登録フォーム部分 */}
      <div className="mx-12 my-10 flex flex-col gap-6">
        
        <section>
          <h4 className="text-lg font-bold">授業名</h4>
          <div className="w-full h-[50px] bg-gray-200 mt-1 rounded-xl" />
        </section>

        <section>
          <h4 className="text-lg font-bold">色</h4>
          <div className="w-full h-[50px] bg-gray-200 mt-1 rounded-xl" />
        </section>

        <section>
          <h4 className="text-lg font-bold">単位</h4>
          <div className="w-full h-[50px] bg-gray-200 mt-1 rounded-xl" />
        </section>

        <section>
          <h4 className="text-lg font-bold">メモ</h4>
          <div className="w-full h-[150px] bg-gray-200 mt-1 rounded-xl" />
        </section>

      </div>
    </div>
  );
};

export default JugyouPage;