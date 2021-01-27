import React from 'react'
import axios from 'axios'
import { 
    Container,
    Col, 
    Row,
} from 'reactstrap';
import Form from './Part/FormLogin'
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
        const data = [this.state]
        delete data.redirect
        axios.get('http://localhost:3001/buku,',data)
            .then((result) => {
                console.log(result)
                this.setState({redirect: true})
                if (result == null){
                    window.location.href = '/login';
                }else{
                    window.location.href = '/'
                }
            })
    }

    render(){
        // if (this.state.redirect) {
        //     return (<Redirect to='/' />)
        // }
        return(
            <div class="mid">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Login</h2><br/>
                            <Form
                                username={this.state.username}
                                password={this.state.password}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login