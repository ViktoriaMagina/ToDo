import './TodoItemDeleted.css'

import React from 'react'
import PropTypes from 'prop-types';


function TodoItemDeleted({item, reestablishTodoItem, deleteArchivalTodoItem}){
    return(
    <li className="todo-item-deleted">
        <button className='todo-item-deleted__del' onClick={() => deleteArchivalTodoItem(item.id)} type='button'>
          <img src="./img/loon-icon.svg" alt="delete" />
          </button>
        <h4 className="todo-item-deleted__title">{item.title}</h4>
        <p className="todo-item-deleted__text">{item.text}</p>
        <time className='todo-item-deleted__date'>Выполнить до: {item.deadLine}</time>
        <div className="todo-item-deleted__buttons">
          <button className="todo-item-deleted__reestablish" onClick={() => reestablishTodoItem(item)}>Восстановить задание </button>
          <button className={ item.isDone ? "todo-item-deleted__is-done done" : "todo-item-deleted__is-done" } disabled>
            {item.isDone? "Задание выполнено" :  "Задание не выполнено"}
            </button>
        </div> 
      </li>
    )
}

TodoItemDeleted.propTypes = {
  reestablishTodoItem: PropTypes.func.isRequired,
  deleteArchivalTodoItem: PropTypes.func.isRequired,
}

export default TodoItemDeleted;