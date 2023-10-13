// components/Card.tsx

import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  content: string;
  btnOne: string;
  btnTwo: string;
}

const Card: React.FC<CardProps> = ({ title, content, btnOne, btnTwo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mr-4 mt-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Link
          className={``}
          href={`/models/${title}`}
      >
          Models
      </Link>
      <p className="mt-2 text-gray-600">{content}</p>
      <div className='flex flex-row mt-2'>
        {btnOne.length ?
            <button className="mr-1 text-gray-600 border border-gray-400 rounded px-2 py-1 text-sm hover:bg-gray-100 transition">
                {btnOne}
            </button>
            :
            <span></span>
        }

        {btnTwo.length ?
            <button className="mr-1 text-gray-600 border border-gray-400 rounded px-2 py-1 text-sm hover:bg-gray-100 transition">
                {btnTwo}
            </button>
            :
            <span></span>
        }
      </div>
    </div>
  );
};

export default Card;
