import './TodoFilters.css'

import React from "react"

function TodoFilters({setFilterOpen, isFilterOpen, setFilter}){
    return(
        <div className="todo-filters">
        <button onClick={() => setFilterOpen(!isFilterOpen)} className="todo-filters__btn-open">Фильтр</button>
        <ul  className={isFilterOpen?"todo-filters__list active":"todo-filters__list"}>
          <li className="todo-filters__item">
            <button onClick={() => {
              setFilterOpen(false)
              setFilter("done")
            }} className="todo-filters__item-btn todo-filters__item-btn--done">Выполненные задачи</button>
          </li>
          <li className="todo-filters__item">
            <button onClick={() => {
              setFilterOpen(false)
              setFilter("not-done")
            }} className="todo-filters__item-btn todo-filters__item-btn--not-done">Не выполненные задачи</button>
          </li>
          <li className="todo-filters__item">
            <button onClick={() => {
              setFilterOpen(false)
              setFilter("")
            }} className="todo-filters__item-btn todo-filters__item-btn--skip">Сбросить фильтр</button>
          </li>
        </ul>
      </div>
    )

}

export default TodoFilters