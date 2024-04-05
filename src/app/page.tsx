import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className='flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center'
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      <div className='relative'>
        <Image
          src={'/Single Line With Smoke.png'}
          width='1440'
          height='900'
          alt='logo'
          className='lg:-translate-y-1/4 xs:-translate-y-1/2'
        />
        <Link
          href='/home'
          className='absolute bottom-0 left-1/2 flex h-[313px] w-[330px] -translate-x-[20%] -translate-y-1/4 items-center justify-center pl-4 pt-12 lg:-translate-y-full md:-translate-y-1/2 xs:fixed xs:left-1/2 xs:top-1/2 xs:h-[228px] xs:w-60 xs:-translate-x-1/2 xs:-translate-y-1/2'
        >
          <Image
            src='/saying.png'
            width={330}
            height={313}
            alt='saying'
            className='absolute inset-0 rotate-180'
          />
          <h2 className='xs:-pt-20 relative z-10 text-center text-6xl font-bold xs:text-5xl'>
            Enter Presale
          </h2>
        </Link>
      </div>
    </main>
  );
}
