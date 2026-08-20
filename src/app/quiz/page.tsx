
'use client';
import quizData from "@/data/quiz.json";
import { useState } from "react";

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const q = quizData[currentQ];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelectedOpt(idx);
    setAnswered(true);
    if (idx === q.answer) {
      setScore(score + 1);
    }
  };

  const nextQ = () => {
    if (currentQ + 1 < quizData.length) {
      setCurrentQ(currentQ + 1);
      setSelectedOpt(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow text-center space-y-4">
        <h2 className="text-3xl font-bold">Kết quả Quiz</h2>
        <p className="text-xl">Bạn trả lời đúng: <span className="font-bold text-red-600">{score} / {quizData.length}</span> câu hỏi.</p>
        <button 
          onClick={() => { setCurrentQ(0); setScore(0); setShowResult(false); setSelectedOpt(null); setAnswered(false); }}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Kiểm tra kiến thức (クイズ)</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-sm text-gray-500 mb-2">Câu hỏi {currentQ + 1} / {quizData.length}</p>
        <h3 className="text-xl font-medium mb-4">{q.question}</h3>
        
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let btnClass = "w-full text-left p-4 rounded-lg border ";
            if (answered) {
              if (idx === q.answer) btnClass += "bg-green-100 border-green-500 font-bold";
              else if (idx === selectedOpt) btnClass += "bg-red-100 border-red-500";
              else btnClass += "bg-gray-50 border-gray-200";
            } else {
              btnClass += "bg-white border-gray-300 hover:bg-gray-50";
            }
            return (
              <button 
                key={idx} 
                onClick={() => handleAnswer(idx)}
                className={btnClass}
                disabled={answered}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-6 p-4 bg-blue-50 text-blue-900 rounded border border-blue-200">
            <p className="font-bold mb-1">Giải thích:</p>
            <p>{q.explanation}</p>
            <button 
              onClick={nextQ}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {currentQ + 1 < quizData.length ? "Câu tiếp theo" : "Xem kết quả"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
