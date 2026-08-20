
'use client';
import checklist from "@/data/checklist.json";
import { useState, useEffect } from "react";

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('disaster_checklist');
    if (saved) {
      try { setChecked(JSON.parse(saved)); } catch(e) {}
    }
  }, []);

  const toggle = (id: string) => {
    const newChecked = { ...checked, [id]: !checked[id] };
    setChecked(newChecked);
    localStorage.setItem('disaster_checklist', JSON.stringify(newChecked));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center print:hidden">
        <h2 className="text-2xl font-bold">Danh sách đồ dự phòng (非常持ち出し品)</h2>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tải PDF (In)
        </button>
      </div>
      <h2 className="hidden print:block text-2xl font-bold text-center mb-4">非常持ち出し品 - Danh sách đồ dự phòng khẩn cấp</h2>
      <p className="text-gray-600 print:hidden">Hãy chuẩn bị những vật dụng này trong một chiếc balo để có thể mang đi ngay khi có thiên tai.</p>

      {checklist.map((cat, idx) => (
        <div key={idx} className="bg-white shadow rounded-lg p-6 mb-4 break-inside-avoid">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">{cat.category}</h3>
          <ul className="space-y-3">
            {cat.items.map(item => (
              <li key={item.id} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={item.id} 
                  checked={!!checked[item.id]}
                  onChange={() => toggle(item.id)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mr-3 print:hidden"
                />
                <div className="hidden print:block w-5 h-5 border-2 border-gray-400 mr-3"></div>
                <label htmlFor={item.id} className="text-lg font-medium text-gray-900 cursor-pointer">
                  {item.ja} - <span className="text-gray-600">{item.vi}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
