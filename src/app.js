import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './app.scss';
import { Table } from 'antd';


var data = [];

for (let i=0; i<400; i++) {
    data.push({
        key: i,
        name: 'IronMan' + i,
        age: 32,
        address: '北海区紫陌路' + i + '号'
    });
}

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="block"></div>
                <p className="App-intro">
                  I dream and the world trembles.
                </p>
                <div className="deck"></div>
                <Table dataSource={data} columns={columns} />
            </div>
        );
    }
}

export default App;
