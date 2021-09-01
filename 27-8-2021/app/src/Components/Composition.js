import React from "react";
import ReactDOM from "react-dom";
export default function App() {
  return (
    <div className="App">
      
    </div>
  );
}
class UserNameForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}
class CreateUserName extends React.Component {
  render() {
    return (
      <div>
        <UserNameForm />
        <button>Create</button>
      </div>
  
    );
  }
}
class UpdateUserName extends React.Component {
  render() {
    return (
      <div>
        <UserNameForm />
        <button>Update</button>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <CreateUserName />
    <UpdateUserName />
  </div>,
  document.getElementById("root")
);

