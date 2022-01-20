import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState("false");

  const changeColor = () => {
      setLiked(!liked)
  };

  return (
    <div>
      <button className="heart-btn">
          <FaHeart onClick={changeColor} className={`heart-${liked ? "icon" : "icon-liked"}`} />
      </button>
    </div>
  );
};

export default LikeButton;
