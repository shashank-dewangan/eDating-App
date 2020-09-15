import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import instance from './Axios'
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await instance.get('/edating/cards')
            console.log('res', res)
            setPeople(res.data)
        }
        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('swiped', nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log('left', name)
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person =>
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url("${person.imgUrl}")` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                        {/* <img src={`${person.url}`} alt="" /> */}

                    </TinderCard>)}
            </div>


        </div>
    )
}

export default TinderCards
