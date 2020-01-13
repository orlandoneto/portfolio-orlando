import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent';
import axios from 'axios'

class Index extends SuperComponent {
    static async getInitialProps() {
        let data = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            data = response.data
        } catch (error) {
            console.log(error);
        }

        return { teste: 'teste', data }
    }

    constructor(props) {
        super(props)

        this.state = {
            title: 'I am Index Page'
        }

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle = () => {
        this.setState({ title: 'I am update Index Page' })
    }

    render() {
        const { title } = this.state
        const { teste, data } = this.props
        console.log(teste);
        console.log(data);

        console.log('render');
        return (
            <BaseLayout>
                <h1>Page Index</h1>
                <h2>{title}</h2>
                <button onClick={this.updateTitle}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default Index