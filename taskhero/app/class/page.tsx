"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const ClassListPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start p-4 bg-white min-h-screen font-sans">
      
      {/* ステータスラベル: 履修中 */}
      <div className="mb-[10px] w-[75px] h-[25px] bg-[#e0e0e0] rounded-[50px] flex items-center justify-center text-[17px] text-black">
        履修中
      </div>

      {/* 授業リストコンテナ */}
      <div className="bg-[#e0e0e0] h-[600px] w-[350px] p-[10px] rounded-[15px] flex flex-wrap content-start gap-4">
        
        {/* 新規作成カード */}
        <button 
          onClick={() => router.push('/jugyou')}
          className="m-0 p-0 w-[75px] h-[100px] bg-gray-500 rounded-[15px] flex flex-col items-center hover:bg-gray-600 transition shadow-sm"
        >
          <div className="pt-[5px] text-[17px] mb-[5px] text-white">
            新規作成
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-white text-black text-[30px] flex items-center justify-center leading-none">
            +
          </div>
        </button>

        {/* 今後、登録済みの授業を表示する場合は 
            ここで map処理 などを行い、カードを増やしていくことができます。
        */}
      </div>

      {/* フッターナビゲーション */}
      <div className="mt-[10px] bg-[#505050] w-[370px] h-[35px] rounded-[15px] flex items-center justify-around px-1">
        <div className="w-[117px] h-[26px] bg-[#e0e0e0] text-black rounded-[15px] text-sm flex items-center justify-center">
          授業
        </div>
        <button 
          onClick={() => router.push('/calendar')}
          className="w-[117px] h-[26px] bg-[#8c8c8c] text-white rounded-[15px] text-sm hover:bg-gray-600 transition"
        >
          カレンダー
        </button>
        <button 
          onClick={() => router.push('/record')}
          className="w-[117px] h-[26px] bg-[#8c8c8c] text-white rounded-[15px] text-sm hover:bg-gray-600 transition"
        >
          記録
        </button>
      </div>

    </div>
  );
};

export default ClassListPage;