import {useQuery , useMutation, useQueryClient} from "@tanstack/react-query"
import { addTodo, fetchTodos } from ".";
import TodoCard from "./TodoCard"
import {useState} from "react"

export default function Demo() {
    const queryClient = useQueryClient();
   const [title, setTitle] = useState("");
   const [search, setSearch] = useState("");
    const {data: todos , isLoading} = useQuery({
        queryFn: ()=> fetchTodos(search),
        queryKey: ["todos", {search}] ,
        staleTime: Infinity,
        cacheTime:0,
    });

    const {mutateAsync: addTodoMutation} = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            alert('Success')
            queryClient.invalidateQueries(["todos"]).catch((e)=> console.log(e))
        }
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
    <div>
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value= {title} />
        </div>
        <button onClick={async () => {

            console.log("TITLE",title);

            try{
                await addTodoMutation({title});
                setTitle("")
            } catch(e) {
                console.log(e);
            }          
        }}>
            Add todo</button>
        {todos?.map((todo) => {
            return <TodoCard key={todo.id} todo={todo} />;
        })}
    </div>
    )
}