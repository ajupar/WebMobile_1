import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 1.6 - Feedback app, part 1

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0
    }
  }

  klikHyvä = () => {
    this.setState({
      hyvä: this.state.hyvä + 1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Anna palautetta</h1>
          <button onClick={this.klikHyvä}>Hyvä</button>
          <button onClick={this.klikNeutraali}>Neutraali</button>
          <button onClick={this.klikHuono}>Huono</button>
          <br />
          <h1>Palautetilastot</h1>
          <p>Hyvä: {this.state.hyvä}</p>
          <p>Neutraali: {this.state.neutraali}</p>
          <p>Huono: {this.state.huono}</p>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
