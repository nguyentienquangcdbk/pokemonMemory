import React from "react";

const Card = ({ item, onclick, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onclick(item);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div className="back ">
          <img src={item.src} alt="" />
        </div>
        <div onClick={handleClick} className="font">
          <img src="./images/icon_back.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
