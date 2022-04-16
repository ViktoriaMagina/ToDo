import './App.css'

import React from 'react'

import TodoCreate from './TodoCreate/TodoCreate';
import TodoList from './TodoList/TodoList';



function App() {
  const [actualTodos, setActualTodos] = React.useState([])
  const [deletedTodos, setDeletedTodos] = React.useState([])
  const [todo, setTodo] = React.useState({
    title: "",
    text: "",
    isDone: false, 
    deadLine: "",
  })
  const [isTitleEmpty, setIsTitleEmpty] = React.useState(false)
  const [isOpenArchive, setIsOpenArchive] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  

  React.useEffect(()=> {
    try {
      const ActualTodosItems = localStorage.getItem('actualTodos') || []
      const deletedTodosItems = localStorage.getItem('deletedTodos') || []
      setTimeout(()=> {
        setActualTodos(JSON.parse(ActualTodosItems))
        setDeletedTodos(JSON.parse(deletedTodosItems))
        setIsLoading(false)
      }, 500)
    } catch (error) {
      console.log("Зарузка данных из localStorage не удалась")
    }
  },[])

  React.useEffect(()=> {
    try {
      localStorage.setItem('actualTodos', JSON.stringify(actualTodos))
    } catch (error) {
      console.log("Загрузка актуальных данных в localStorage не удалась")
    }
  }, [actualTodos])

  React.useEffect(()=> {
    try {
      localStorage.setItem('deletedTodos', JSON.stringify(deletedTodos))
    } catch (error) {
      console.log("Загрузка удаленных данных в localStorage не удалась")
    }
  }, [deletedTodos])


  function changeTodoStatus(id){
    setActualTodos(actualTodos.map(item => {
      if(item.id === id){
        item.isDone = !item.isDone
      }
      return item
    }))
  }

  function deleteActualTodoItem(item){
    const newDeletedItem = {
      id: deletedTodos.length? deletedTodos[deletedTodos.length - 1].id + 1 : 1,
      title: item.title,
      text: item.text,
      isDone: item.isDone,
      deadLine: item.deadLine,
    }
    setDeletedTodos([...deletedTodos, newDeletedItem])
    setActualTodos(actualTodos.filter(todo => todo.id !== item.id))
  }
  function deleteArchivalTodoItem(id){
    setDeletedTodos(deletedTodos.filter(todo => todo.id !== id))
  }

  function addTodoItem(event){
    event.preventDefault()
    if(todo.title !== ""){
      const id = actualTodos.length? actualTodos[actualTodos.length - 1].id + 1 : 1;
      const deadLine = todo.deadLine === "" ? "дата не указана" : todo.deadLine
      const newTodo = {
        ...todo,
        id,
        deadLine,
      }
      setActualTodos([...actualTodos, newTodo])
      setTodo(()=> ({
        title: "",
        text: "",
        isDone: false, 
        deadLine: "",
      }))
      setIsTitleEmpty(false)
    }
    else{
      setIsTitleEmpty(true)
      return
    }
  }

  function reestablishTodoItem(item){
    const newActualItem = {
      id: actualTodos.length? actualTodos[actualTodos.length - 1].id + 1 : 1,
      title: item.title,
      text: item.text,
      isDone: item.isDone,
      deadLine: item.deadLine,
    }
    setActualTodos([...actualTodos, newActualItem])
    setDeletedTodos(deletedTodos.filter(todo => todo.id !== item.id))
  }

  return (
    <div className="todo">
      <div className="todo__inner">
        <TodoList
          isLoading = {isLoading}

          isOpenArchive = {isOpenArchive}
          setIsOpenArchive = {setIsOpenArchive} 

          actualTodoItems = {actualTodos} 
          deletedTodoItems = {deletedTodos}

          changeTodoStatus={changeTodoStatus} 
          deleteTodoItem={deleteActualTodoItem}

          deleteArchivalTodoItem = {deleteArchivalTodoItem}
          reestablishTodoItem = {reestablishTodoItem}
          />
        <TodoCreate
          setTodo={setTodo}
          todo={todo}

          addTodoItem={addTodoItem}
          isTitleEmpty={isTitleEmpty}
          />
      </div>
    </div>
  );
}

export default App;
