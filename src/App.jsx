import Header from "./components/Header"
import { TaskList } from "./components/TaskList"

const Tasks = [
  {name:"Buy a gaming laptop"},
  {name:"Complete a previous task"},
  {name:"Create cideo for Youtube"},
  {name:"Create a new portfolio site"},
];

function App() {
  return (<div className="App"> 
    <Header />
    <TaskList list={Tasks}/>
  </div>)
  
}

export default App
