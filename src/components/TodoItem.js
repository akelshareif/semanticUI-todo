import React from 'react';

class TodoItem extends React.Component {

    handleIndex = () => {
        this.props.returnedIndex(this.props.index);
    }

    render(){

        return(
            <div className='item'>
                <div className='content'>
                    {this.props.item}
                    <button onClick={this.handleIndex} className='ui icon red right floated mini button '>
                        <i className='minus icon' />
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoItem;
