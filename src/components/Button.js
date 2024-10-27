import { Component } from 'react'

const styles = {
    button: {
      backgroundColor: 'rgba(0, 0, 50, 0.7)',
      color: '#fff',
      padding: '15px 20px',
      borderRadius: '10px',
      cursor: 'pointer',
      outline: 'none',
      border: 'none',
      fontSize: '1rem',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/>
        )
    }}

export default Button