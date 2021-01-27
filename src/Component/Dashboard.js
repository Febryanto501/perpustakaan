import React, { Component } from 'react';
import axios from 'axios';
import Buku from './Part/Buku';
import Navs from './Part/nav';
import { Card } from 'antd';
import './App.css';

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
            
            <Card 
                style={{ width: '90%', display: 'inline-block', marginLeft: '5%', marginRight: '5%',paddingBottom:100 }}
            >
                {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
                <div>
                <Buku
                    list={this.state.data}
                />
                {/* {allSearchMovieList.map((item) =>
                    <Buku
                    list={this.state.data}
                    />
                )} */}
                </div>
            </Card>
            
            </>
        );
    }
}

export default Dashboard;


