import React from 'react'
import axios from 'axios'
import {
    Container,
    Col,
    Row,
} from 'reactstrap';
import Forms from './Part/FormEdit'
import Navs from './Part/nav'
import Background from "./assets/images.jpg";

class EditBuku extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            //data: [],
            judul:'',
            isbn:'',
            cover:'',
            penulis:'',
            tahun:'',
            ket:'',
            kategori_buku:'',
            redirect: false,
            kd_buku: this.props.match.params.kd_buku,
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
        // const id = this.state.id
        const data = this.state
        delete data.redirect
        //delete data.kd_buku
        //console.log(data)
        axios.put('http://localhost:3001/buku/'+ this.state.kd_buku, data)
            .then((result) => {
                    //console.log(result)
                    this.setState({ redirect: true })
                    window.location.href = '/Manage_Data';
                })
            //     .catch(({ response }) => { 
            //     console.log(response.data);  
            //     console.log(response.status);  
            //     console.log(response.headers);  
            // })
    }
        
    render() {
        // console.log(this.state)
        return (

            <div>
                <Navs />
                <div style={{backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh",
                width: "100%",
                paddingTop: 50}}>
                <Container style={{ width: "auto", height: "auto",padding: 20,backgroundColor:"white",borderRadius: 10}}>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Edit Buku</h2><br />
                            <Forms
                                judul={this.state.judul}
                                isbn={this.state.isbn}
                                cover={this.state.cover}
                                penulis={this.state.penulis}
                                tahun={this.state.tahun}
                                ket={this.state.ket}
                                kategori_buku={this.state.kategori_buku}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />

                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}

export default EditBuku