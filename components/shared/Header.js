import React, { Children } from 'react'
import Link from 'next/link'
import { Link as NextLink } from '../../routes'

class Header extends React.Component {
    render() {
        const { title, children } = this.props
        return (
            <React.Fragment>
                <h1>{title}</h1>
                {children}
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/portfolios'><a>Portfolio</a></Link>
                <Link href='/blogs'><a>Blogs</a></Link>
                <Link href='/cv'><a>Cv</a></Link>
                <NextLink route='test' params={{ id: '2' }}>Test 2</NextLink>
                <NextLink route='test' params={{ id: '5' }} > Test 5</NextLink>
            <style jsx>
                {`
                        a {
                            font-size: 20px;
                        }                          
                    `}
            </style>
            </React.Fragment >
        )
    }
}

export default Header