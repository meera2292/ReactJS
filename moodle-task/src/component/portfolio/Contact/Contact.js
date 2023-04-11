
import React from "react";
import '../Contact/Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook,faEnvelopeCircleCheck} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import resume from '../Contact/MeeraAntonyUpdatedResume.pdf';


export function Contact(){

    return(

        <>
        <div class="col-lg-12 container-fluid border border-light  mx-auto">
       
            <div class="col-lg-12 container-fluid bg-light rounded-3 py-5  mx-auto">
                    
            <div class="container-fluid row"> 
            
            <div class="col-lg-6 container-fluid"><p class="justify-content-center text-warning fw-bold fs-1 headpcc">Reach Out To me!</p></div>
            <div class="col-lg-6 container-fluid ms-6 float-right">
                <p class="justify-content-center text-secondary fw-bold fs-12">mailme:&nbsp;<span class="text-primary headpc">meeracrazy@gmail.com</span></p>
                <p class="justify-content-center text-secondary fw-bold fs-6">contactme:&nbsp;<span class="text-primary headpc">0909090909</span></p>
                <p class="justify-content-center text-secondary fw-bold fs-6">address:&nbsp;<span class="text-primary headpc">Oak,Saravanampatty,Coimbatore</span></p>
             
            </div>
           
            </div>
            
                    <div class="col-lg-6 row py-5">
                    <div class="col-lg-2 py-5">
                        
                        <div ><a href="https://www.facebook.com/meera.antony.50" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}  class="col-lg-2 col-3 col-md-2 rounded-circle evalimgc"/></a> </div>
                        <div ><a href="www.linkedin.com/in/meera-antony-905ab0164" target="_blank"><FontAwesomeIcon icon={faTwitter} class="col-lg-2 col-3 col-md-2 evalimgc"/></a> </div>
                        <div><a href="www.linkedin.com/in/meera-antony-905ab0164" target="_blank"><FontAwesomeIcon icon={faInstagram} class="col-lg-2 col-3 col-md-2 evalimgc"/></a> </div>
                        <div ><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelopeCircleCheck} class="col-lg-2 col-3 col-md-2 evalimgc"/> </a></div>
                        <div><a href="https://www.linkedin.com/in/meera-antony-905ab0164/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} class="col-lg-2 col-3 col-md-2 evalimgc" /> </a></div>
                        <div><a href="https://github.com/meera2292" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} class="col-lg-2 col-3 col-md-2 evalimgc"/></a> </div>
                    
                       
                    </div>  
                    <div class="col-lg-10">
                    <form class="row g-3">
                                                <div class="col-md-6">
                                                    <label for="inputEmail4" class="form-label text-success">Email</label>
                                                    <input type="email" class="form-control" id="inputEmail4" placeholder="@gmail.com" required/>
                                                </div>
                                                
                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label text-success">Message</label>
                                                    <input type="textarea" class="form-control" id="inputAddress" placeholder="Please share you message here" required/>
                                                </div>
                                              
                                                
                                             
                                               
                                               
                                                <div class="col-12">
                                                    <button type="submit" class="btn btn-primary col-3">Send</button>&nbsp;
                                                    <button type="button" class="btn btn-secondary col-4"><a href={resume} target="_blank" rel="noreferrer" class="anstyle">Download Resume</a></button>&nbsp;
                                                    <button type="button" class="btn btn-warning col-4"><a href="https://bot.dialogflow.com/8943b7f7-0aef-4a3c-9480-9de0a209df03" target="_blank" rel="noreferrer" class="anstyle">Know more about me</a></button>
                                                </div>
                    </form>
                    </div>
                    
                    </div>
          
                   
            </div>
        </div>

            

           
       
   
       
        
        </>
    );
}