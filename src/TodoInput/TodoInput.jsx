import './TodoInput.css'

import React from "react"

function TodoInput({search, setSearch}){
    return(
        <input id='todo-input' className="todo-input" type="text" placeholder='Найти'
        value={search}
        onChange = {(event) => setSearch(event.target.value)}
        />
    )
}

export default TodoInput