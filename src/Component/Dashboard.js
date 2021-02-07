import React, { Component } from 'react';
import axios from 'axios';
import Buku from './Part/Buku';
import Navs from './Part/nav';
import './App.css';
import Background from "./assets/images.jpg";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    

    componentDidMount() {

        axios.get('http://localhost:3001/buku')
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

            <>
            <Navs />
            
            
                {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
                <div style={{backgroundImage: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh",
                width: "100%"}}>
                <Buku
                    list={this.state.data}
                />
                </div>
            
            
            </>
        );
    }
}

export default Dashboard;


