import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import axios from 'axios'
import { Link } from '../routes'

class Portfolios extends React.Component {
    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data
        } catch (error) {
            console.log(error);
        }

        return { posts: posts.splice(0, 10) }
    }

    renderPosts(posts) {
        return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link route={`/portfolio/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props
        return (
            <BaseLayout {...this.props}>
                <BasePage>
                    <h1>Page Portfolio</h1>
                    <ul>
                        {this.renderPosts(posts)}
                    </ul>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios