import React, { Component } from "react";
import Button from "./components/Button/Button";
import Inlinetext from "./components/Inlinetext/Inlinetext";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Listitem from "./components/Listitem/Listitem";
import Wrapper from "./ui/Wrapper/Wrapper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [
        {name: 'Ham', surname: 'Haxverdyan', age: 22, id: 1},
        {name: 'Narek', surname: 'Ghazaryan', age: 32, id: 2},
        {name: 'Ash', surname: 'Saghatelyan', age: 23, id: 3},
      ],
      nextUserId: 4,
      searchName: '',      
    }
    this.nextUserName = React.createRef('');
    this.nextUserSurname = React.createRef('');
    this.nextUserAge = React.createRef('');
  }

  deleteHandler = (id) => {
    const deleteedFilteredUsers = this.state.userlist.filter(user => user.id !== id);
    this.setState({
      userlist: deleteedFilteredUsers
    })
  }

  changeName = (event) => {
    this.setState({
      searchName: event.target.value
    })
  }

  filterUser = (item) => {
      return   item.name.toLocaleLowerCase().includes(this.state.searchName.toLocaleLowerCase()) 
  }

  addUserHandler = () => {
    const newUser = {
      name: this.nextUserName.current.value,
      surname: this.nextUserSurname.current.value,
      age: this.nextUserAge.current.value,
      id: this.state.nextUserId
    }
    if(
      this.nextUserName.current.value.length >=2 
      && this.nextUserName.current.value.length <=10
      && this.nextUserSurname.current.value.length >=2
      && this.nextUserSurname.current.value.length <=12
      && this.nextUserAge.current.value > 18 
      && this.nextUserAge.current.value < 70) {
      this.setState({
        nextUserId: this.state.nextUserId + 1,
        userlist: this.state.userlist.concat(newUser)
      })
    }
  }


  render() {
    return (
       <Wrapper>
        <Inlinetext>search user by name</Inlinetext>
        <Input onChange={this.changeName}  type='text'/>
        <br />
        <Inlinetext> new user name </Inlinetext>
        <Input  propsRef={this.nextUserName} type='text' />
        <br />
        <Inlinetext> new user surname </Inlinetext>
        <Input propsRef={this.nextUserSurname} type='text' />
        <br />
        <Inlinetext> new user age </Inlinetext>
        <Input propsRef={this.nextUserAge} type='number' />
        <br />
        <Button onClick={this.addUserHandler}> add new user </Button>
         <List>
          {
            this.state.userlist.filter(this.filterUser).map(user => {
              return (
                <Listitem key={user.id}>
                   <Inlinetext> {user.name} </Inlinetext>
                   <Inlinetext> {user.surname} </Inlinetext>
                   <Inlinetext> {user.age} </Inlinetext>
                   <Button onClick={() => this.deleteHandler(user.id)}> delete </Button>
                </Listitem>
              )
            })
          }
         </List>
       </Wrapper>
    )
  }
}

export default App