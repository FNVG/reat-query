import {useState} from "react"

export default function TodoCard({todo}){
    const [checked, setChecked] = useState(todo.completed);

    return (
    <div>
        <span>{todo.title}</span>
        <input
            type="checkbox"
            checked={checked}
            onChanged={(e)=> setChecked(e.target.checked)}
        />
    </div>

    )
}