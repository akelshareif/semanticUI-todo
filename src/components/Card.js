import React from 'react';
import Input from './Input';
import List from './List';

class Card extends React.Component {
    
    state = {
        item: ''
    }

    receivedItem = item => {
        this.setState({item: item});
    }

    render(){
        return(
            <div className='ui centered card'>
                <div>
                    <Input retrieve={this.receivedItem} />
                </div>
                <div className='list-space'>
                    <List sent={this.state.item} />
                </div>
            </div>
        );
    }
}

export default Card;