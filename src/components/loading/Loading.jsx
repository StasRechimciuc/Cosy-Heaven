import React from 'react'

const Loading = () => {
  return (
    <section className='loading'>
        <h1>Loading Page
            <span className="loading-span" data-delay="1">.</span>
            <span className="loading-span" data-delay="2">.</span>
            <span className="loading-span" data-delay="3">.</span>
        </h1>
        <div className="boxes">
            <div className="loading-box"></div>
            <div className="loading-box2"></div>
        </div>
    </section>
  )
}

export default Loading