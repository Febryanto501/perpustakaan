import React from 'react';
//import { Button, Row, Col } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';
import { Descriptions, Button, Image, Row, Col } from 'antd';
import "antd/dist/antd.css";
// import Pagination from "../components/Pagination";





class DetailBuku extends React.Component {

    render() {
        //const url = 'http://localhost:3000/'
        //const e = this.props.detail
        // /console.log(this.props.detail)
        const detail = this.props.detail.map((e, i) => {
             return (
                 <div style={{marginLeft: -600}}>
                <Row style={{padding: 50}} gutter={16}>
                <Col span={6}>
                    <Image
                    width={300}
                    src={e.cover}  
                    />  
                </Col>
                <Col span={18}>
                <div style={{width: 1000 ,marginLeft: 50}}>
                    <Descriptions title={e.judul} bordered column={{ xs: 2, sm: 2, md: 2 }}>
                    <Descriptions.Item label="ISBN" >{e.isbn}</Descriptions.Item>
                    <Descriptions.Item label="Tahun" >{e.tahun}</Descriptions.Item>
                    <Descriptions.Item label="Penulis">{e.penulis}</Descriptions.Item>
                    <Descriptions.Item label="Kategori" >{e.kategori_buku}</Descriptions.Item>
                    <Descriptions.Item label="Keterangan" span={2}>{e.ket}</Descriptions.Item>
                    {/* <Descriptions.Item label="Director" span={2}>{e.kategori_buku}</Descriptions.Item>
                    <Descriptions.Item label="Writer" span={2}>{e.kategori_buku}</Descriptions.Item>
                    <Descriptions.Item label="Plot" span={2}>{e.kategori_buku}</Descriptions.Item>
                    <Descriptions.Item label="Awards" span={2}>{e.kategori_buku}</Descriptions.Item> */}
                    </Descriptions>
                    <br />
                    
                    <Button type="primary" href="/Dashboard">&lt; Back Dashboard</Button>
                </div>
                </Col>
                </Row>
                </div>
             )
         })
        return (
            <div >
                { detail }
            </div>  
        );
    }
}
        
export default DetailBuku
