export default function FunFact({ number, text }) {
  return (
    <div className="ms-[1rem]">
      <p className="font-semibold text-[36px] md:text-[48px] mt-[1.5rem]">{number}</p>
      <div className="w-[9rem] md:w-[13rem] h-[2px] bg-[black]"></div>
      <p className="text-[16px] md:text-[24px]">{text}</p>
    </div>
  );
}
