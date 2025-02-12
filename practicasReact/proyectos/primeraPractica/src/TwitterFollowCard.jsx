import './TwitterFollowCard.css'

export function TwitterFollowCard ({formatUserName,userName, name, isFollowing }){
    return(
       <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${userName}`} alt="Avatar Chinijo" className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUser'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
       </article>
    )
}