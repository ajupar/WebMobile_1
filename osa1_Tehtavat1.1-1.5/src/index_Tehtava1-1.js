import React from 'react'
import ReactDOM from 'react-dom'


// Vastaus tehtävään 1.1 - Refactoring components and using props

const Header = () => {
  const title = 'Superadvanced web phonebook app'
  return (
    <h1>
      <p>{title}</p>
    </h1>
  )
}

const Contents = () => {

  const name1 = 'John Doe'
  const phone1 = '358401234567'
  const name2 = 'Jane Doe'
  const phone2 = '44551234567'
  const name3 = 'Foo bar'
  const phone3 = '000'

  return (
    <div>
      <p>{name1} {phone1}</p>
      <p>{name2} {phone2}</p>
      <p>{name3} {phone3}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header />
      <Contents />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
