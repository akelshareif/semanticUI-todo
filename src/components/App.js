import React from 'react';
import Card from './Card';
import '../styles.css';

class App extends React.Component {
    
    render(){
        return(
            <div className='ui container top-space'>
                <Card />
            </div>
        );
    }
}

export default App;