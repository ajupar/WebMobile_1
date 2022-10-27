import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 1.9 - Feedback app, part 4
// Change your app so that the statistics are not displayed until some feedback has been given


// nappula, jolla annetaan palautetta
const CustomButton = (props) => {

  return (
    <button onClick={props.fun}>{props.buttonName}</button>

  )
}

// komponentti, joka sisältää kaikki tilastot
// otetaan parametrinä sisään ohjelman tila "state" ja siihen tallennetut muuttujat
const Statistics = (props) => {

  const appState = props.state

  // Teht 1.9. Jos palautteita ei ole vielä annettu, tilastojen sijaan näytetään ilmoitusteksti
  if (appState.kokonaismäärä === 0 ) {
    return (
      <div>
        <h1>Palautetilastot</h1>
        <p>Palautteita ei ole vielä annettu</p>
      </div>
    )

  }

  return (
    <div>
      <h1>Palautetilastot</h1>
      <Statistic statType='Hyvä' stat={appState.hyvä} /> 
      <Statistic statType='Neutraali' stat={appState.neutraali} />
      <Statistic statType='Huono' stat={appState.huono} /> 
      <Statistic statType='Keskiarvo' stat={Math.round(appState.keskiarvo *100)/100} /> 
      <Statistic statType='Positiivisia' stat={Math.round(appState.hyvä / appState.kokonaismäärä * 100 * 100) / 100 + ' %'} />
    </div>


  )

}

// yksittäinen tilastorivi
const Statistic = (props) => {

  return (
    <p>{props.statType}: {props.stat}</p>
  )


}


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
          <CustomButton fun={this.klikHyvä} buttonName='Hyvä' />
          <CustomButton fun={this.klikNeutraali} buttonName='Neutraali' />
          <CustomButton fun={this.klikHuono} buttonName='Huono' />
          <br />
          <Statistics state={this.state} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
