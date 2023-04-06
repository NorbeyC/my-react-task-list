import { TaskCard } from "./Task";

export const TaskList = (props)=>{

    const {list} = props;

    return(
        <ul>
            {
            list.map((task) => (
                <TaskCard name={task.name} completed={task.completed}/>
            ))}
        </ul>
    );
};


                   
                    

