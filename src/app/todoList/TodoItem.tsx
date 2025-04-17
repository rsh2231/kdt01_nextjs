import TailButton from "@/components/ui/TailButton";
// 선언된 타입 가져오기
import { Todo,completedT } from "@/types/Todo";
 
// Props 타입 정의
interface TodoItemProps {
  todo : Todo;
  onDelete : (id:string) => void;
  onToggle : (id:string, completed:completedT) => void
}

// Props 타입 지정
export default function TodoItem({todo, onDelete, onToggle}:TodoItemProps) {
  return (
    <li className="w-full border border-gray-300 rounded-lg
                    flex justify-between items-center
                    m-1 px-4 py-1">
      <div>
        <div onClick={() => onToggle(todo.id, todo.completed)}
             className="hover:cursor-pointer">
         {todo.completed == "X" ? "🔲" :"✅" }
         <span className={todo.completed == "X" ? "" : "text-red-500 line-through"}>
          {todo.text}
          </span>
        </div>
      </div>
      <div>
        <TailButton caption="삭제"
                    color="blue" 
                    onClick={() => onDelete(todo.id)} />
      </div>
    </li>
  )
}