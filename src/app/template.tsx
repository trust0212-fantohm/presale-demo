'use client';

import { PropsWithChildren } from 'react';
import PlayButton from '@/components/PlayButton';

export default function RootTemplate({ children }: PropsWithChildren) {
  return (
    <div className='relative'>
      <PlayButton className='absolute right-8 top-5 z-20' autoPlay={true} />
      {children}
    </div>
  );
}
