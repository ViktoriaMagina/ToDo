import './TodoSearch.css'

import React from "react"

import TodoFilters from '../TodoFilters/TodoFilters'
import TodoInput from "../TodoInput/TodoInput"

function TodoSearch({search, setSearch,  isFilterOpen, setFilterOpen, setFilter}){

    return(
        <div className="todo-search">
          <TodoInput
            search={search}
            setSearch={setSearch}
          />
          <TodoFilters
            setFilter={setFilter}
            isFilterOpen={isFilterOpen}
            setFilterOpen={setFilterOpen}
          />
      </div>
    )
}

export default TodoSearch