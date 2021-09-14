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
    { title: 'susu', count: 1 },
    { title: 'beras', count: 1 },
    { title: 'minyak', count: 1 },
    { title: 'sabun', count: 1 },
  ]);

  // add value item
  const countingAdd = (index) => {
    const newTodos = [...todo];

    newTodos[index].count = newTodos[index].count + 1;
    setTodo(newTodos);
  };

  // reduce value item
  const countingMin = (index) => {
    const newTodos = [...todo];

    if (newTodos[index].count > 0) {
      // when value more then 0, it can reduce the value
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      //when  value less then 0, array will be erased according to index
      newTodos.splice(index, 1);
    }

    setTodo(newTodos);
  };
  // get total value
  const getTotalValue = () => {
    const totalValue = todo.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalValue;
  };

  //input value is empty
  const submit = (e) => {
    e.preventDefault();

    if (!value) {
      alert('kosong');
      return;
    }

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

  return (
    <>
      <Navbar />

      <Container>
        <SearchInput onSubmit={submit} onChange={(e) => setvalue(e.target.value)} value={value} />

        <Info todoLength={todo.length} total={getTotalValue()} onDelete={() => setTodo([])} />

        {todo.length > 0 ? <Todo todo={todo} countingAdd={(index) => countingAdd(index)} countingMin={(index) => countingMin(index)} /> : <Empty />}
      </Container>
    </>
  );
}

export default App;
