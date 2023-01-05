import React from "react";

const OutScreen = ({ setStatus }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full flex flex-col gap-y-5">
      <h2 className="text-white text-4xl">Tiêc quá bạn đã thua rồi 😢😢😢</h2>
      <button
        onClick={() => setStatus("oneScreen")}
        className="px-4 py-2 text-white bg-pink-600 rounded-lg"
      >
        quay về
      </button>
    </div>
  );
};

export default OutScreen;
