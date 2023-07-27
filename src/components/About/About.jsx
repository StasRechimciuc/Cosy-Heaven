import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import img1 from '../../assets/about1.jpg' 
import img2 from '../../assets/about2.jpg' 
import img3 from '../../assets/employees.jpg' 

const About = () => {
        const { 
          windowWidth
         } = useGlobalContext()

  return (
    <section className='about'>

    <div className="location">
   <h1><Link to='/'>Home</Link><span>/About</span></h1> 
    </div>
    
    <main className='about-container'>
      <article className="about-article">
        <img src={img1} alt="image" className='about-article__img'/>
        <div className="about-article__info">
          <h3 className="about-article__title">Who we are</h3>
          <p className="about-article__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.possimus. Voluptatibus sunt ducimus odio officiis eveniet voluptatum omnis iure veniam saepeVero adipisci repellendus exercitationem architecto nam tempora sint incidunt temporibus possimus. Voluptatibus sunt ducimus odio officiis eveniet voluptatum!</p>
        </div>
      </article>

      {windowWidth > 667 &&<span className='about-line'></span>}
      {windowWidth > 667 ? <article className="about-article">
        <div className="about-article__info">
          <h3 className="about-article__title">What are we doing</h3>
          <p className="about-article__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero adipisci repellendus nt tempociis eveniet voluptatum omnis iure veniam saepe!Vero adipisci repellendus exercitationem architecto nam tempora sint incidunt temporibus possimus. Voluptatibus sunt ducimus odio officiis eveniet voluptatum</p>
        </div>
        <img src={img2} alt="image" className='about-article__img'/>
      </article> : 
      <article className="about-article">
      <img src={img2} alt="image" className='about-article__img'/>
      <div className="about-article__info">
        <h3 className="about-article__title">What are we doing</h3>
        <p className="about-article__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero adipisci repellendus nt tempociis eveniet voluptatum omnis iure veniam saepe!Vero adipisci repellendus exercitationem architecto nam tempora sint incidunt temporibus possimus. Voluptatibus sunt ducimus odio officiis eveniet voluptatum</p>
      </div>
    </article>
      }

      {windowWidth > 667 &&<span className='about-line'></span>}
      <article className="about-article">
        <img src={img3} alt="image" className='about-article__img'/>
        <div className="about-article__info">
          <h3 className="about-article__title">Our employees</h3>
          <p className="about-article__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.possimus. Voluptatibus sunt ducimus odio officiis eveniet voluptatum omnis iure veniam saepeVero adipisci repellendus exercitationem architecto nam tempora sint incidunt temporibus possimus. Voluptatibus sunt ducimus odio officiis eveniet voluptatum!</p>
        </div>
      </article>
    </main>

    </section>
  )
}

export default About