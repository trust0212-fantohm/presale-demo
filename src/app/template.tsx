'use client';

import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import PlayButton from '@/components/PlayButton';

export default function RootTemplate({ children }: PropsWithChildren) {
  return (
    <div className='relative'>
      <PlayButton className='absolute right-8 top-5 z-20' autoPlay={true} />
      <motion.div
        className='relative'
        initial={{ opacity: 1, x: -0, y: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, x: -0, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 1, x: -0, y: 0, filter: 'blur(10px)' }}
        transition={{ type: 'spring' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
