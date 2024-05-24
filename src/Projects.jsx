import React, { useEffect } from 'react'
import './ProjectCss.css';
import { FaSquareArrowUpRight } from "react-icons/fa6";
import skillacademy from './Images/skillacademy2.png';
import blog from './Images/pngwing.png';
import todolist1 from './Images/todolist1.png';
import tictactoe from './Images/tictactoe.png';
import chatapp from './Images/chatapp.png';
import ScrollReveal from 'scrollreveal'


const Projects = () => {

    useEffect(()=>{

        ScrollReveal({
           distance:'80px',
           duration:2000,
           delay:200,
          });
    
          
          ScrollReveal().reveal('.portfolio',{origin:'top'})
      },[]);


  return (
    <div >
    <section className='portfolio' id='portfolio'>

        <h2 className='heading'>Latest <span>Projects</span></h2>

        <div className='portfolio-container'>

            <div className='portfolio-box'>
                <img src={skillacademy} alt="Project Img"/>
                <div className='portfolio-layer'>
                    <h4>Skill Academy</h4>
                    <p>Skill Academy is an online learning platform that offers various functionalities. Administrators can add courses, view course sales charts, track student progress, and more. Students can purchase courses, obtain certificates upon completion, and track their course progress</p>
                
                    <a href='https://drive.google.com/file/d/1tnuOFPmGax02kjpf1qKg-IwaMJSMMtpP/view?usp=drivesdk'><FaSquareArrowUpRight /></a>
                </div>
            </div>

            <div className='portfolio-box'>
                <img src={blog} alt="Project Img"/>
                <div className='portfolio-layer'>
                    <h4>Blog Application</h4>
                    <p>Welcome to our Blogging Application, where you have full control over your content. Create, update, and delete your blogs with ease. Engage with other users by liking their posts and exploring a variety of blogs. With our intuitive pagination feature, conveniently navigate through articles, displaying five blogs per page. Start sharing your stories and discovering new ones today!</p>
                
                    <a href='www.google.com'><FaSquareArrowUpRight /></a>
                </div>
            </div>


            <div className='portfolio-box'>
                <img src={todolist1} alt="Project Img"/>
                <div className='portfolio-layer'>
                    <h4>TO-DO List</h4>
                    <p>Manage your tasks effortlessly with our To-Do List web app. Add, remove, and mark items as done. Plus, toggle between light and dark themes for a personalized experience</p>
                
                    <a href='https://drive.google.com/file/d/1pfw65Ad5lEXO1pTe2v4jgyL9WR9iQFst/view?usp=drive_link'><FaSquareArrowUpRight /></a>
                </div>
            </div>

            <div className='portfolio-box'>
            <img src={tictactoe} alt="Project Img"/>
                <div className='portfolio-layer'>
                    <h4>TIC-TAC-TOE</h4>
                    <p>Experience the classic fun of Tic Tac Toe with our interactive game! Play against a friend or challenge the computer. Enjoy the convenience of restarting the game at any time for endless entertainment. Plus, stay updated with the winner announcement displayed conveniently at the bottom of the board. Start playing now and see if you can outsmart your opponent!</p>
                   
                    <a href=' https://tic-tac-toii.netlify.app'><FaSquareArrowUpRight /></a>
                    {/* https://drive.google.com/file/d/1qfYEmxO8MMQihzY5-7Db-v4E5XRpWhbn/view?usp=drive_link */}
                </div>
            </div>

            <div className='portfolio-box'>
            <img src={chatapp} alt="Project Img"/>
                <div className='portfolio-layer'>
                    <h4>Chat Application</h4>
                    <p>2 Person can chat with each other , but as of now i perform only in 2 different Pc by, adding their Ip address & chat with each Other.</p>
                
                    <a href='https://drive.google.com/file/d/1A2KCfmzZxT4dqNvGRkCChAm8zB1d0neh/view?usp=drive_link'><FaSquareArrowUpRight /></a>
                </div>
            </div>

            {/* <div className='portfolio-box'>
            <img src={img3} alt="Project Img"/>
                <div className='portfolio-layer'>
                    <h4>Web-Design</h4>
                    <p>bjkffbdj  dbfbs fbsdjfs jbsdfsdjf jbdsfjsf kjfsbjksf jfbjksfb fjrsbjksf s nfnjfd fnbkjdfb brjkfd jbdf  
                    vjkbfsv vbfvbdf kjbvskv  jksbvkdfbhfv hrbk rhkb rbdk</p>
                
                    <a href=''><FaSquareArrowUpRight /></a>
                </div>
            </div> */}

           

        </div>
    </section>

    </div>
  )
}

export default Projects
