'use client'
import React from 'react';
import { ButtonIndigo } from '@/components/ButtonIndigo';
import { useSession } from 'next-auth/react';
import BackgroundDashboard from './BackgroundDashboard';

const SectionWithBackground = () => {
  const session = useSession();

  return (
    <section className="text-white body-font flex justify-center items-center relative" style={{ height: '100vh' }}>
      <BackgroundDashboard />
      <div className="container flex px-5 py-24 items-center justify-center flex-col relative z-10">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Crypto-Tracker</h1>
          <p className="leading-relaxed">
            {session.data ? `Login as ${session.data.user?.name || session.data.user?.email}` : 'A convenient tool for tracking cryptocurrency'}
          </p>
          <div className='mt-4'>
            <ButtonIndigo buttonText='Read more'/>       
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionWithBackground };
