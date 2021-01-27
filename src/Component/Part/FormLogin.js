import React from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';
class FormLogin extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Username</Label>
                    <Col sm={5}>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            value={this.props.username}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={5}>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">login</Button>
                    </Col>
                </FormGroup>
            </Form>  
        )
        
    }
}

export default FormLogin