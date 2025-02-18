
import './App.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const formatUserName = (username) => `@${username}`

    return(
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} userName="Chinijo" >
                Raul Ramirez
            </TwitterFollowCard>
            
            <TwitterFollowCard formatUserName={formatUserName} userName="ElonMusk">
                Elon Musk
            </TwitterFollowCard>
            
            <TwitterFollowCard formatUserName={formatUserName} userName="Knekro">
                Sergio
            </TwitterFollowCard>
            
        </section>
    )
}