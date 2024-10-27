import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        position: 'relative',
        padding: '0 5rem',
        margin: 'auto',
        boxShadow: '0 1px 10px 2px rgba(0,0,0,0.5)',
        height: '7rem',
    }
};

class Navbar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;
        
        return (
            <nav style={styles.navbar}>
                <Logo />
                <Carro 
                    carro={carro} 
                    esCarroVisible={esCarroVisible} 
                    mostrarCarro={mostrarCarro} 
                />
            </nav>
        );
    }
}

export default Navbar;
