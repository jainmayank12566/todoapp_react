import Header from '../components/Header.jsx';
import TodoItem from '../components/TodoItem.jsx';
import './App.css';
import Buttons from '../components/Buttons.jsx';
function App(){
  return (
    <div className='mainapp'>
      <Header title="Todoapp" />
      <TodoItem title="code"/>
      <TodoItem title="paint"/>
      <TodoItem title="food"/>
      <TodoItem title="water"/>
      <TodoItem title="icecream"/>
      <Buttons />
    </div>
  )
}
export default App