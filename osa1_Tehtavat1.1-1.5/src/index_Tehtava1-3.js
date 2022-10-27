import React from 'react'
import ReactDOM from 'react-dom'


// Tehtävä 1.3 - Data in objects

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
      <Entry name = {props.name1} phone = {props.phone1} />
      <Entry name = {props.name2} phone = {props.phone2} />
      <Entry name = {props.name3} phone = {props.phone3} />
    </div>
  )
}

const App = () => {

  const title = 'Superadvanced web phonebook app'
  const contact1 = {
    name: 'John Doe',
    phonenumber: '358401234567'
  }
  const contact2 = {
    name: 'Jane Doe',
    phonenumber: '44551234567'
  }
  const contact3 = {
    name: 'Foo bar',
    phonenumber: '000'
  }

  return (
    <div>
      <Header title = {title}/>
      <Contents 
          name1 = {contact1.name} phone1 = {contact1.phonenumber}
          name2 = {contact2.name} phone2 = {contact2.phonenumber}
          name3 = {contact3.name} phone3 = {contact3.phonenumber} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
