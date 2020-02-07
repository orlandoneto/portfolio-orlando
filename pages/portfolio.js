import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import { withRouter } from 'next/router'

class Portfolio extends React.Component {

    static async getInitialProps({ query }) {
        let post = {};
        const postId = query.id
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${postId}`);
            post = response.data
        } catch (error) {
            console.log(error);
        }

        return { post }
    }

    render() {
        const { post, user, isAuthenticated } = this.props.auth
        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage>
                    <h1>{post.title}</h1>
                    <h2>{post.body}</h2>
                    <p>{post.id}</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)