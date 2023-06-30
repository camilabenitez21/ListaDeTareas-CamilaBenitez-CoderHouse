import MainScreen from './src/Screens/MainScreen';

const taskList = [ 
  { 
    id: 1, 
    task: "Hacer la cama", 
    completed: false, 
  }, 
  { 
    id: 2, 
    task: "Skincare", 
    completed: false ,
  },
  { 
    id: 3, 
    task: "Pasear a la perra", 
      ompleted: false, 
  },
  { 
    id: 4, 
    task: "Desayuno", 
    completed: false ,
  },
  { id: 5, 
    task: "Conectarme al trabajo", 
    completed: false ,
  }, ]


export default function App() {
  return (
      <MainScreen taskList= {taskList}/>
  );
}

