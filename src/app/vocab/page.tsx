
'use client';
import vocab from "@/data/vocab.json";

export default function VocabPage() {
  const playAudio = (id: string) => {
    const audio = new Audio(`/audio/${id}.mp3`);
    audio.play();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center print:hidden">
        <h2 className="text-2xl font-bold">Từ vựng cơ bản (防災語彙表)</h2>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tải PDF (In)
        </button>
      </div>
      <h2 className="hidden print:block text-2xl font-bold text-center mb-4">防災語彙表 - Từ vựng phòng chống thiên tai</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">Tiếng Nhật</th>
              <th scope="col" className="px-6 py-3">Cách đọc</th>
              <th scope="col" className="px-6 py-3">Nghĩa tiếng Việt (English)</th>
              <th scope="col" className="px-6 py-3 print:hidden">Nghe</th>
            </tr>
          </thead>
          <tbody>
            {vocab.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap text-lg">
                  {item.ja}
                </th>
                <td className="px-6 py-4 text-gray-700">
                  {item.kana}
                </td>
                <td className="px-6 py-4 text-gray-900">
                  {item.vi} <br/><span className="text-xs text-gray-500">({item.meaning})</span>
                </td>
                <td className="px-6 py-4 print:hidden">
                  <button 
                    onClick={() => playAudio(item.id)}
                    className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200"
                    title="Phát âm thanh"
                  >
                    🔊
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
