import { MouseEvent } from "react";

// Props의 타입은 interface로 선언
interface TailButtonProps {
  caption : string;
  color : "blue"| "orange" | "lime"
  onClick : (e:MouseEvent<HTMLButtonElement>) => void;
}

type BgT = {
  "blue" : string;
  "orange" : string;
  "lime" : string
}

export default function TailButton({caption, color, onClick}:TailButtonProps) {
  const bg:BgT = {
    "blue" : "bg-blue-700",
    "orange" : "bg-orange-700",
    "lime" : "bg-lime-700",
  }

  const bgHover:BgT = {
    "blue" : "hover:bg-blue-400",
    "orange" : "hover:bg-orange-400",
    "lime" : "hover:bg-lime-400",
  }

  return (
    <button className={`py-2 px-4 m-2 text-lg hover:font-bold
                       rounded-md text-white 
                       ${bg[color]} ${bgHover[color]}`}
             onClick={onClick}>
      {caption}
    </button>
  )
}