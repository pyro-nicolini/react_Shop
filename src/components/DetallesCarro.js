import { Component } from 'react'

const styles = {
    detallesCarro: {
        backgroundColor: 'lightgray',
        position: 'absolute',
        marginTop: '50px',
        boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width:  '280px',
        right: '50px',
    },
    ul: {
        margin: '0',
        padding: '0',
        
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: '1rem 2rem',
        borderTop: '1px solid #aaa',
        width: '220px',

}
}

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props
        console.log(carro)
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x =>
                    <li style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='32' />
                        {x.name} <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
} 

export default DetallesCarro