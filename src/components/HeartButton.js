import { useState } from 'react';
import { ReactComponent as BlueHeartIcon } from '../assets/svg/blueheart.svg';
import { ReactComponent as RedHeartIcon } from '../assets/svg/redheart.svg';

const HeartButton = () => {
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  return (
    <button className='group relative' onClick={() => handleHeartClick()}>
      {!isHearted ? <BlueHeartIcon className='h-6 w-6' /> : <RedHeartIcon className='h-6 w-6' />}

      <div className="tooltip">
        <p>{!isHearted ? "Favorilere Ekle" : "Favorilere Eklendi"}</p>
      </div>
    </button>
  );
}

export default HeartButton;
