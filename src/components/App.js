import React from 'react';
import Card from './Card';
import '../styles.css';

class App extends React.Component {
    
    render(){
        return(
            <div className='ui container top-bottom-space'>
                <h1 className='color ui centered header'>The ReactJS To-Do List</h1>
                <Card />
            </div>
        );
    }
}

export default App;