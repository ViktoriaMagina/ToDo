import './TodoItem.css'

import React from 'react'
import PropTypes from 'prop-types';
import ContentLoader from "react-content-loader"


function TodoItem({item, changeTodoStatus, deleteTodoItem, isLoading}){
  const itemLoader =       
  <ContentLoader 
      speed={2}
      width={460}
      height={230}
      viewBox="0 0 450 230"
      backgroundColor="#ecf4fb"
      foregroundColor="#e7f4e3"
    >
      <rect x="46" y="0" rx="10" ry="10" width="340" height="24" /> 
      <rect x="0" y="52" rx="3" ry="3" width="460" height="102" /> 
      <rect x="0" y="193" rx="5" ry="5" width="152" height="41" /> 
      <rect x="300" y="192" rx="5" ry="5" width="151" height="41" />
    </ContentLoader>

  return(
    <li className='todo-item'>
      {isLoading
        ? itemLoader
        :<div className="todo-item__inner">
          <h4 className="todo-item__title">{item.title}</h4>
          <p className="todo-item__text">{item.text}</p>
          <time className='todo-item__date'>Выполнить до: {item.deadLine}</time>
          <div className="todo-item__buttons">
            <button className="todo-item__del" onClick={() => deleteTodoItem(item)}>Удалить задание </button>
            <button className={ item.isDone ? "todo-item__is-done done" : "todo-item__is-done" } onClick={() => changeTodoStatus(item.id)}>
              {item.isDone? "Задание выполнено" :  "Задание не выполнено"}
              </button>
          </div>
        </div>
        }
    </li>
  )
    // <li className="todo-item">
    //   <div className="todo-item__inner">
    //   <h4 className="todo-item__title">{item.title}</h4>
    //   <p className="todo-item__text">{item.text}</p>
    //   <time className='todo-item__date'>Выполнить до: {item.deadLine}</time>
    //   <div className="todo-item__buttons">
    //     <button className="todo-item__del" onClick={() => deleteTodoItem(item)}>Удалить задание </button>
    //     <button className={ item.isDone ? "todo-item__is-done done" : "todo-item__is-done" } onClick={() => changeTodoStatus(item.id)}>
    //       {item.isDone? "Задание выполнено" :  "Задание не выполнено"}
    //       </button>
    //   </div>
    // </div>
    // </li>
}

TodoItem.propTypes = {
  deleteTodoItem: PropTypes.func.isRequired,
  changeTodoStatus: PropTypes.func.isRequired,
}

export default TodoItem;

