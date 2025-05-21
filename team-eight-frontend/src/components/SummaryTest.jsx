import React, { useEffect, useState } from "react";
import axios from "axios";

const SummaryTest = () => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.post("/news/summary", {
        link: "https://n.news.naver.com/mnews/article/018/0006018373",
      });

        setSummary(response.data.summary);
      } catch (err) {
        setError(err?.response?.data?.message || err.message || "요약 요청 실패");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>📰 뉴스 요약 결과</h2>
      {loading && <p>⏳ 요약 중입니다...</p>}
      {error && <p style={{ color: "red" }}>❌ 오류: {error}</p>}
      {summary && (
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummaryTest;
