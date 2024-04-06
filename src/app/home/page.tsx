'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import PlayButton from '@/components/PlayButton';
import { settings } from '@/config/background';
import { workSans } from '../fonts';

export default function Homepage() {
  const [random, setRandom] = useState<number>(-1);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 12) + 1);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('0xBE20ed1dE3eE3d4E43B0fF783e51F92D6885D232');
    alert('Address copied to clip board');
  };

  return random === -1 ? (
    <></>
  ) : (
    <div
      className={cx(
        'relative flex h-screen w-full flex-col items-end justify-center bg-[#c2ffff] bg-cover bg-bottom p-12 sm:px-6',
        settings[random].cardPosForTable === 'bottom-right'
          ? 'md:justify-end'
          : settings[random].cardPosForTable === 'bottom-left'
            ? 'md:items-start md:justify-end'
            : 'md:items-start md:justify-start',
        settings[random].cardPosForMobile === 'bottom'
          ? 'sm:items-center sm:justify-end'
          : 'sm:items-center sm:justify-start',
      )}
    >
      <div
        className='fixed inset-0 bg-cover md:hidden'
        style={{
          backgroundImage: `url(/background/pc/${random}.png)`,
        }}
      />
      <div
        className='fixed inset-0 hidden bg-cover md:block sm:hidden'
        style={{
          backgroundImage: `url(/background/tablet/${random}.png)`,
        }}
      />
      <div
        className='fixed inset-0 hidden bg-cover sm:block'
        style={{
          backgroundImage: `url(/background/mobile/${random}.png)`,
        }}
      />
      <PlayButton className='absolute right-8 top-5 z-20' />
      <Image
        src='/BWWLong.png'
        alt='BWW'
        width={821}
        height={574}
        className='relative z-10 -mt-20 md:-mt-16 md:h-[372px] md:w-[526px] sm:-mt-4 sm:h-[220px] sm:w-[310px]'
      />
      <div className='relative z-10 -mt-48 w-fit space-y-[30px] rounded border-4 border-black bg-[#EED0AECC] p-5 shadow-[0px_0px_10px_#0003] md:-mt-28 md:space-y-5 sm:-mt-16 sm:w-[278px] sm:space-y-[15px]'>
        <div className='space-y-5'>
          <div className='sm:space-y-2.5'>
            <p className='pl-5 text-center font-norwester text-[70px] leading-[1.2] text-[#030303] md:text-[50px] sm:mx-auto sm:max-w-[168px] sm:pl-0 sm:text-3xl'>
              GET RUGGED IN A NEW WAY
            </p>
            <p
              className={cx(
                'text-center text-3xl font-medium leading-[1.2] md:text-xl sm:text-[15px]',
                workSans.className,
              )}
            >
              Send <span className='text-[#1A6AFF] underline'>$ETH/BNB</span> here
              to join presale
            </p>
          </div>
          <div
            className='mx-auto flex w-fit cursor-pointer items-center rounded-full border-2 border-[#1A6AFF] bg-white p-2.5 pl-3'
            title='Click to copy address'
            onClick={handleCopyAddress}
          >
            <Image
              src='/ethereum.png'
              alt='Solana'
              width={24}
              height={40}
              className='md:h-[25px] md:w-[15px] sm:h-5 sm:w-3'
            />
            <p
              className={cx(
                'px-5 text-xl font-medium md:pl-2.5 md:text-[15px] sm:hidden',
                workSans.className,
              )}
            >
              0xBE20ed1dE3eE3d4E43B0fF783e51F92D6885D232
            </p>
            <p className='hidden pl-2.5 pr-5 text-[13px] font-medium sm:block'>
              0xBE20ed1dE3eE3...
            </p>
          </div>
        </div>
        <div className='space-y-[30px] sm:space-y-[15px]'>
          <div className='space-y-[5px]'>
            <p className='text-center text-xl leading-[1.2] text-[#030303] md:text-[15px] sm:text-[13px]'>
              contact@broswifwoes.io
            </p>
            <p className='text-center text-xl leading-[1.2] text-[#030303] md:text-[15px] sm:text-[13px]'>
              BROSWIFWOES 2024 ALL RIGHTS RESERVED
            </p>
          </div>
          <div className='mx-auto flex w-fit gap-5'>
            <Link href='http://t.me/broswifwoes' target='_blank'>
              <Image
                src='/telegram.webp'
                alt='Telegram'
                width={40}
                height={40}
                className='md:h-[30px] md:w-[30px]'
              />
            </Link>
            <Link href='https://twitter.com/BrosWifWoes' target='_blank'>
              <Image
                src='/twitter.png'
                alt='Telegram'
                width={40}
                height={40}
                className='md:h-[30px] md:w-[30px]'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
