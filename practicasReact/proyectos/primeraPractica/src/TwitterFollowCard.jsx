import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard ({formatUserName,userName, children}){
    const [isFollowing, setIsFollowing]= useState(false)
    const handleClick = ()=>{
        setIsFollowing (!isFollowing)
    }

    const followText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    return(
       <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${userName}`} alt="Avatar Chinijo" className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUser'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{followText}</button>
            </aside>
       </article>
    )
}