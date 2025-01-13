import React from 'react';

interface IIsLoadingProps {
  color: string
}

const IsLoading: React.FC<IIsLoadingProps> = ({color}) => {
  return (
    <svg
    className='animate-spin'
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0241 5.60957C13.364 6.93575 13.2401 8.33829 12.6731 9.58439C12.1061 10.8305 11.1299 11.8452 9.90666 12.4601C8.6835 13.0749 7.28681 13.253 5.94846 12.9647C4.61012 12.6764 3.4106 11.9391 2.54904 10.8752C1.68747 9.81119 1.21567 8.48463 1.21194 7.11559C1.20821 5.74655 1.67278 4.41741 2.52853 3.34878C3.38429 2.28016 4.57977 1.53632 5.91652 1.24075C7.25328 0.945183 8.65092 1.11564 9.87746 1.72384"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IsLoading;
