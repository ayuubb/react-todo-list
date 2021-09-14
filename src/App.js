import { useState } from 'react';
import classnames from 'classnames';
import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';
import plusIcon from './assets/plus-icon.svg';
import minusIcon from './assets/minus-icon.svg';

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

    newTodos[index].count = newTodos[index].count - 1;
    setTodo(newTodos);
  };

  const submit = (e) => {
    e.preventDefault();

    const addTodos = [
      ...todo,
      {
        titile: value,
        count: 1,
      },
    ];
    setTodo(addTodos);
  };

  return (
    <>
      <nav className="nav">
        <img src={shoppingIcon} className="nav__icon" alt="shopping icon" />
        <h1 className="nav__title">Shopping List</h1>
      </nav>

      <section className="container">
        <form action="" className="form" onSubmit={submit}>
          <input
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            value={value}
            type="text"
            className="input"
            placeholder="List"
          />
          <button className="add__button" type="submit">
            add
          </button>
        </form>

        {todo.length > 0 ? (
          <div className="todos">
            {todo.map((todo, index, arr) => {
              return (
                <div key={index} className={`todo ${!(arr.length === index + 1) && `todo__divider`}`}>
                  {todo.title}
                  <div className="todo__icon__wrapper">
                    <div className="todo__count">{todo.count}</div>

                    <button onClick={() => countingMin(index)} className="todo__action__button">
                      <img src={minusIcon} alt="minus icon" />
                    </button>

                    <button onClick={() => countingAdd(index)} className="todo__action__button">
                      <img src={plusIcon} alt="plus icon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>kosong</p>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
