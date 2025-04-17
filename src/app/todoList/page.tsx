'use client'

import { useEffect , useState} from "react"
import axios from "axios"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import { Todo, completedT } from "@/types/Todo"

const baseurl = "http://localhost:3005/todos"

export default function TodoList() {
  // useState 타입 정의
  const [tdata, setTdata] = useState<Todo[]>([]) ; 

  const getData = async() => {
    const resp = await axios.get(baseurl) ;
    setTdata(resp.data) ;
  }

  // 함수의 인수 타입 정의
  const addTodo = async(text:string,completed:completedT) =>{
    await axios.post(baseurl, {
      text : text,
      completed : completed
    }) ;
    getData();
  }

  // 함수의 인수 타입 정의
  const handleDelete = async(id:string) => {
    await axios.delete(`${baseurl}/${id}`) ;
    
    getData();
  }

  // 함수의 인수 타입 정의
  const handleToggle = async(id:string, completed:completedT) => {
    const done:completedT = completed == 'O' ? 'X' : 'O' ;
    await axios.patch(`${baseurl}/${id}`, {
      completed : done
    }) ;
    console.log("Toggle", id, completed, done) ;
    getData();
  }
  
  useEffect(()=>{
    getData();
  } ,[]);

  useEffect(() => {
    if (!tdata) return ;

    console.log("useEffect", tdata) ;
  }, [tdata]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-9/10 p-10 bg-amber-50" >
        <TodoForm addTodo={addTodo} />
      </div>
      <ul className="w-9/10">
        {
          tdata && tdata.map(item => <TodoItem key={item.id} 
                                               todo= {item} 
                                               onDelete={handleDelete}
                                               onToggle={handleToggle}
                                               />)
        }
      </ul>
    </div>
  )
}