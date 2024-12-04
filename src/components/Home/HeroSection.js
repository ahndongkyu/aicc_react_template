import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-semibold text-center">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className="text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-lg mb:text-sm">
        대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을
        겸할 수 없다. 국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다.
        국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아
        행정각부를 통할한다.회계연도를 넘어 계속하여 지출할 필요가 있을 때에는
        정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 국무회의는
        정부의 권한에 속하는 중요한 정책을 심의한다.
      </p>

      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
