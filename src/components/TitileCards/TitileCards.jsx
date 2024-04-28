import React, { forwardRef, useEffect, useRef } from 'react'
import './TitileCards.css'
import Cards_data from '../../assets/cards/Cards_data'

const TitileCards = ({title, category}) => {

  // Card will not scroll when page scrolls
  const cardsRef = useRef();
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handleWheel)
  },[])
  // Card will not scroll when page scrolls


  return (
    <div className='titileCards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {Cards_data.map((card, index)=>{
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitileCards