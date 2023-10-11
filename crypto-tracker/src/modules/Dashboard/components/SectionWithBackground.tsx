'use client'
import React from 'react';
import { ButtonIndigo } from '@/components/ButtonIndigo';


const SectionWithBackground = () => {
  return (
    <section className="text-white body-font flex justify-center item-center" style={{height: '100vh', backgroundImage: `url('https://html.dreamitsolution.net/cryptobit/crypto-trading/assets/images/tranding.jpg')` }}
    >
    <div className="container flex px-5 py-24 items-center justify-center flex-col">
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Crypto-Tracker</h1>
        <p className="leading-relaxed">A convenient tool for tracking cryptocurrency</p>
        <div className='mt-4'>
        <ButtonIndigo buttonText='Read more'/>       
        </div>
      </div>
    </div>
  </section>
  );
};

export  { SectionWithBackground };
