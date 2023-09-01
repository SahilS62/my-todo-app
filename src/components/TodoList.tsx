import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(["Buy groceries", "Clean the house", "Walk the dog"]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(null);
  const [totalSelectedCount, setTotalSelectedCount] = useState<number>(0);

  const handleTodoClick = (index: number) => {
    setSelectedTodoIndex(index);
    setTotalSelectedCount(prevCount => prevCount + 1);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setSelectedTodoIndex(null);
    /*setTotalSelectedCount(prevCount => prevCount - 1);*/
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px', backgroundColor:'#EAE7DD' }}>
      <h2 style={{ textAlign: 'center' }}>To-do List (Total: {todos.length})</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new item"
          style={{ marginBottom: '10px', padding: '5px' }}
        />
        <button
          onClick={handleAddTodo}
          style={{ marginLeft: '10px',paddingTop: '1px', paddingBottom:'4px', paddingRight:'12px', paddingLeft: '12px', color:'orange', backgroundColor:'white', fontSize:'20px'}}
        >
          +
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, backgroundColor: '#99775C' }}>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              key={index}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span
                style={{
                  flex: 1,
                  backgroundColor: selectedTodoIndex === index ? 'black' : 'transparent',
                  color: 	'#6ACFC7',
                  padding: '5px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  display: 'block'
                }}
                onClick={() => handleTodoClick(index)}
              >
                {todo}
              </span>
              <button
                onClick={() => handleDeleteTodo(index)}
                style={{ padding: '3px 5px', backgroundColor: '#FF6347', borderRadius:'10px' }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Its Empty! Add items to the list.</p>
        )}
      </ul>
      <p style={{ marginTop: '10px' }}>Selected Item Count: {totalSelectedCount}</p>
    </div>
  );
};

export default TodoList;
