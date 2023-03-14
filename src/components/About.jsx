import React from 'react'
import about from '../assets/about.png'

export default function About(){
    return (
        <div className="about">
            <img src={about} alt="about" />
            <div className="about-text">
            <h1>Don't squeeze in a sedan when you can relax in a van.</h1>
             <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>

                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels. 

            <section>
            Your destination is waiting.<br/> Your van is ready.
                <button>Explore our vans</button>
            </section>
            </div>
        </div>
    )
}