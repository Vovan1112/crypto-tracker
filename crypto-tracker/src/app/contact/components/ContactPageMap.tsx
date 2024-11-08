'use client'
import Loading from '@/app/loading';
import React, { useState } from 'react';

const ContactPageMap = () => {
  const [loading, setLoading] = useState(true);
  const frameUrl = 'https://maps.google.com/maps?q=chernivtsi&t=&z=13&ie=UTF8&iwloc=&output=embed';

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
      {loading && <Loading />}

      <div className="h-[500px] w-full">
        <iframe
          src={frameUrl}
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          onLoad={handleLoad}
        ></iframe>
      </div>
    </div>
  );
};

export { ContactPageMap };
