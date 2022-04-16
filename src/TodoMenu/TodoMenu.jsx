import './TodoMenu.css'

function TodoMenu({setIsOpenArchive, isOpenArchive}){
    return(
        <ul className='todo-menu'>
        <li className="todo-menu__item">
          <button onClick={() => setIsOpenArchive(false)} 
          className={isOpenArchive? "todo-menu__button todo-menu__button--actual" : "todo-menu__button todo-menu__button--actual active"} 
          type='button'>Актуальный список</button>
          </li>
        <li className="todo-menu__item">
          <button onClick={() => setIsOpenArchive(true)} 
          className={isOpenArchive?"todo-menu__button todo-menu__button--archive active": "todo-menu__button todo-menu__button--archive"} 
          type='button'>Архив</button>
          </li>
      </ul>
    )
}

export default TodoMenu