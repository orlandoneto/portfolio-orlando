import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
    render() {
        debugger        
        return (    
            <BaseLayout {...this.props}>
                <BasePage className='about-page'>
                    <h1>Page About</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default About