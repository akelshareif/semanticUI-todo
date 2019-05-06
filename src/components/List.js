import React from 'react';
import TodoItem from './TodoItem';


const List = props => {
    const items = props.todoItem;

    const returnedIndex = index => {
        // console.log(renderTodoList[index].props.item);
        props.deleteItem(index);
    }

    let renderTodoList = items.map((item, index) =>
        <TodoItem key={index} index={index} item={item} returnedIndex={returnedIndex}/>
    );

    return(
        <div className='ui relaxed divided list'>
            {renderTodoList}
        </div>
    );
}


export default List;