import { useEffect, useState } from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
  autoPlay?: boolean;
}

const PlayButton: React.FC<Props> = ({ className, autoPlay = true }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

  useEffect(() => {
    setAudio(new Audio('/music.mp3'));
  }, []);

  useEffect(() => {
    if (!audio) return;

    audio.addEventListener(
      'ended',
      function () {
        this.currentTime = 0;
        this.play();
      },
      false,
    );

    return audio.removeEventListener('ended', function () {}, false);
  }, [audio]);

  useEffect(() => {
    if (!audio) return;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <button
      className={cx('flex items-center gap-5', className)}
      onClick={() => setIsPlaying((prev) => !prev)}
    >
      {/* <p className='font-norwester text-3xl text-[#1A6AFF] sm:text-xl'>
        PLAY THEME SONG
      </p> */}
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
