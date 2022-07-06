import React, { Component } from "react";
import Button from "./components/Button/Button";
import Inlinetext from "./components/Inlinetext/Inlinetext";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import Block from "./components/Block/Block"
import Listitem from "./components/Listitem/Listitem";
import Wrapper from "./ui/Wrapper/Wrapper";
import classes from "./ui/Global.module.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [
        {name: 'Ham', surname: 'Haxverdyan', age: 22,image:"https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png", id: 1},
        {name: 'Narek', surname: 'Ghazaryan', age: 32,image:"https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png", id: 2},
        {name: 'Ash', surname: 'Saghatelyan', age: 23,image:"https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png", id: 3},
      ],
      nextUserId: 4,
      searchName: '',    
      invalidtext:'',  
    }
    this.nextUserName = React.createRef('');
    this.nextUserSurname = React.createRef('');
    this.nextUserAge = React.createRef('');
    this.nextUserimage = React.createRef('') ;
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
      return   item.name.toLocaleLowerCase().startsWith(this.state.searchName.toLocaleLowerCase()) 
  }

  addUserHandler = () => {
    const newUser = {
      name: this.nextUserName.current.value,
      surname: this.nextUserSurname.current.value,
      age: this.nextUserAge.current.value,
      image: this.nextUserimage.current.value || "https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png",
      id: this.state.nextUserId
    }
    if(
      this.nextUserName.current.value.length >=2 
      && this.nextUserName.current.value.length <=10
      && this.nextUserSurname.current.value.length >=2
      && this.nextUserSurname.current.value.length <=15
      && this.nextUserAge.current.value >= 18 
      && this.nextUserAge.current.value < 70) {
      this.setState({
        nextUserId: this.state.nextUserId + 1,
        userlist: this.state.userlist.concat(newUser)
      })
    }else {
      this.setState({
        invalidtext: "Fill in the data correctly !!!"
      })
    }
  }


  render() {
    return (
       <Wrapper>
        
        <Block className={classes.searchdiv}>
            <Inlinetext>Search user by Name</Inlinetext> 
            <Input onChange={this.changeName}  className={classes.newinputs} placeholder = "Search" type='text'/>
        </Block>
         <Block  className={classes.divDesign}>
            <Inlinetext> New user name </Inlinetext>
            <Input  propsRef={this.nextUserName} className={classes.newinputs} placeholder ="Tag your Name" type='text' />
            <Inlinetext> New user surname </Inlinetext>
            <Input propsRef={this.nextUserSurname} className={classes.newinputs} placeholder ="Tag your Surname" type='text' />
            <Inlinetext> New user age </Inlinetext>
            <Input propsRef={this.nextUserAge} className={classes.newinputs} placeholder ="Tag your age"  type='number' />
            <Inlinetext> New user image url </Inlinetext>
            <Input propsRef={this.nextUserimage} className={classes.newinputs} placeholder="Tag you image url" />
            <Button onClick={this.addUserHandler} className={classes.newbutton} > add new user </Button> 
         </Block>
         <Block className={classes.listdiv}>
            <Block className={classes.listtitle}>
            <Inlinetext> uImage </Inlinetext>
            <Inlinetext> uName </Inlinetext>
            <Inlinetext> uSurname </Inlinetext>
            <Inlinetext> uAge</Inlinetext>
            <Inlinetext> DELETE</Inlinetext>
          </Block>
        <List className={classes.list}>
          {
            this.state.userlist.filter(this.filterUser).map(user => {
              return (
                <Listitem className={classes.listitem} key={user.id}>
                  <Block className={classes.imgdiv}>
                     <img className={classes.imgDesign} width="100%" src={user.image} alt="" />
                  </Block>
                  <Block className={classes.listnamediv}>
                     <Inlinetext> {user.name} </Inlinetext>
                     <Inlinetext> {user.surname} </Inlinetext>
                     <Inlinetext> {user.age} </Inlinetext>
                  </Block>
                     <Button className={classes.deletebutton} onClick={() => this.deleteHandler(user.id)}> Delete </Button>
                </Listitem>
              )
            })
          }
        </List>
         </Block>
         <Inlinetext className={classes.invalid} >{this.state.invalidtext}</Inlinetext>
       </Wrapper>
    )
  }
}


export default App