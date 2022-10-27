import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 1.7 - Feedback app, part 2

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      kokonaismäärä: 0
    }
  }

  klikHyvä = () => {
    this.setState({
      hyvä: this.state.hyvä + 1,
      kokonaismäärä: this.state.kokonaismäärä + 1,
      keskiarvo: (this.state.hyvä + 1 - this.state.huono) / (this.state.kokonaismäärä + 1)
    })

  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      kokonaismäärä: this.state.kokonaismäärä + 1,
      keskiarvo: (this.state.hyvä - this.state.huono) / (this.state.kokonaismäärä + 1)
    })

  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      kokonaismäärä: this.state.kokonaismäärä + 1,
      keskiarvo: (this.state.hyvä - this.state.huono - 1) / (this.state.kokonaismäärä + 1)
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
          <p>Keskiarvo: {Math.round(this.state.keskiarvo *100)/100 }</p>
          {/* <p>Kokonaismäärä: {this.state.kokonaismäärä}</p> */} 
          <p>Positiivisia: {Math.round(this.state.hyvä / this.state.kokonaismäärä * 100 * 100)/100} %</p>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
