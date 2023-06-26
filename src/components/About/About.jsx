import React from 'react'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

const About = () => {
        const {  } = useGlobalContext()

  return (
    <section className='about'>

    <div className="location">
   <h1><Link to='/'>Home</Link><span>/About</span></h1> 
    </div>
    
    <main className='about-container'>
      <img src="https://www.designboom.com/wp-content/uploads/2021/04/free-interactive-software-easily-complex-japanese-wooden-joints-furniture-designboom-818.jpg" alt="About image" />
      <div className="about__info">

        <article className="about__info-story">
          <h2>Story</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quam quo assumenda soluta eius nesciunt delectus vitae esse exercitationem iste! Fugiat qui quibusdam sed dolorum voluptatibus, inventore amet blanditiis aut corporis sapiente maxime accusamus ea porro cumque provident earum dolore laborum! Aut magnam odit quas nihil doloribus laudantium quod hic.</p>
        </article>

        <div className="about__info-cards">
          <article className="about__info-card">
          <h5>Employees</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure pariatur! Soluta accusamus quasi dolor dolore ratione, minus possimus sapiente!</p>
        </article>
        <article className="about__info-card">
        <h5>Services</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure pariatur! Soluta accusamus quasi dolor dolore ratione, minus possimus sapiente!</p>
        </article>
        </div>
        
      </div>
    </main>

    </section>
  )
}

export default About