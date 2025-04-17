"use client";

import { useAtom } from "jotai";
import { isLogin } from "@/atoms/IsLoginAtom";
import Link from "next/link";
import Image from "next/image";

import { FaHome } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { MdChecklist } from "react-icons/md";

export default function Nav() {
  const [login, setLogin] = useAtom(isLogin);

  const handleClick = () => {
    setLogin(false);
    localStorage.setItem("email", "");
  };
  return (
    <header className="w-full h-24 min-h-24 px-10 bg-pink-100 shadow-lg flex justify-between items-center">
      <div className="flex">
        <div className="flex text-sm items-center mx-2">
          {/* <img src={reactLogo} alt="react" className="w-8" /> +
          <img src="/vite.svg" alt="vite" className="w-8" /> */}
          <Image src="react.svg" alt="react" width={60} height={60} 
          className={`${login ? 'animate-spin [animation-duration:_1.5s]' : ''}`} />
        </div>
      </div>
      <ul className="flex justify-center items-center font-bold">
        <li className="mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700">
          <Link href="/"><FaHome className="w-15 h-15"/></Link>
        </li>
        {login && (
          <li className="mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700">
            <Link href="/clock"><FaClock className=" w-15 h-15"/></Link>
          </li>
        )}
        {login && (
          <li className="mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700">
            <Link href="/lotto"><GiPerspectiveDiceSixFacesRandom className="w-17 h-17"/></Link>
          </li>
        )}
        {login && (
          <li className="mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700">
            <Link href="/food"><FaBowlFood className="w-15 h-15"/></Link>
          </li>
        )}
        {login && (
          <li className="mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700">
            <Link href="/subway"><FaTrainSubway className="w-15 h-15"/></Link>
          </li>
        )}
        {login && (
          <li className="mx-1 p-2 rounded-sm hover:bg-lime-50 hover:text-lime-700">
            <Link href="/todoList"><MdChecklist className="w-15 h-15"/></Link>
          </li>
        )}
      </ul>
      <div
        className="p-2  font-bold
                         border rounded-sm
                                      hover:cursor-pointer hover:bg-emerald-400"
      >
        {login ? (
          <span onClick={handleClick}>로그아웃</span>
        ) : (
          <span>로그인</span>
        )}
      </div>
    </header>
  );
}
