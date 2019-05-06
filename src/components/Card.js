import React from 'react';
import Input from './Input';
import List from './List';

class Card extends React.Component {
    
    state = {
        item: []
    }

    retrieveItem = item => {
        this.setState({prevItem: this.state.item});
        const todo = this.state.item.concat(item);
        this.setState({item: todo});
    }

    deleteItem = index => {
        const newArr = this.state.item.filter((todo, i) => {
            return todo !== this.state.item[index];
        });
        this.setState({item: newArr});
    }

    render(){
        return(
            <div className='ui centered card'>
                <div>
                    <Input retrieve={this.retrieveItem} />
                </div>
                <div className='list-space'>
                    <List todoItem={this.state.item} deleteItem={this.deleteItem} />
                </div>
            </div>
        );
    }
}

export default Card;