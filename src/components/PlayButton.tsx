import { useEffect, useState } from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
  autoPlay?: boolean;
}

const PlayButton: React.FC<Props> = ({ className, autoPlay = true }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    if (!audio) return;

    if (audio.paused) {
      setIsPlaying(false);
    }

    audio.addEventListener('playing', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('playing', () => {});
      audio.removeEventListener('pause', () => {});
    };
  }, []);

  const handleClick = () => {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying((prev) => !prev);
  };

  return (
    <button
      className={cx('flex items-center gap-5', className)}
      onClick={handleClick}
    >
      {!isPlaying ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 42 47'
          className='h-[25px] w-5 sm:h-5 sm:w-4'
        >
          <path fill='#1A6AFF' d='M0 47V0l42 23.5z'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 29 38'
          className='h-[25px] w-5 sm:h-5 sm:w-4'
        >
          <path
            fill='#1A6AFF'
            d='M18.869 38H29V0H18.869v38zM0 38h10.131V0H0v38z'
          ></path>
        </svg>
      )}
    </button>
  );
};

export default PlayButton;
