import React, { Component } from 'react';
import BaseLayout from './layouts/BaseLayout';

export class SuperComponent extends Component {
    constructor(props) {
        super(props)

        this.someVariable = 'Some just variable'
    }

    alertName(title) {
        alert(title)
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am Super Component Page</h1>
            </BaseLayout>
        );
    }
}

export default SuperComponent;
