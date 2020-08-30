import React from 'react'

export default class Counter extends React.Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {

        const btns = {
            marginRight: '2px'
        }

        return (
            <React.Fragment>
                <h2>Counter {this.state.counter}</h2>
                <button style={{marginRight: '2px'}} onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </React.Fragment>
        )
        // return [
        //         <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //         <button key={'2'} style={btns} onClick={this.addCounter}>+</button>,
        //         <button key={'3'} style={btns} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        // ]
    }
}