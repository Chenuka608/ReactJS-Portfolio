import React from 'react';
import Python from '../images/Python-Logo.png';
import htmlcssjs from '../images/html.png';
import java from '../images/javaL.png';
import react from '../images/react.png';

const handleViewProjectClick = (projectURL) => {
    window.open(projectURL, '_blank');
  };

const Work = () => {
  return (
    <div name='work' className='w-full h-1000px bg-[#2B0347] text-white'>
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full pb-4'>
        <div className='justify-content'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-white'>Work</p>
          <p className='py-6'>These are some of my recent projects that I worked on :</p>
        </div>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>
          {/* Project Image */}
          <img src={Python} alt='Project 1' className='rounded-md w-full h-full object-cover' />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 hover:scale-102 '>
            <button className='text-white px-4 py-2 border border-white rounded-md 'onClick={() => handleViewProjectClick('https://drive.google.com/drive/folders/13PDjasvvsDMUBkQmB9dOzwmBoDKIlNm6?usp=drive_link')}>View Project</button>
          </div>
        </div>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>
          {/* Project Image */}
          <img src={htmlcssjs} alt='Project 2' className='rounded-md w-full h-full object-cover max-w-[300px] max-h-[400px]' />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 hover:scale-102'>
            <button className='text-white px-4 py-2 border border-white rounded-md'onClick={() => handleViewProjectClick('https://aashif-m.github.io/Athletica/')}>View Project</button>
          </div>
        </div>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div relative'>
          {/* Project Image */}
          <img src={java} alt='Project 3' className='rounded-md w-full h-full object-cover max-w-[300px] max-h-[400px]' />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 hover:scale-102'>
            <button className='text-white px-4 py-2 border border-white rounded-md'onClick={() => handleViewProjectClick('https://drive.google.com/drive/folders/1hCRQRnNLnhfPrkrOpr_bg1SxV1MDaQgb?usp=drive_link')}>View Project</button>
          </div>
        </div>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'>
          {/* Project Image */}
          <img src={react} alt='Project 4' className='rounded-md w-full h-full object-cover max-w-[300px] max-h-[400px]' />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 hover:scale-102'>
            <button className='text-white px-4 py-2 border border-white rounded-md'onClick={() => handleViewProjectClick('https://github.com/Chenuka608/sdgpprojectv2')}>View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
