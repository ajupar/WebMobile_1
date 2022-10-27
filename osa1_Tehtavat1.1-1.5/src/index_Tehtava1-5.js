import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 1.5 - One step further with JavaScript objects

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

  return (
    <div>
      <Entry name = {props.contacts[0].name} phone = {props.contacts[0].phonenumber} />
      <Entry name = {props.contacts[1].name} phone = {props.contacts[1].phonenumber} />
      <Entry name = {props.contacts[2].name} phone = {props.contacts[2].phonenumber} />
    </div>
  )
}

const App = () => {

  const phonebookapp = {
    title: 'Superadvanced web phonebook app',
    contacts: [
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
  }

  // ei tehdä muuta kuin viitataan parametreihin phonebookapp-olion kautta, eli
  // lisätään syötteenä annettujen parametrien eteen 'phonebookapp.' --> phonebookapp.title ja phonebookapp.contacts
  return (
    <div>
      <Header title = {phonebookapp.title}/>
      <Contents contacts = {phonebookapp.contacts} />  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
