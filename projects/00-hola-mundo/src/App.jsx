import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="duolingo" name="Duolingo"/>
            <TwitterFollowCard userName="LuuiMor" name="Luisa Flores"/>
            <TwitterFollowCard userName="AlertaNews24" name="Alerta News 24"/>
            <TwitterFollowCard userName="Maria" name="Maria"/>
        </section>
    )
}