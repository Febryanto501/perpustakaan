import React from 'react';
import { Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from './Modal';
import {Tag , Button} from 'antd';
//import { PlusOutlined } from "@ant-design/icons";
//import "antd/dist/antd.css";





class ListBuku extends React.Component {
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
        const lists = this.props.list.map((e, i) => {
            if(e.status_buku === 0){
                let status = "Tersedia"
                return (
                    
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.kd_buku}</td>
                        <td>{e.judul}</td>
                        <td>{e.isbn}</td>
                        <td>{e.penulis}</td>
                        <td >{e.tahun}</td>
                        <td><Tag color="success">{status}</Tag></td>
                        <td>
                           <Button type="primary" size='xxl' href={url + 'edit/' + e.kd_buku} ><FontAwesome name='edit' />Edit</Button>{' '}
                           <Button type="danger" size='xxl' key={e.kd_buku} onClick={() => this.setState({ kd_buku: e.kd_buku }, this.toggle)} ><FontAwesome name='trash' />Delete</Button> 
                       </td>
                    </tr>
                )
                
            }else{
                let status = "Tidak Tersedia"
                return (
                    
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e.kd_buku}</td>
                        <td>{e.judul}</td>
                        <td>{e.isbn}</td>
                        <td>{e.penulis}</td>
                        <td>{e.tahun}</td>
                        <td ><Tag color="error">{status}</Tag></td>
                        <td>
                           <Button type="primary" size='xxl' href={url + 'Edit/' + e.kd_buku}  ><FontAwesome name='edit' />Edit</Button>{' '}
                           <Button type="danger" size='xxl' key={e.kd_buku} onClick={() => this.setState({ kd_buku: e.kd_buku }, this.toggle)} ><FontAwesome name='trash' />Delete</Button> 
                       </td>
                    </tr>
                )
                
            }
            
         })
        return (
            <div style={{ width: 1000, height: "auto",padding: 20,backgroundColor:"white",borderRadius: 10,marginLeft: -100}}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start'}}>
                <h3>List Buku</h3>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Button type="primary" size='xxl' href="/Add" style={{ background: "#21cc02"}}><FontAwesome name='add' />Add</Button>{' '}
                </div>
                <br></br>
                <Modals
                    modal={this.state.modal}
                    toggle={this.toggle}
                    kd_buku={this.state.kd_buku}
                />
                
                <Table striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>KD Buku</th>
                            <th>Judul</th>
                            <th>ISBN</th>
                            <th>Penulis</th>
                            <th>Tahun</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
export default ListBuku
