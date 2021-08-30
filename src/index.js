import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/reset.scss';
import './styles/common.scss';
import ProductList from './pages/ProductList/ProductList';

ReactDOM.render(<ProductList />, document.getElementById('root'));
