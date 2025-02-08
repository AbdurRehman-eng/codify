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
        className={` text-black font-sourceCodePro
        text-[2.6786vh] font-extrabold bg-white rounded-bl-lg rounded-tl-lg 
        rounded-br-lg rounded-tr-[5vh] 
        hover:text-button hover:shadow-2xl hover:scale:[102%] hover:transition-all
        hover:duration-200 hover:ease-in-out shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_5px_15px_rgba(0,0,0,0.3)]
        ${pos}`}
        style={{ top, left }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
