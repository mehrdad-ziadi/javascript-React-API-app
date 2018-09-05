import React from 'react';
import Users from './Users';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: "",
            value: ""
        }
    }

    updateInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })
    }   
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState(() =>{
            return {
                value: parseInt(this.state.inputValue)
            }
        })
    }

    render() {

        var userArray = [];
        var i;

        for(i = 0; i < this.state.value; i++) {
            userArray.push(
                <Users key={i} />
            )
        }

        return(
            <div className="App">
                <div className="App-header">
                    <p>
                    <input value={this.state.inputValue} onChange={this.updateInputValue}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                    </p>
                </div>
                <div>
                    <table>
                    <thead>
                        <th>Profile</th>
                        <th>Username</th>
                        <th>Email</th>
                    </thead>
                                        
                    {userArray}
                    
                    </table>
                </div>
            </div>
        )
    }
}

export default App;