import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    console.log('App constructor')
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }


  // state = {
  //   cars: [
  //     {name: 'Ford', year: 2018},
  //     {name: 'Audi', year: 2016},
  //     {name: 'Mazda', year: 2010}
  //   ],
  //   pageTitle: 'React components',
  //   showCars: false
  // }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // changeTitleHandler = (pageTitle) => {
  //   this.setState({pageTitle})
  // }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car

    this.setState({cars})
  }

  handleInput = (event) => {
    console.log('Changed', event.target.value)
    this.setState({
      pageTitle: event.target.value
    })
  }

  deleteHandler(index) {
    let cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})

  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')

    const divStyle = {
      textAlign: 'center'
    }

    

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <Counter/>

        <hr/>
        
        <button
          style={{marginTop: '2px'}}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        <div style={{
          width: '400px',
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {this.state.showCars        
            ? this.state.cars.map((car, index) => {
              return (
                  <Car
                    name={car.name}
                    year={car.year}
                    onChangeName={ event => this.onChangeName(event.target.value, index)}
                    onDelete={this.deleteHandler.bind(this, index)}
                  />
              )
            }) 
            : null
          }
        </div>
        {/* <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} /> */}
      </div>
    );
  }
}

export default App;
