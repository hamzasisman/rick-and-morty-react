import { useEffect } from 'react';
import { ReactComponent as BlueHeartIcon } from '../assets/svg/blueheart.svg';
import { ReactComponent as RedHeartIcon } from '../assets/svg/redheart.svg';

const HeartButton = ({ isFavorite, setIsFavorite }) => {

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(isFavorite);
  }, [isFavorite, setIsFavorite]);

  return (
    <button className='group relative' onClick={() => handleHeartClick()}>
      {!isFavorite ? <BlueHeartIcon className='h-6 w-6' /> : <RedHeartIcon className='h-6 w-6' />}

      <div className="tooltip">
        <p>{!isFavorite ? "Favorilere Ekle" : "Favorilere Eklendi"}</p>
      </div>
    </button>
  );
}

export default HeartButton;
