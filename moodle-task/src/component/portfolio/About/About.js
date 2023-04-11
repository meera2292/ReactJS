
import React from "react";
import '../About/About.css';
import '../About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

// import fifty from '../About/50-percents.png';
// import eighty from '../About/icons8-80.png';
// import seventy from '../About/icons8-70.png';
// import ninty from '../About/icons8-90.png';
// import sixty from '../About/icons8-60.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBus, faHouse, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

export function About(){

    return(

        <>
        <div class="container-fluid  col-lg-12 d-flex cdivabt bg-light  mx-auto">
        <div class="col-lg-12 row  mx-auto">
       
            <div class="col-lg-1">
            
            </div>
            <div class="col-lg-10 container-fluid  rounded-3 py-5">
            <p class="justify-content-center text-black fw-bold fs-1 headp">About me</p>
            <br></br>
            <div class="row">
                    <div class="col-lg-6 container-fluid text-black">
                  
                        <p class="justify-content-center text-black fs-6 mainp ">My aim is to secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
                        Currently I'm working to secure employment with a reputable company, where I can utilize my skills and business studies background to the maximum.
                        </p>
                        <p class="justify-content-center text-black fw-bold fs-6 mainp">Skills</p>
                        <ul type="disc" class="justify-content-center text-white ">
                            <li class="mainp text-warning">Positive Attitude</li>
                            <li class="mainp text-warning">Adaptable</li>
                            <li class="mainp text-warning">Self Motivated</li>
                           
                        </ul>
                    </div>

                    <div class="col-lg-6 container-fluid ">
                    <p class="justify-content-center text-black fw-bold fs-5">Things I love the most</p>
                    <p class="text-info mainp"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon>&nbsp;I love reading.It helps us to think alot and gain knowledge</p>
                    <p class="text-info mainp"><FontAwesomeIcon icon={faBus}></FontAwesomeIcon>&nbsp;Travelling is interesting and we will come to know world is beautiful</p>
                    <p class="text-info mainp"><FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>&nbsp;Painting refreshes our mind, to learn about colors and their role is curious</p>
                    <p class="text-info mainp"><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>&nbsp;I like flowers and plants .I spend time in gardening</p>
                    </div>

            </div>
            
            <p class="justify-content-center text-black fw-bold fs-3 headp m-2">Ethics of Artificial Intelligence</p>

            <p class="justify-content-center text-secondary descethics m-3"><span class="text-danger">*</span>Latest news snippet that took my thought process to another level</p>
            <div class="text-black container-fluid  col-lg-12 row justify-content-center">
                
                <div class="col-lg-6">
                
                <p class="justify-content-center text-info fs-6 mainp ">Ethics generally refers to the moral behavior of a person to conduct different activities of life. In the same way, Ethics in Artificial Intelligence refers to the activities of AI systems and robots. Our lives are surrounded by AI-based soft-wares, e.g., Google’s search engine, Alexa different recommendations on Youtube Netflix, self-driving cars, and facial recognition systems.</p>
               <p class="justify-content-center text-info fs-6 mainp ">We’re advancing rapidly, and even we are able to create systems that show human-like results, now the question is how to define human-like? Human decisions can be influenced and can be manipulated, right? Here we face the hurdle, how can one trust these AI systems to be fair?</p>
               <p class="justify-content-center text-black fw-bold fs-6 mainp">To explain ethics, we need to consider these situations where artificial intelligence could be unethical.</p>
                        <ul type="disc" class="justify-content-center text-white ">
                            <li class="mainp text-success">To Deal with Unemployment, when AI takes away jobs.</li>
                            <li class="mainp text-success">Inequality in wealth creation: AI machine owners vs others</li>
                            <li class="mainp text-success">AI mistakes and stupidity</li>
                            <li class="mainp text-success">Security concerns/ privacy of individual</li>
                           
                        </ul>
                </div>

                <div class="col-lg-6">
                    <iframe class="cbot col-lg-12" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/8943b7f7-0aef-4a3c-9480-9de0a209df03"></iframe>
                    
                </div>
            </div>
           
{/* 
        <div class="row mt-5">
				
				<div class="col-md-3 col-sm-6">
				
					<div class="fact-item ">
						<div class="details text-center">
							<h3 class="mb-0 mt-0 number "> <img src={eighty} alt="" className=" bg-white rounded-circle evalimg" height="50px" width="50px"></img></h3>
							<p class="mb-0 text-light">Leadership<span>&nbsp;80%</span></p>
						</div>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30" ></div>
				</div>

				<div class="col-md-3 col-sm-6">
					
					<div class="fact-item">
						<div class="details text-center">
                        <h3 class="mb-0 mt-0 number"> <img src={ninty} alt="" className=" bg-white  rounded-circle evalimg" height="50px" width="50px"></img></h3>
							<p class="mb-0 text-white text-center">Time Management<span>&nbsp; 90%</span></p>
						</div>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30" ></div>
				</div>

				<div class="col-md-3 col-sm-6">
					
					<div class="fact-item">
						<div class="details text-center">
                        <h3 class="mb-0 mt-0 number"> <img src={sixty} alt="" className=" bg-white rounded-circle evalimg" height="50px" width="50px"></img></h3>
							<p class="mb-0 text-white text-center">Confidence<span>&nbsp;60%</span></p>
						</div>
					</div>
					<div class="spacer d-md-none d-lg-none" data-height="30"></div>
				</div>

				<div class="col-md-3 col-sm-6">
					
					<div class="fact-item">
						<div class="details text-center">
                        <h3 class="mb-0 mt-0 number"> <img src={seventy} alt="" className=" bg-white rounded-circle evalimg" height="50px" width="50px"></img></h3>
							<p class="mb-0 text-white text-center">Logical Thinking<span>&nbsp;70%</span></p>
						</div>
					</div>
				</div>
               

		</div> */}

            </div>

            <div class="col-lg-1">
            
           </div>
            
              
        </div>
      
        </div>
   
       
        
        </>
    );
}