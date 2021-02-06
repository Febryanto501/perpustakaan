import React, { Component } from 'react';
import axios from 'axios';
import DetailBuku from './Part/DetailBuku';
import Navs from './Part/nav';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Background from "./assets/images.jpg";

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
                //delete this.state.data;
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
        console.log(this.state.data);
        return (
            <div>
                <Navs />
                <div style={{backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh",
                width: "100%",
                paddingTop:20}}>
                {/* <div style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: "center", marginLeft: "10%", marginRight: "20%" }}> */}
                <Container style={{ width: "auto", height: "auto",backgroundColor:"white",borderRadius: 10,padding: 20}}>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset:2}}>
                            <DetailBuku detail={this.state.data} />
                        </Col>
                    </Row>
                </Container>
                {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Detail;
