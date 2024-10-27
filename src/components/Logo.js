import { Component } from 'react';

const styles = {
    logo: {
        height: '6rem',
        padding: '1rem 0',
        width: 'auto',
    }
}

class Logo extends Component {
    state = {
        logo: [
            { img: '/logo/logo.png' },
        ]
    }

    render() {
        return (
            <div>
                <img style={styles.logo} alt="Company Logo" src={this.state.logo[0].img} />
            </div>
        );
    }
}

export default Logo;
