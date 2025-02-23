import HeaderItem from './subui/HeaderItem';

const Header = () => {
  return (
    <div className='w-[754px] h-[40px] mt-[144px] ml-[20px] border-b border-[#212023] flex flex-row items-end'>
      <HeaderItem title="Achievements" /> 
      <HeaderItem title="Assets" />
      <HeaderItem title="History" />
      <HeaderItem title="Progress" />
      <HeaderItem title="Information" />
    </div>
  );
};

export default Header;
