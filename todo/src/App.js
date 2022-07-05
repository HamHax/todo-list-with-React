import { Component } from "react";
import Button from "./components/Button/Button";
import Inlinetext from "./components/Inlinetext/Inlinetext";
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

    }
  }

  deleteHandler = (id) => {
    const deleteedFilteredUsers = this.state.userlist.filter(user => user.id !== id);
    this.setState({
      userlist: deleteedFilteredUsers
    })
  }

  render() {
    return (
       <Wrapper>
         <List>
          {
            this.state.userlist.map(user => {
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