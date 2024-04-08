'use client';

import Image from 'next/image';
import Link from 'next/link';
import PlayButton from '@/components/PlayButton';

export default function Home() {
  return (
    <main
      className='relative flex h-screen w-full flex-col items-center justify-end gap-12 overflow-hidden bg-cover bg-center p-8 sm:gap-5 sm:p-5'
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      <PlayButton className='absolute right-8 top-5 z-20' autoPlay={false} />
      <Image
        src='/multiline-logo.png'
        alt='Multiline Logo'
        width={600}
        height={540}
        className='absolute left-1/2 top-0 -translate-x-1/2'
      />
      <Link
        href='/home'
        className='relative z-10 rounded border-4 border-[#890A00] bg-gradient-to-t from-[#2E87C5] to-[#026FB8] p-[15px_30px] text-center text-[50px] leading-[1.2] text-white shadow-[0px_0px_30px_#890A0033] md:text-[40px] sm:text-3xl'
      >
        ENTER PRESALE
      </Link>
      <div className='relative z-10 flex flex-col items-center'>
        <Image src='/hero.png' alt='Hero' width={344} height={172} />
        <div className='space-y-[30px] rounded border-4 border-[#890A00] bg-gradient-to-t from-[#2E87C5] to-[#026FB8] p-[15px] shadow-[0px_0px_30px_#890A0033]'>
          <div className='space-y-[5px]'>
            <Link
              href='mailto:contact@broswifwoes.io'
              className='mx-auto block w-fit text-center text-xl leading-[1.2] text-white'
            >
              contact@broswifwoes.io
            </Link>
            <p className='text-center text-xl leading-[1.2] text-white'>
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
    </main>
  );
}
