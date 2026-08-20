
import Image from "next/image";

export default function DisastersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold mb-6">Kiến thức Phòng chống Thiên tai</h2>
      <p className="text-gray-600 mb-4">Các tài liệu dưới đây được trích xuất từ hướng dẫn của Cơ quan Khí tượng Nhật Bản và Sở Cứu hỏa Tokyo.</p>
      
      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold bg-blue-100 p-2 rounded mb-4">1. Bão, Mưa lớn (台風・大雨)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/pdfs/media_1787190317549_page_1.png" alt="Bão mưa lớn 1" className="rounded shadow-md w-full" />
            <img src="/images/pdfs/media_1787190317549_page_2.png" alt="Bão mưa lớn 2" className="rounded shadow-md w-full" />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold bg-yellow-100 p-2 rounded mb-4">2. Động đất & Hỏa hoạn (地震・火事)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/pdfs/media_1787190317819_page_2.png" alt="Động đất Hỏa hoạn" className="rounded shadow-md w-full col-span-1 md:col-span-2" />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold bg-green-100 p-2 rounded mb-4">3. Cách lánh nạn (避難のしかた)</h3>
          <div className="grid grid-cols-1 gap-4">
            <img src="/images/pdfs/media_1787190318601_page_1.png" alt="Cách lánh nạn 1" className="rounded shadow-md w-full" />
            <img src="/images/pdfs/media_1787190318601_page_2.png" alt="Cách lánh nạn 2" className="rounded shadow-md w-full" />
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-bold bg-gray-200 p-2 rounded mb-4">4. Thông tin Sơ tán Mới (新たな避難情報)</h3>
          <div className="grid grid-cols-1 gap-4">
            <img src="/images/pdfs/media_1787190317976_page_12.png" alt="Thông tin sơ tán" className="rounded shadow-md w-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
