// chat
import NavBar from "../components/NavBar"
import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import ChatContainer from '../components/ChatContainer'




const Dashboard = () => {
    const characters = [
        {
            name: 'Richard Hendricks',
            url: 'https://picsum.photos/500/1101'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://picsum.photos/500/1102'
        },
        {
            name: 'Monica Hall',
            url: 'https://picsum.photos/500/1103'
        },
        {
            name: 'Jared Dunn',
            url: 'https://picsum.photos/500/1104'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://picsum.photos/500/1105'
        }
    ]

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div>
            <div className="dashboard">
            {/* <NavBar /> */}
            <ChatContainer />
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                        <TinderCard
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
                                className='card'
                            >
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    
                    <div className='swipe-info'>
                        {lastDirection ? <h3>You swiped {lastDirection}</h3> : <h3/>}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Dashboard