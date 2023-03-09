import downArrow from "../icons/downArrow.png";import upArrow from "../icons/upArrow.png";

const Arrow = () => {
  return (
    <div className="fixed flex flex-col gap-2 bottom-3 right-[125px] z-40">
      <button id="upArrow"><img src={upArrow} alt="" className="w-[50px] rounded-full hover:brightness-125"/></button>
      <button id="upArrow"><img src={downArrow} alt="" className="w-[50px] rounded-full hover:brightness-125"/></button>
    </div>
  )
}

export default Arrow;