import React from 'react'
import ReactDOM from 'react-dom'

// Ratkaisu tehtävään 1.2 - More components

const Header = () => {
  const title = 'Superadvanced web phonebook app'
  return (
    <h1>
      <p>{title}</p>
    </h1>
  )
}

const Entry = (props) => {  // Teht 1.2 ratkaisu eli Entry tarvitsee parametrina props, jossa nimi ja numero

  return(
    <div>
      <p>{props.name} {props.phone}</p>      
    </div>
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
      <Entry name = {name1} phone = {phone1} />
      <Entry name = {name2} phone = {phone2} />
      <Entry name = {name3} phone = {phone3} />
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
