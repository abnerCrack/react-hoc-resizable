import React from 'react';
import {render} from 'react-dom';
import ReactComponentTemplate from '../src';

function start() {
    render(<ReactComponentTemplate />, document.getElementById('app'));
}

start();

if(module.hot) start();

