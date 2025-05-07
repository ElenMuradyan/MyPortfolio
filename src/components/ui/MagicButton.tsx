import React from 'react';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = '',
}) => {
  return (
    <button
      onClick={handleClick} style={{borderRadius: 10, margin: 10}}
      className='relative rounded-lg flex items-center justify-center h-12 w-full overflow-hidden p-[1px] focus:outline-none md:w-60 md:mt-10'
    >
      <span style={{borderRadius: 15, padding: 10}} className="absolute rounded-lg inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span style={{borderRadius: 10}} className={`inline-flex h-[97%] w-[98%] cursor-pointer items-center justify-around rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
