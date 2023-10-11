import React from 'react';

const ButtonIndigo = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="text-white transition-colors hover:bg-indigo-500 duration-500 text-lg px-4 py-2 rounded-full border-solid border border-gray-400">
      {buttonText}
    </button>
  );
};

export { ButtonIndigo };
