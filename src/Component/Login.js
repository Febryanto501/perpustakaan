import React from 'react'
import axios from 'axios'
import Form from './Part/FormLogin'
import Background from "./assets/images.jpg";
// import Redirect from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }

    InputChangeHandler(event) {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = this.state
        delete data.redirect
        //console.log(this.state);
        //console.log(data)
        axios.post('http://localhost:3001/account/login',data)
            .then((result) => {
                // console.log(result.data.code)
                let code = result.data.code
                if (code === 200){
                    this.setState({redirect: true})
                    window.location.href = '/Home'
                }else{
                    this.setState({redirect: true})
                    window.location.href = '/';
                }
            })
            // .catch(({ response }) => { 
            //     console.log(response.data);  
            //     console.log(response.status);  
            //     console.log(response.headers);  
            // })
    }

    render(){
        //console.log(this.state)
        // if (this.state.redirect) {
        //     return (<Redirect to='/' />)
        // }
        return(
            <div style={{ width:"100%",justifyContent: "center",alignContent: "center", backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh",
            paddingTop: 200
            }}>
                
                <Form username={this.state.username}
                    password={this.state.password}
                    InputChangeHandler={this.InputChangeHandler}
                    handleSubmit={this.handleSubmit}
                />
                
            </div>
            
        )
    }
}

export default Login