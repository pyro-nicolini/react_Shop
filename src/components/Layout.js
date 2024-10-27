import { Component} from 'react'

const styles = {
    layout: {
        background: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    conteiner: {
        width: '1200px',

    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                 <div style={styles.conteiner}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout