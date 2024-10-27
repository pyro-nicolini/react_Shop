import { Component} from 'react'

const styles = {
    bubble: {
        backgroundColor: 'red',
        height: '2rem',
        width: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        fontWeight: 'bold',
        position:'relative',
        top: '70px',
        left: '-5px',
        borderRadius: '50%',
        color: 'white',
    },
}

class BubbleAlert extends Component {
    getNumber(n) {
        if(!n) {return ''}
        return n>9 ? '9+' : n
    }

    render() {
        const {value} = this.props
        return (
            <span style={styles.bubble}>
            {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert