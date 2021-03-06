import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { TodosComponent } from './todos/todos';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Todo App</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/add">Add</Link>
        </div>
        <Route exact path="/" component={TodosComponent} />
        <Route path="/add" component={AddElement} />
      </div>
    );
  }
}

function AddElement() {
  return <h1>Add todo item</h1>
}

export default App;