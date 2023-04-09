import { Task } from "./Task";
import { useEffect, useState } from "react";

export const TaskList = (props)=>{
    const { list } = props;
    const [checkedTasks, setIsCheckedTasks] = useState([]);

    const handleChecked = (taskName) => {
        console.log(`task was checked: ${taskName}`);

        let newCheckedTask = [...checkedTasks];

        if(!checkedTasks.includes(taskName)){
            newCheckedTask = [...newCheckedTask, taskName];
        } else {
        newCheckedTask = newCheckedTask.filter((task) => taskName != task);
        }

        setIsCheckedTasks(newCheckedTask);

        localStorage.setItem("checkedTasks", JSON.stringify(newCheckedTask));
    };

    useEffect(() => {
        const localStorageData = localStorage.getItem("checkedTasks");
        if(localStorageData){
          try{
            const storedCheckedTasks = JSON.parse(localStorageData);
    
            setIsCheckedTasks(storedCheckedTasks);
          }catch(err){
            console.err("Error parsing checkedTasks items from localStorage")
          }
        }
      }, []);

    return(
        <ul>
            {
            list.map((task) => (
                <Task 
                    key={task.name}
                    name={task.name} 
                    onChecked={handleChecked} 
                    isChecked={checkedTasks.includes(task.name)}
                />
            ))}
        </ul>
    );
};


                   
                    

