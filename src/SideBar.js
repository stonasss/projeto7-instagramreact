import Usuario from './Usuario'
import Sugestoes from './Sugestoes'

export default function SideBar(){
    /*renderização de layout do lado direito do site*/
    return (
        <div class="sidebar">
            <Usuario/>
            <Sugestoes/>
        </div>
    )
}