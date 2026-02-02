//approch
// mount function to start an app

//if we are in developemnt and in isolation
//call mount immediately

// we are running through container
// so we should export the mount function

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (el) => {
    ReactDOM.render(<App/>,el
    )
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
