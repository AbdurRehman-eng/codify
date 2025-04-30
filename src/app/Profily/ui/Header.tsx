import HeaderItem from './subui/HeaderItem';

const Header = () => {
  return (
    <div className='w-[754px] h-[40px] mt-[144px] ml-[20px] border-b border-[#212023] flex flex-row items-end'>
      <HeaderItem title="Achievements" route='Achievements'/> 
      <HeaderItem title="Assets" route='Assets'/>
      <HeaderItem title="History" route='History'/>
      <HeaderItem title="Progress" route='Progress'/>
      <HeaderItem title="Information" route='Information'/>
    </div>
  );
};

export default Header;
