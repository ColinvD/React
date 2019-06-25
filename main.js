import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import DropDown from './DropDown.js';
import OrderList from './OrderList.js';

const Site = () =>
    <div>
      <App/>
      <DropDown/>
      <DropDown/>
      <DropDown/>
      <DropDown/>
      <OrderList/>
</div>;

ReactDOM.render(<Site />, document.getElementById('app'));
