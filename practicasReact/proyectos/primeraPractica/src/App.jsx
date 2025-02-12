import { Fragment } from 'react'
import './App.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const formatUserName = (username) => `@${username}`

    return(
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="Chinijo" name="Raul Ramirez"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="ElonMusk" name="Elon Musk"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="Knekro" name="Sergio"/>
        </section>
    )
}