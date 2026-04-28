"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CalendarPage = () => {
  const router = useRouter();
  
  // 現在表示している年月の状態管理
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

  // 月を変更する関数
  const changeMonth = (delta: number) => {
    const newDate = new Date(year, month + delta, 1);
    setCurrentDate(newDate);
  };

  // カレンダーの生成ロジック
  const generateCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];

    // 空白の日
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 border-t border-l border-[#cfcfcf]"></div>);
    }

    // 日付
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      const dayOfWeek = dateObj.getDay();
      
      let textColor = "text-black";
      if (dayOfWeek === 0) textColor = "text-red-500"; // 日曜日
      if (dayOfWeek === 6) textColor = "text-blue-500"; // 土曜日

      const isToday = 
        year === today.getFullYear() && 
        month === today.getMonth() && 
        day === today.getDate();

      days.push(
        <div 
          key={day} 
          className={`p-2 border-t border-l border-[#cfcfcf] text-center ${textColor} ${isToday ? "bg-yellow-100 font-bold" : ""}`}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="flex flex-col items-start p-4 bg-white min-h-screen font-sans">
      
      {/* トップバー (カレンダー/リスト切り替え) */}
      <div className="flex items-end h-[60px] gap-[10px]">
        <div className="bg-[#d9d9d9] rounded-t-[15px] px-5 py-1 mb-[5px] relative -top-[1px]">
          カレンダー
        </div>
        <button 
          onClick={() => router.push('/list')}
          className="bg-[#8c8c8c] text-white rounded-t-[15px] px-5 py-1 hover:bg-gray-600 transition"
        >
          リスト
        </button>
        
        <div className="flex items-center ml-10 gap-4">
          <button onClick={() => changeMonth(-1)} className="p-1">＜</button>
          <div className="text-lg font-bold w-24 text-center">
            {year}年 {monthNames[month]}
          </div>
          <button onClick={() => changeMonth(1)} className="p-1">＞</button>
        </div>
      </div>

      {/* 曜日ヘッダー */}
      <div className="grid grid-cols-7 w-[330px] border-t-2 border-x-2 border-gray-500 text-center">
        {weekDays.map((wd, i) => (
          <div key={wd} className={`p-2 border-l border-[#cfcfcf] first:border-l-0 ${i === 0 ? "text-red-500" : i === 6 ? "text-blue-500" : ""}`}>
            {wd}
          </div>
        ))}
      </div>

      {/* 日付グリッド */}
      <div className="grid grid-cols-7 w-[330px] border-2 border-gray-500 text-center">
        {generateCalendar()}
      </div>

      {/* フッターナビゲーション */}
      <div className="mt-[10px] bg-[#505050] w-[370px] h-[35px] rounded-[15px] flex items-center justify-around px-1">
        <button 
          onClick={() => router.push('/class')}
          className="w-[117px] h-[26px] bg-[#8c8c8c] text-white rounded-[15px] text-sm hover:bg-gray-600"
        >
          授業
        </button>
        <div className="w-[117px] h-[26px] bg-[#e0e0e0] text-black rounded-[15px] text-sm flex items-center justify-center">
          カレンダー
        </div>
        <button 
          onClick={() => router.push('/record')}
          className="w-[117px] h-[26px] bg-[#8c8c8c] text-white rounded-[15px] text-sm hover:bg-gray-600"
        >
          記録
        </button>
      </div>

    </div>
  );
};

export default CalendarPage;