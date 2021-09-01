import React from "react";
import ReactDOM from "react-dom";
export default function App() {
    return (
      <div className="App">
        
      </div>
    );
  }
class UserNameForm extends React.Component
{
    render(){
        return(
            <div>
                <input type="text" />
            </div>
        )
    }
}
class CreateUserName extends UserNameForm
{
    render()
    {
        const parent = super.render();
        return(
            <div>
                {parent}
                <button>Insert</button>
            </div>
        )
    }
}
class UpdateUserName extends CreateUserName
{
    render()
    {
        const p = super.render();
         
            return (
                <div>
                    {p}
                    <button>Delete</button>
                </div>
            )
    }
}
ReactDOM.render(
    (<div>
       < CreateUserName />
       < UpdateUserName />
    </div>), document.getElementById('root')
 );
