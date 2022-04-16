import './TodoList.css'

import React from 'react'
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/TodoItem'
import TodoSearch from '../TodoSearch/TodoSearch'
import TodoItemDeleted from '../TodoItemDeleted/TodoItemDeleted'
import TodoMenu from '../TodoMenu/TodoMenu';

function TodoList({
  actualTodoItems, 
  deletedTodoItems, 
  changeTodoStatus, 
  deleteTodoItem, 
  isLoading, 
  isOpenArchive,
  reestablishTodoItem,
  deleteArchivalTodoItem,
  setIsOpenArchive
}){
  const [filter, setFilter] = React.useState("")
  const [search, setSearch] = React.useState("")
  const [isFilterOpen, setFilterOpen] = React.useState(false)

  const itemFilter = (items) => {
    return(
      items
      .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
      .filter(todo => {
        if(filter === "done" && todo.isDone === true){
          return true
        }
        if(filter === "not-done" && todo.isDone === false){
          return true
        }
        if(filter === ""){
          return true
        }
      })
    )
  }


  const renderList = () => {
    if(!isOpenArchive){
      return(
        isLoading?
          <ul className="todo-list__content">
            {["", ""].map((item, index) => 
              <TodoItem 
              key = {index} 
              item = {item} 
              changeTodoStatus={changeTodoStatus}
              deleteTodoItem = {deleteTodoItem}
              isLoading={isLoading}
            />
          )}
        </ul>
        : actualTodoItems.length?
              <ul className="todo-list__content">
                {itemFilter(actualTodoItems)
                .map(item => 
                  <TodoItem 
                    key = {item.id} 
                    item = {item} 
                    changeTodoStatus={changeTodoStatus}
                    deleteTodoItem = {deleteTodoItem}
                    isLoading={isLoading}/>
                  )
                }
              </ul>
              :
              <div className="todo-list__empty">
              <h4 className="todo-list__empty-title">Ваш список дел пуст. &#128522;</h4>
            </div>
      )
    }
    else{
      return(
        isLoading?[...Array(2)]
        .map(item => 
          <TodoItemDeleted 
            key = {item.id} 
            item = {item} 
            reestablishTodoItem = { reestablishTodoItem}
            deleteArchivalTodoItem = { deleteArchivalTodoItem}
            isLoading={isLoading}
        />)
        : deletedTodoItems.length?
              <ul className="todo-list__content">
              {
              itemFilter(deletedTodoItems)
              .map(item => 
                <TodoItemDeleted 
                  key = {item.id} 
                  item = {item} 
                  reestablishTodoItem = { reestablishTodoItem}
                  deleteArchivalTodoItem = { deleteArchivalTodoItem}
                  isLoading={isLoading}
              />)
            }
          </ul>
          :
          <div className="todo-list__empty">
            <h4 className="todo-list__empty-title">Ваш список удаленных дел пуст. &#128522;</h4>
          </div>
      )
    }

  }
  return(
      <div className="todo__column todo-list">
        <h2 className="todo-list__title">{isOpenArchive? "Ваш список удаленных дел":"Ваш список дел"}</h2>
        <TodoSearch
          search={search}
          setSearch = {setSearch}
          isFilterOpen={isFilterOpen}
          setFilterOpen={setFilterOpen}
          setFilter={setFilter}
        />
        {renderList()}
        <TodoMenu
          isOpenArchive={isOpenArchive}
          setIsOpenArchive={setIsOpenArchive}
        />
      </div>
  )
}

TodoList.propTypes = {
  deleteTodoItem: PropTypes.func.isRequired,
  changeTodoStatus: PropTypes.func.isRequired,
  actualTodoItems: PropTypes.array.isRequired,
  deletedTodoItems: PropTypes.array.isRequired,
}


export default TodoList
