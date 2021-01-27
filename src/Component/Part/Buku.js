import React from 'react';
import logo from '../assets/test.jpg'
//import { Card, Button, Image, Row, Col, Avatar, Rate } from 'antd';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


class Buku extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            kd_buku:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }

    
    render() {
        const url = 'http://localhost:3000/'
        //console.log(this.props);
        //console.log(logo);
        const lists = this.props.list.map((e, i) => {
            const img = e.cover;
            if (img === ""){
                return (
                    // <div style={{ width: 240 ,display: 'inline-block',margin:50, boxShadow : "8px 7px 13px 0px #dadada"}}>
                    <Card style={{ width: 240 ,display: 'inline-block',margin:50, boxShadow : "8px 7px 13px 0px #dadada" }}>
                        <CardImg style={{maxHeight: "80%" ,padding: 20, display: "flex", justifyContent: "center"}} src={logo} alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h5">{e.judul}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{e.tahun}</CardSubtitle>
                        {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                        <Button type="primary" hhref={url + 'buku/' + e.kd_buku} >Detail</Button>
                        </CardBody>
                    </Card>
                    // </div>
                )
            }else{
             return (
                // <div style={{ width: 240 ,display: 'inline-block',margin:50, boxShadow : "8px 7px 13px 0px #dadada" }}>
                <Card style={{ width: 240 ,display: 'inline-block',margin:50, boxShadow : "8px 7px 13px 0px #dadada", borderRadius: 10 }}>
                    <CardImg  style={{maxHeight: "80%" ,padding: 20, display: "flex", justifyContent: "center"}} src={e.cover} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">{e.judul}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{e.tahun}</CardSubtitle>
                    {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Button type="primary" href={url + 'buku/' + e.kd_buku} >Detail</Button>
                    </CardBody>
                </Card>
                // </div>
              
             )}
         })
            
        return (
            <div >
                { lists }
            </div>
        );
    }
}
        
export default Buku

