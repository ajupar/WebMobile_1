import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 1.4 - Objects in an array

const Header = (props) => {
  return (
    <h1>
      <p>{props.title}</p>
    </h1>
  )
}

const Entry = (props) => {  

  return(
    <div>
      <p>{props.name} {props.phone}</p>      
    </div>
  )
}

const Contents = (props) => {

  // otetaan tiedot parametrina annetusta taulukosta: yhteystiedon indeksinumero + haluttu attribuutti
  return (
    <div>
      <Entry name = {props.contacts[0].name} phone = {props.contacts[0].phonenumber} />
      <Entry name = {props.contacts[1].name} phone = {props.contacts[1].phonenumber} />
      <Entry name = {props.contacts[2].name} phone = {props.contacts[2].phonenumber} />
    </div>
  )
}

const App = () => {

  const title = 'Superadvanced web phonebook app'
  const contacts = [  // tehtävä 1.4 - objects in an array
    {
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      name: 'Foo bar',
      phonenumber: '000'
    }
  ]

  // annetaan sisällölle parametrina pelkkä taulukko
  return (
    <div>
      <Header title = {title}/>
      <Contents contacts = {contacts} />  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
