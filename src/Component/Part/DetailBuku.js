import React from 'react';
import { Descriptions, Button, Image, Row, Col } from 'antd';
import "antd/dist/antd.css";






class DetailBuku extends React.Component {

    render() {
        //const e = this.props.detail
        //console.log(this.props.detail)
        const e = this.props.detail
        return (
            <div>
            <div style={{fontWeight:"bold"}}>
                <h3>Detail Buku</h3>
            </div>
                <Row gutter={16}>
                <Col span={6}>
                    <Image
                    width={300}
                    src={e.cover} 
                    style={{borderRadius: 10}} 
                    />  
                </Col>
                <Col span={6}>
                </Col>
                <Col span={18}>
                <div style={{width: 800 , marginTop: 20}}>
                    <Descriptions title={e.judul} bordered column={{ xs: 2, sm: 2, md: 2 }}>
                    <Descriptions.Item label="ISBN" >{e.isbn}</Descriptions.Item>
                    <Descriptions.Item label="Tahun" >{e.tahun}</Descriptions.Item>
                    <Descriptions.Item label="Penulis">{e.penulis}</Descriptions.Item>
                    <Descriptions.Item label="Kategori" >{e.kategori_buku}</Descriptions.Item>
                    <Descriptions.Item label="Keterangan" span={2}>{e.ket}</Descriptions.Item>
                    </Descriptions>
                    <br />
                    
                    <Button type="primary" href="/Home">&lt; Back Home</Button>
                </div>
                </Col>
                </Row>
            </div>
            
        );
    }
}
        
export default DetailBuku
