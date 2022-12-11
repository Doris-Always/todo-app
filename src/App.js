import React, {useState} from 'react';
import './style.css';
import ToDoItems from './components/ToDoItems';
import Form from './components/Form';

function App() {
  const [items,setItems] = useState([]);

  function addToList(inputText){
    
    setItems(prevItems=>{
      return[...prevItems,inputText];
    });
   
  }
  return (
    <div className='container'>
        <div className='heading'>
          <h1>To Do List</h1>
        </div>
        <div>
          <Form  onAdd ={addToList}/>
        </div>
        <div>
          <ul>
          {items.map(item => (
            <ToDoItems text={item}/>
          ))}
          </ul>
        </div>
      </div>
  );
}

export default App;
