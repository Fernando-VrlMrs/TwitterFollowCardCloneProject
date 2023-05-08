import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'reytachala',
        name: 'Tachala',
        isFollowing: false,
    },
    {
        userName: 'ironman',
        name: 'Toni Stark',
        isFollowing: true,
    }
]

// En el Key se recomienda usar la id de la base de datos
export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}