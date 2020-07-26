import React from 'react';
import './App.css';

class App extends React.Component() {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Tyler Nevell',
            headerLinks: [
                {title: 'Home', path: '/'},
                {title: 'About', path: '/about'},
                {title: 'Contact', path: '/contact'},
            ],
            home: {
                title: 'Iterate, Improve',
                subTitle: 'The Portfolio of Tyler Nevell',
                text: 'Feel free to explore my projects below.'
            },
            about: {
                title: 'About Me'
            },
            contact: {
                title: 'Let\'s Talk'
            }
        }
    }

    render() {
        return (
            <div>Hello from React</div>
        );
    }

}

export default App;
