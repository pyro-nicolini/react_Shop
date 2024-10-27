import { Component} from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro.js';

const styles = {
    carro: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        width: '8rem',
        height: '3rem',
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '10px',
        margin: '5px',
        cursor: 'pointer',
        transition: 'transform 0.5s ease',
    },
    bubble: { }
}


class Carro extends Component {
    render(){
        const {carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
            <span style={styles.bubble}>
                {cantidad !== 0? <BubbleAlert value={cantidad} />
                : null}
                
            </span>
                <button onClick={mostrarCarro} style={styles.carro}>Carro</button>
                {esCarroVisible?<DetallesCarro carro={carro}/>: null}
                
            </div>
        )
    }
}

export default Carro;