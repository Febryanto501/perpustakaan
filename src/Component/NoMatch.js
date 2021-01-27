import React from 'react';
import './App.css';
import { Result, Button } from 'antd';

function NoMatch() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" href="/Dashboard">Back Home</Button>}
    />
  );
}

export default NoMatch;
