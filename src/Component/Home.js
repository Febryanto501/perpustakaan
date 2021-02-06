import React, { Component } from 'react';
import axios from 'axios';
import ListBuku from './Part/ListBuku';
import Navs from './Part/nav';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Background from "./assets/images.jpg";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }


    componentDidMount() {

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };

        axios.get('http://localhost:3001/buku',axiosConfig)
            .then((results) => {
                // const data = results.data.data;
                delete this.state.data;
                this.setState({
                    data : results.data.data
                });
            })
            
    }

    render() {
        //console.table(this.state.data);
        //console.log(this.state.data)
        return (
            <div style={{backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh"}}>
                <Navs />
                <div style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: "center", marginLeft: "10%", marginRight: "20%" }}>
                <Container style={{ marginTop: 15, marginRight: "20%", marginLeft:"20%"}}>
                    <Row>
                        <Col sm="12" md={{ size: 7, offset:20}}>
                            <ListBuku list={this.state.data} />
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default Home;
