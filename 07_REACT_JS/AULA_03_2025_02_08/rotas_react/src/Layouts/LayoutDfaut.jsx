import { Link } from 'react-router-dom'
import Menu from './Menu';
function LayoutDefault(props) {
    return (
        <div className='page' style={{ background: '#CCC' }}>
            {props.nome}
            <Menu />
            {props.children}
        </div>
    )
}

export default LayoutDefault;

<LayoutDefault nome="Teste">
    Outras tags
</LayoutDefault>