import React, { useEffect, useState } from "react";
import Card from "./Card";
import cardImages from "../asset/fake-data/card";

const InteractScreen = ({ num = 4, setStatus }) => {
  const [arr, setArr] = useState(null);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    let primaryArr = cardImages.slice(0, num);

    const cards = [...primaryArr, ...primaryArr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setArr(cards);
  };
  useEffect(() => {
    shuffleCards();
  }, [num]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setArr((prev) => {
          return prev.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        const cardRef = document.querySelectorAll(".flipped");

        // console.log(cardRef);
        if (cardRef.length === num + num) {
          setStatus("threeScreen");
        }
        reset();
      } else {
        setTimeout(() => reset(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  const handleChoice = (car) => {
    choiceOne ? setChoiceTwo(car) : setChoiceOne(car);
  };
  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };
  return (
    <div className="  mx-auto">
      <button
        onClick={() => setStatus("oneScreen")}
        className="fixed top-0 left-0 z-20 text-white bg-pink-500 py-2 px-3"
      >
        quay về
      </button>
      <div
        className={`w-full  gap-5 min-h-[100vh] h-full grid grid-cols-10 grid-rows-5 pt-5 px-5`}
      >
        {arr?.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            onclick={handleChoice}
            flipped={item === choiceOne || item === choiceTwo || item.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractScreen;
