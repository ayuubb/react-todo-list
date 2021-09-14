import { useState } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todo from './components/Todos';
import Empty from './components/Empty';

function App() {
  const [value, setvalue] = useState('');
  const [todo, setTodo] = useState([
    { title: 'belajar', count: 1 },
    { title: 'mandi', count: 1 },
    { title: 'makan', count: 1 },
    { title: 'tidur', count: 1 },
  ]);

  const submit = (e) => {
    e.preventDefault();
    //input value is empty
    if (!value) {
      alert('kosong');
      return;
    }
    //add todolist
    const addTodos = [
      ...todo,
      {
        title: value,
        count: 1,
      },
    ];
    setTodo(addTodos);
    setvalue('');
  };

  //erase todolist
  const erase = (index) => {
    const removeTodos = [...todo];
    removeTodos.splice(index, 1);
    setTodo(removeTodos);
  };

  return (
    <>
      <Navbar />

      <Container>
        <SearchInput onSubmit={submit} onChange={(e) => setvalue(e.target.value)} value={value} />

        <Info todoLength={todo.length} onDelete={() => setTodo([])} />

        {todo.length > 0 ? <Todo todo={todo} erase={(index) => erase(index)} /> : <Empty />}
      </Container>
    </>
  );
}

export default App;
