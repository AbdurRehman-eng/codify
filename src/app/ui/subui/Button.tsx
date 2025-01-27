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
        text-[2.5vh] font-extrabold bg-white rounded-bl-lg rounded-tl-lg 
        rounded-br-lg rounded-tr-[5vh]
        hover:text-button hover:shadow-2xl hover:scale:[102%] hover:transition-all hover:duration-200 hover:ease-in-out`}
        style={{ top, left }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
