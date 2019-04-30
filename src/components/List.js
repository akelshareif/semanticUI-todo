import React from 'react';

class List extends React.Component {

    listDisplay = () => {
        return(
            <div className='item'>
                <div className='content'>
                    {this.props.sent}
                </div>
            </div>
        );
    }


    render(){
        return(
            <div className='ui relaxed divided list'>
                {this.listDisplay()}
            </div>
        );
    }
}

export default List;