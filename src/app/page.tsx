
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-600">防災学習アプリ</h2>
        <h3 className="text-xl font-semibold text-gray-700">Ứng dụng Học tập Phòng chống Thiên tai</h3>
        <p className="text-gray-600">Dành cho thực tập sinh và người lao động Việt Nam tại Nhật Bản.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/disasters" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Kiến thức cơ bản 📘</h5>
          <p className="font-normal text-gray-700">Cách ứng phó khi có động đất, sóng thần, bão và hỏa hoạn.</p>
        </Link>
        <Link href="/checklist" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Danh sách đồ dự phòng 🎒</h5>
          <p className="font-normal text-gray-700">Kiểm tra và chuẩn bị đồ dùng khẩn cấp (có thể tải PDF).</p>
        </Link>
        <Link href="/vocab" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Từ vựng tiếng Nhật 🗣️</h5>
          <p className="font-normal text-gray-700">Học từ vựng cơ bản với phát âm chuẩn (có thể tải PDF).</p>
        </Link>
        <Link href="/quiz" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Quiz Kiểm tra 📝</h5>
          <p className="font-normal text-gray-700">Kiểm tra lại kiến thức của bạn qua các câu hỏi trắc nghiệm.</p>
        </Link>
        <a href="https://tabunka.tokyo-tsunagari.or.jp/disaster/movie.html" target="_blank" rel="noopener noreferrer" className="block p-6 bg-red-50 rounded-lg border border-red-200 shadow-sm hover:bg-red-100 md:col-span-2 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-700">Video hướng dẫn (Tokyo) 🎥</h5>
          <p className="font-normal text-red-600">Xem video đa ngôn ngữ về phòng chống thiên tai.</p>
        </a>
      </div>
    </div>
  );
}
