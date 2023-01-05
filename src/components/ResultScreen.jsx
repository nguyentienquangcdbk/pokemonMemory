import React from "react";

const ResultScreen = ({ setStatus, startAt }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-y-5">
      <div className="text-white text-6xl">chúc mừng bạn đã chiến thắng</div>
      <h2 className="text-white">thời gian : {Math.round(startAt / 920)}s</h2>
      <button
        className="px-3 py-2 bg-pink-500 text-white rounded-lg"
        onClick={() => setStatus("oneScreen")}
      >
        quay về
      </button>
    </div>
  );
};

export default ResultScreen;
