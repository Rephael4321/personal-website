export default function Subtitle({ subtitle }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="w-[5px] h-[56px] bg-[black] me-[8px]"></div>
        <h3 className="text-[2rem] md:text-[2.5rem]">{subtitle}</h3>
      </div>
    </>
  );
}
