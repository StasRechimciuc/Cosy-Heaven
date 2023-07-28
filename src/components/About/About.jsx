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
      <img src={img2} alt="About us image" className='about-img'/>
      <div className="about-info">
        <h2 className='about-info__h2'>About us</h2>
        <hr />
        <p className='about-info__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum iusto porro, voluptatem eum eius obcaecati ratione rerum id consequuntur repellendus accusamus vitae unde sequi dolor officiis, illo qui mollitia! Sequi deleniti porro veritatis, quo non voluptatibus aliquid maxime dolor aut deserunt aspernatur incidunt ipsa laborum omnis nihil quas cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum iusto porro, voluptatem eum eius obcaecati ratione rerum id consequuntur repellendus accusamus vitae unde sequi dolor officiis, illo qui mollitia! Sequi deleniti porro veritatis, quo non voluptatibus aliquid maxime dolor aut deserunt aspernatur incidunt ipsa laborum omnis nihil quas cupiditate!</p>
      </div>
    </main>

    </section>
  )
}

export default About