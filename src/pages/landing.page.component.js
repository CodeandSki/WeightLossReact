import React from 'react';
import './landing.page.scss';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Andrew'
        }
    }



    render() {
        return(
            <div className="landing-page--body">Hello</div>
        );
    }

}

export default LandingPage;