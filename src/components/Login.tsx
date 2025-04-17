'use client'

import { useRef } from "react" 
import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Login() {
  const [, setLogin] = useAtom(isLogin) ;
  // useRef의 초기값을 null을 주어야 한다.
  const emailRef = useRef<HTMLInputElement>(null) ;
  const pwdRef = useRef<HTMLInputElement>(null) ;

  const router = useRouter();

  const handleOk = (e:MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); 

      if ( emailRef.current?.value == '') {
        alert("이메일을 입력하세요.");
        emailRef.current.focus() ;
        return ;
      }

      if ( pwdRef.current?.value == '') {
        alert("비밀번호를 입력하세요.");
        pwdRef.current.focus() ;
        return ;
      }

      if ( emailRef.current?.value != 'rsh2231@naver.com') {
        alert("해당 이메일이 존재하지 않습니다.");
        emailRef.current?.focus() ;
        return ;
      }

      if ( pwdRef.current?.value != '1234') {
        alert("비밀번호 오류입니다.");
        pwdRef.current?.focus() ;
        return ;
      }

      localStorage.setItem("email", emailRef.current.value ) ;
      setLogin(true) ;
      router.push('/') ;
  }
  return (
    <div className="flex w-full min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">로그인 정보를 입력하세요.</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="flex items-center justify-start">
              <label htmlFor="email" className="block text-sm/6 font-bold text-gray-900">
                아이디(이메일)
              </label>
            </div>
            <div className="mt-2">
              <input type="email" name="email" id="email"  
                      ref = {emailRef}
                      required 
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-start">
              <label htmlFor="password" className="block text-sm/6 font-bold text-gray-900">비밀번호</label>
            </div>
            <div className="mt-2">
              <input type="password" name="password" id="password"  
                      ref={pwdRef}
                      required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <button type="button" 
                    onClick={handleOk}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">로그인</button>
          </div>
        </form>

      </div>
    </div>
  )
}