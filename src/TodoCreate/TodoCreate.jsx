import './TodoCreate.css'

import React from 'react'
import PropTypes from 'prop-types';

function TodoCreate({todo, setTodo, addTodoItem, isTitleEmpty}){
    return(
        <div className="todo__column todo-create">
            <h2 className="todo-create__title">Создайте новый todo task!</h2>
            <form id='todo-create' onSubmit={addTodoItem} name='todo-create' className="todo-create__form">
              <span className='todo-create__name'>Заголовок</span>
              <input className='todo-create__input todo-create__input--title' type="text" 
                onChange={(event)=> setTodo({
                    ...todo,
                    title: event.target.value,
                })}
                value = {todo.title}
              />
              <span className="todo-create__name-empty">{isTitleEmpty? "Необходимо заполнить поле 'Заголовок'": ""}</span>
              <span className='todo-create__name'>Дополнительная информация</span>
              <textarea className='todo-create__text' name="todo-text"
                onChange={(event)=> setTodo({
                    ...todo,
                    text: event.target.value,
                })}
                value={todo.text}
              >
              </textarea>
              <span className='todo-create__name'>Дедлайн</span>
              <input className='todo-create__input todo-create__input--deadline' type="date" 
                onChange={(event) => setTodo({
                    ...todo,
                    deadLine: event.target.value,
                })} 
                value={todo.deadLine}/>
            </form>
            <button className='todo-create__btn' type="submit" form ='todo-create'>Создать!</button>
        </div>
    )
}

TodoCreate.propTypes = {
    addTodoItem: PropTypes.func.isRequired
}

export default TodoCreate;