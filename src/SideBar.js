import Usuario from './Usuario'
import Sugestoes from './Sugestoes'

export default function SideBar() {
    /*renderização de layout do lado direito do site*/
    return (
        <div className="sidebar">
            <Usuario />
            <Sugestoes />
        </div>
    )
}