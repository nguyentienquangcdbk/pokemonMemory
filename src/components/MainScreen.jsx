import React from "react";

const MainScreen = ({ onclick = () => {} }) => {
  return (
    <div className="container mx-auto ">
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <h1 className="text-6xl text-white font-semibold mb-10">
          PokeMon Memories
        </h1>

        <div className="flex gap-x-10">
          <button
            onClick={() => onclick(10)}
            className="bg-slate-600 px-5 py-5 rounded-lg text-white text-lg hover:bg-stone-400"
          >
            dễ
          </button>
          <button
            onClick={() => onclick(15)}
            className="bg-slate-600 px-5 py-5 rounded-lg text-white text-lg hover:bg-stone-400"
          >
            trung bình
          </button>
          <button
            onClick={() => onclick(25)}
            className="bg-slate-600 px-5 py-5 rounded-lg text-white text-lg hover:bg-stone-400"
          >
            khó
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
