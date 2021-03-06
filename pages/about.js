import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
    render() {       
        const { user, isAuthenticated } = this.props.auth
        return (    
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage className='about-page' title='I am About Page'>
                    
                </BasePage>
            </BaseLayout>
        )
    }
}

export default About