import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
// import FontAwesome from 'react-fontawesome';
import { Image} from 'antd';
// import Pagination from "../components/Pagination";





class DetailBuku extends React.Component {

    render() {
        //const url = 'http://localhost:3000/'
        //const e = this.props.detail
        //console.log(this.props.detail)
        // const detail = this.props.list.map((e, i) => {
        //      return (
        //          <tr key={i}>
        //              <td>{i+1}</td>
        //              <td>{e.kd_buku}</td>
        //              <td>{e.judul}</td>
        //              <td>{e.isbn}</td>
        //              <td>{e.penulis}</td>
        //              <td>{e.tahun}</td>
        //              <td>
        //                 <Button color="success" size='xxl' href={url + 'edit/' + e.kd_buku} ><FontAwesome name='edit' />Edit</Button>{' '}
        //                 <Button color="danger" size='xxl' key={e.kd_buku} onClick={() => this.setState({ kd_buku: e.kd_buku }, this.toggle)} ><FontAwesome name='trash' />Hapus</Button> 
        //             </td>
        //          </tr>
        //      )
        //  })
        return (
            
            <Row>
            <Col>
                <Image
                width={300}
                src={this.props.detail.cover}
                />
                <br />
                <br />
                <br />
                <Button type="primary" href="/Dashboard">&lt; Back Home</Button>
            </Col>
            <Col span={18}>
                {/* <Descriptions title={this.props.detail.judul} bordered column={{ xs: 2, sm: 2, md: 2 }}>
                <Descriptions.Item label="ISBN">{this.props.detail.isbn}</Descriptions.Item>
                <Descriptions.Item label="Runtime" >{detailMovie.Runtime}</Descriptions.Item>
                <Descriptions.Item label="Production">{detailMovie.Production}</Descriptions.Item>
                <Descriptions.Item label="Released">{detailMovie.Released}</Descriptions.Item>
                <Descriptions.Item label="Actors" span={2}>{detailMovie.Actors}</Descriptions.Item>
                <Descriptions.Item label="Director" span={2}>{detailMovie.Director}</Descriptions.Item>
                <Descriptions.Item label="Writer" span={2}>{detailMovie.Writer}</Descriptions.Item>
                <Descriptions.Item label="Plot" span={2}>{detailMovie.Plot}</Descriptions.Item>
                <Descriptions.Item label="Awards" span={2}>{detailMovie.Awards}</Descriptions.Item>
                </Descriptions> */}
            </Col>
            </Row>
            
        );
    }
}
        
export default DetailBuku
