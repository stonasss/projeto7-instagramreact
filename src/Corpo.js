import Stories from './Stories'
import Posts from './Posts'
import SideBar from './SideBar'

export default function Corpo() {
    /*renderização do layout do corpo da página*/
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories/>
                <Posts/>
            </div>
                <SideBar/>
        </div>
    )
}