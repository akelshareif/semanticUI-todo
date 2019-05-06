import React from 'react';

class Input extends React.Component {

    state = {
        data: ''
    }

    handleData = e =>{
        this.setState({data: e.target.value});
    }

    sendData = e => {
        this.props.retrieve(this.state.data);
        this.setState({data: ''});
    }

    handleKeypress = e => {
        if(e.charCode === 13){
            this.props.retrieve(this.state.data);
            this.setState({data: ''});
        }
    }


    render(){
        return(
            <div className='ui action input input-size'>
                <input type='text' placeholder='Add Todo' onChange={this.handleData} onKeyPress={this.handleKeypress} value={this.state.data} />
                <button className='ui icon green button' onClick={this.sendData} >
                    <i className='plus icon' />
                </button>
            </div>
        );
    }
}

export default Input;