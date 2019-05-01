import React from 'react';

const List = props => {

    const items = props.sent;
    
    const todoList = items.map((item, index) =>
        <div key={index} className='item'>
            <div key={index} className='content'>
                {item}
            </div>
        </div>
    );

    return(
        <div className='ui relaxed divided list'>
            {todoList}
        </div>
    );
}

export default List;