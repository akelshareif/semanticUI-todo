import React from 'react';

class Input extends React.Component {

    state = {
        data: ''
    }

    handleData = e =>{
        this.setState({data: e.target.value});
    }

    sendData = () => {
        this.props.retrieve(this.state.data);
    }

    render(){
        return(
            <div className='ui action input input-size'>
                <input type='text' placeholder='Add Todo' onChange={this.handleData}/>
                <button className='ui icon button' onClick={this.sendData}>
                    <i className='plus icon' />
                </button>
            </div>
        );
    }
}

export default Input;