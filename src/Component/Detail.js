import React, { Component } from 'react';
import axios from 'axios';
import DetailBuku from './Part/DetailBuku';
import Navs from './Part/nav';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
// 
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            kd_buku: this.props.match.params.kd_buku
        }
    }

    
    componentDidMount() {

        axios.get('http://localhost:3001/buku/' + this.state.kd_buku)
            .then((results) => {
                //const data = results.data;
                //console.log(results.data);
                delete this.state.data;
                this.setState({
                    data : results.data
                });
            })
            // .catch(({ response }) => { 
            //     console.log(response.data);  
            //     console.log(response.status);  
            //     console.log(response.headers);  
            // })
            
    }

    render() {
        //console.table(this.state.data);
        //console.log(this.state.data[0]);
        return (
            <div>
                <Navs />
                <div style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: "center", marginLeft: "10%", marginRight: "20%" }}>
                <Container style={{ marginTop: 15 }}>
                    <Row>
                        <Col sm="12" md={{ size: 7, offset:20}}>
                            <DetailBuku detail={this.state.data[0]} />
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default Detail;
