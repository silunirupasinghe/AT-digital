import React from 'react'
import NavBar from './NavBar';
import { FrequentlyAsk } from './FrequentlyAsk';
import Footer from './Footer';
import mainImg1 from '../asserts/mainImg1.png';
import mainImg2 from '../asserts/mainImg2.png'
import image2 from '../asserts/image2.png'
import image1 from '../asserts/image1.png'
import '../CSS/main.css';
const Home= ()=>{

    return (
        <div className="home-container">
            <NavBar/>
            <div className='heroSection'>
            <div className="homeImg2-container">
                <div className='homeIma2-container2' >
                    <img className="homeImg2" src={mainImg2} alt="Main Image 2" />
                    <button className='button_main'>GET FREE CONSULTATION</button>
             </div>
            </div>
            </div>

            <div className='container2'> 
                <div className='position-relative frame499'>
                    <div className='image2-container'>
                    <img className="image2" src={image2} alt="Main Image 2" />
                    </div>
                    <div className='frame92 align-middle'>
                        <div>
                            <div className='main_topic1'>
                            Web & Mobile App Development
                            </div>

                        </div>
                        <div className='para1'>
                        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                        </div>
                        <button className='button_main'>LEARN MORE</button>
                    </div>
                    

                </div>
            </div>

            <div className='container2 '> 
                <div className='position-relative frame499'>
                    <div className='frame92 align-middle'>
                        <div>
                            <div className='main_topic1'>
                            Digital Strategy Consulting
                            </div>

                        </div>
                        <div className='para1'>
                        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                        </div>
                        <button className='button_main'>LEARN MORE</button>
                    </div>
                    <div className='image2-container'>
                    <img className="image1" src={image1} alt="Main Image 2" />
                    </div>

                </div>
            </div>

            <div className='container2'>
                <div className='position-relative frame499'>
                    <div className=' main_topic1 frame12527'>
                    Frequently asked questions
                    </div>
                    <div className='frame12527'>
                        <div className='questions'>
                        
                        </div>

                    </div>
                </div>
            </div>
                

        <Footer/>
        </div>

    )
}
export default Home;

