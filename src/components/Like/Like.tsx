import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './Like.scss';

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [liked, setLiked] = useState(false);
  
  const handleOnClick = () => {
    setLiked(!liked);
    onClick();
  }

  return (
    <div onClick={handleOnClick}>
      {(liked && <AiFillHeart color="red" size="40" />) || <AiOutlineHeart size="40"/>}
    </div>
  )
}

export default Like