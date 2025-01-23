import React from 'react';

interface ButtonProps {
  children: string;
  top: string;
  left: string;
  pos: string;
}

const Button: React.FC<ButtonProps> = ({ children, top, left, pos  }) => {
  return (
    <>
      <button
        className={`${pos} text-black font-sourceCodePro
        text-[15px] font-extrabold bg-white rounded-bl-lg rounded-tl-lg 
        rounded-br-lg rounded-tr-[30px]
        hover:text-button hover:shadow-2xl`}
        style={{ top, left }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
