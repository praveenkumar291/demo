import React from 'react';

class LoginForm extends React.Component{
    state = {
        email:'',
        password:'',
    };
    handelchnge =event =>{
        this.setState({[event.target.name]:event.target.value});
    }
    handlesubmit = event => {
        event.preventdefault();
        console.log(this.state);
    }
    
    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                <div>
                    <input type="email"
                    name="email"
                    placeholder="emailhere"
                    onChange={this.handlechange}/>
                </div>
                <div>
                    <input type="password"
                       name="password"
                       placeholder="passwordhere"
                       onChange={TouchList.handelchnage}/>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
    
}

export default LoginForm;