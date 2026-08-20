
export default function DisastersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold mb-6">Kiến thức Phòng chống Thiên tai</h2>
      <p className="text-gray-600 mb-4">Các tài liệu dưới đây được tổng hợp từ hướng dẫn của Cơ quan Khí tượng Nhật Bản, Sở Cứu hỏa Tokyo và <a href="https://emg.yahoo.co.jp/notebook/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Sổ tay phòng chống thiên tai Yahoo (Yahoo! 防災手帳)</a>.</p>
      
      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold bg-blue-100 p-2 rounded mb-4">1. Sổ tay chuẩn bị hàng ngày (Dựa trên Yahoo! 防災手帳)</h3>
          <div className="bg-white p-6 rounded shadow-md border border-gray-200 space-y-4">
            <div>
              <h4 className="font-bold text-lg text-blue-800">📍 Bản đồ nguy hiểm & Nơi lánh nạn (ハザードマップ・避難場所)</h4>
              <p className="text-gray-700">Khi thiên tai chưa xảy ra, hãy kiểm tra <strong>Bản đồ nguy hiểm (Hazard Map)</strong> của khu vực bạn sinh sống để biết những rủi ro ngập lụt, lở đất. Đồng thời, tìm hiểu trước vị trí và tuyến đường đến <strong>Nơi lánh nạn (避難場所 - Hinanbasho)</strong> gần nhất.</p>
            </div>
            <hr />
            <div>
              <h4 className="font-bold text-lg text-blue-800">☎️ Liên lạc khẩn cấp (緊急連絡先)</h4>
              <p className="text-gray-700">Khi xảy ra thảm họa lớn, mạng điện thoại thường bị nghẽn. Hãy sử dụng <strong>Tổng đài tin nhắn dùng cho thiên tai (災害用伝言ダイヤル 171)</strong> để ghi âm hoặc nghe tin nhắn thoại từ người thân. Ngoài ra có thể dùng chức năng Message Board của các nhà mạng hoặc Zalo, Line để thông báo an toàn.</p>
            </div>
            <hr />
            <div>
              <h4 className="font-bold text-lg text-blue-800">⚠️ Ứng phó với các tình huống khác (その他の災害)</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Lốc xoáy (竜巻 - Tornado):</strong> Trú ẩn vào các tòa nhà kiên cố, tránh xa cửa sổ, chui xuống gầm bàn hoặc che kín đầu.</li>
                <li><strong>Tuyết rơi dày (大雪 - Snow):</strong> Hạn chế ra ngoài, cẩn thận trơn trượt. Nếu lái xe, bắt buộc phải dùng lốp mùa đông hoặc dây xích. Đề phòng tai nạn tuyết rơi từ mái nhà hoặc ngộ độc khí CO khi kẹt trong xe.</li>
                <li><strong>Sốc nhiệt (熱中症 - Heatstroke):</strong> Uống đủ nước và bổ sung muối, sử dụng máy điều hòa/quạt hợp lý. Tránh ra ngoài trời nắng gắt nếu không cần thiết.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold bg-blue-100 p-2 rounded mb-4">2. Bão, Mưa lớn (台風・大雨)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/pdfs/media_1787190317549_page_1.png" alt="Bão mưa lớn 1" className="rounded shadow-md w-full" />
            <img src="/images/pdfs/media_1787190317549_page_2.png" alt="Bão mưa lớn 2" className="rounded shadow-md w-full" />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold bg-yellow-100 p-2 rounded mb-4">3. Động đất & Hỏa hoạn (地震・火事)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/images/pdfs/media_1787190317819_page_2.png" alt="Động đất Hỏa hoạn" className="rounded shadow-md w-full col-span-1 md:col-span-2" />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold bg-green-100 p-2 rounded mb-4">4. Cách lánh nạn (避難のしかた)</h3>
          <div className="grid grid-cols-1 gap-4">
            <img src="/images/pdfs/media_1787190318601_page_1.png" alt="Cách lánh nạn 1" className="rounded shadow-md w-full" />
            <img src="/images/pdfs/media_1787190318601_page_2.png" alt="Cách lánh nạn 2" className="rounded shadow-md w-full" />
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-bold bg-gray-200 p-2 rounded mb-4">5. Thông tin Sơ tán Mới (新たな避難情報)</h3>
          <div className="grid grid-cols-1 gap-4">
            <img src="/images/pdfs/media_1787190317976_page_12.png" alt="Thông tin sơ tán" className="rounded shadow-md w-full" />
          </div>
        </section>
      </div>
    </div>
  );
}
