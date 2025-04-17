import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h2>
            Sobre o Mini <span>Blog</span>
            <p>Este projeto consiste em um blog feito com React no front-end e Firebase no back-end.</p>
            <Link to='/posts/create' className='btn'>Criar Post</Link>
        </h2>
    </div>
  )
}

export default About