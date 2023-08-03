/* eslint-disable react/jsx-key */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName:"duolingo",
        name:"Duolingo",
        iSFollowing: true
    },
    {
        userName:"LuuiMor",
        name:"Luisa Flores",
        iSFollowing: true
    },
    {
        userName:"AlertaNews24",
        name:"Alerta News 24",
        iSFollowing: false
    },
    {
        userName:"Maria",
        name:"Maria",
        iSFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
           {
            users.map(({ userName, name, iSFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={iSFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
            ))
           }
        </section>
    )
}