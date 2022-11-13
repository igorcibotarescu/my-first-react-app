import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import TestLifeCycle from './components/learning/TestLifeCycle';
import TestComponentParent from './components/learning/TestComponentParent';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      background: 'white',
      increment: 0,
      showCounter: false,
      users: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>res.json())
    .then(data => this.setState({users: data}))
    .catch((error) => console.error(error))
    .finally(() => console.log('Finally'))
  }

  handleBackgroundChange(e){
    const selectedValue = e.target.value;
    this.setState({
      background: selectedValue
    });
  }

  increment(){
    this.setState({increment:this.state.increment + 1});
  }

  onUserCreated = user =>{
    this.setState((oldState) =>{
      const oldUsers = oldState.users;
      const ids = oldUsers.map(userx => userx.id);
      const maxId = Math.max(...ids);
      user.id = maxId + 1;
      const newUsers = [...oldUsers,user];
      return {users: newUsers};
    });

  }

  render(){
    return(
      <div className='App' style={{backgroundColor:this.state.background}}>
        <UserAddForm onUserCreated = {(createdUser) => this.onUserCreated(createdUser)}/>
        <br/>
        <UserList users = {this.state.users}/>
        <br/>
        <br/>
        <h4>Test LifeCycle</h4>
        <button onClick={() => this.setState({showCounter: !this.state.showCounter})}>Toggle</button>
        {this.state.showCounter ? <h5>The process is running...</h5> : <h5>The process was stopped</h5>}
        {this.state.showCounter && <TestLifeCycle/>}
        <p>Choose your background color here:</p>
        <input type='color' onChange={(e) => this.handleBackgroundChange(e)}/>
        <br/>
        <br/>
        <label>{this.state.increment}</label>
        <button onClick={() => this.increment()}>Increment</button>
        <br/>
        <br/>
        <TestComponentParent/>
      </div>
    );
  }
}

export default App;
