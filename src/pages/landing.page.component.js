import React from 'react';
import './landing.page.scss';
import ButtonComponent from '../components/button.component';


class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Andrew'
        }
    }

    onClick = (e) => {
        alert(e.target);
    };


    render() {
        return(
            <div className="landing-page--body dark-theme">
                <div className="themed-content">Weight Loss Application</div>
                <ButtonComponent 
                    text="Weight Loss App" 
                    onClick = {this.onClick}
                    />
            </div>
        );
    }

}

export default LandingPage;