
import React from "react";
import '../Skills/Skills.css';
import '../Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import htmls from '../Skills/html.webp';
import javascrpt from '../Skills/js.jpeg';
import dotnet from '../Skills/dotnet.jpeg';
import reacts from '../Skills/react.png';
import nodes from '../Skills/node.png';
import mysqls from '../Skills/mysql.png';
import css from '../Skills/css.png';
import java from '../Skills/java.png';
import spring from '../Skills/spring.webp';
import mongo from '../Skills/MongoDB.jpg';





export function Skills(){

    return(
<>
<div class="container-fluid col-lg-12  bg-light aboutdivs mx-auto">
      
<div class="container-fluid col-lg-10">
        <p class="justify-content-center text-black fw-bold fs-1 headp">Tech Stack</p>
        </div>
        

        <div class="container-fluid col-lg-12 row my-5 ">
                    <div class="col-lg-12 text-center p-3">
                      
                      <div class="row">
                        <div class="col-lg-1 col-sm-1 col-md-1"></div>
                        <div class="col-lg-2 col-sm-2 col-md-2 py-3 ">
                        <div class="card cards bg-light  p-3 " >
                        <img src={htmls} class="img-thumbnail bghoverstyle border rounded-circle" alt="..."  data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
                        <div class="card-body d-flex justify-content-center ">
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">HTML and Static Websites</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body textstyle">
                                      HTML is the foundation of all web pages. It defines the structure of a page, while CSS defines its style. HTML and CSS are the beginning of everything you need to know to make your first web page! Learn both and start creating amazing websites.
                                      </div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-md-2">
                        <div class="card cards bg-light p-3 ">
                            <img src={css} class="img-thumbnail bghoverstyle border rounded-circle" alt="..."  data-bs-toggle="modal" data-bs-target="#reactexampleModalLabel"></img>
                            <div class="card-body d-flex justify-content-center ">
                          
                                    <div class="modal fade" id="reactexampleModalLabel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="reactexampleModalLabel">Css</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                          CSS3 is the latest version of CSS. It holds many advantages over its predecessor. CSS3 started to gain popularity in early 2010. At that time, some of the browsers did not even use to support CSS3 and so it took a while for the web developer community to start implementing this in their projects. Here, we will see the advantages of CSS3 over CSS, and also discuss why CSS3 gained such huge popularity in a short amount of time
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                        </div>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-md-2 py-3">
                        <div class="card cards  bg-light p-3">
                            <img src={javascrpt} class="img-thumbnail bghoverstyle border rounded-circle" alt="..." data-bs-toggle="modal" data-bs-target="#javascriptexampleModal"></img>
                            <div class="card-body d-flex justify-content-center ">
                                    <div class="modal fade" id="javascriptexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Static Websites</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                          JavaScript is an object-based scripting language which is lightweight and cross-platform.JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-md-2">
                        <div class="card cards  bg-light p-3 ">
                            <img src={reacts} class="img-thumbnail bghoverstyle border rounded-circle" alt="..."  data-bs-toggle="modal" data-bs-target="#reactexampleModalLabel"></img>
                            <div class="card-body d-flex justify-content-center ">
                          
                                    <div class="modal fade" id="reactexampleModalLabel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="reactexampleModalLabel">ReactJS</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                          ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        </div>
                        
                        <div class="col-lg-2 col-sm-2 col-md-2 py-3">
                        <div class="card cards  bg-light p-3">
                            <img src={nodes} class="img-thumbnail bghoverstyle border rounded-circle" alt="..."  data-bs-toggle="modal" data-bs-target="#exampleModalnode"></img>
                            <div class="card-body d-flex justify-content-center ">
                            
                                    <div class="modal fade" id="exampleModalnode" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Node.js is a back-end JavaScript runtime environment</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                          Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        </div>
                        <div class="col-lg-1 col-sm-1 col-md-1"></div>
                        </div>

                        
                        <br></br>
                        <div class="row py-2">
                        <div class="col-lg-1 col-sm-1 col-md-1"></div>
                    
                        <div class="col-lg-2 col-sm-2 col-md-2 py-3 rounded-circle">
                        <div class="card cards  bg-light p-3">
                            <img src={spring} class="img-thumbnail bghoverstyle border rounded-circle" alt="..."  data-bs-toggle="modal" data-bs-target="#exampleModalnode"></img>
                            <div class="card-body d-flex justify-content-center ">
                            <div class="modal fade" id="exampleModalsp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Spring Boot</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                            <p>Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".</p>
                                            Create stand-alone Spring applications,Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files),
                                          Provide opinionated 'starter' dependencies to simplify your build configuration,
                                          Automatically configure Spring and 3rd party libraries whenever possible,
                                          Provide production-ready features such as metrics, health checks, and externalized configuration,
                                        Absolutely no code generation and no requirement for XML configuration.
                                      
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                          </div>
                        </div>
                      

                        <div class="col-lg-2 col-sm-2 col-md-2">
                        <div class="card  cards  bg-light p-3">
                        <img src={mysqls} class="img-thumbnail border bghoverstyle rounded-circle" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModalmys"></img>
                        <div class="card-body d-flex justify-content-center ">
                        
                                <div class="modal fade" id="exampleModalmys" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">SQL database engine software</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body textstyle">
                                      MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language. A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data
                                      </div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-md-2 py-3">
                        <div class="card  cards  bg-light p-3">
                        <img src={mongo} class="img-thumbnail bghoverstyle border rounded-circle" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModalmon"></img>
                        <div class="card-body d-flex justify-content-center ">
                        
                                <div class="modal fade" id="exampleModalmon" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">MongoDB Cross-platform document-oriented database</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body textstyle">
                                      MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions. MongoDB is a member of the MACH Alliance
                                      </div>
                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-md-2">
                        <div class="card mg-thumbnail cards  bg-light p-3">
                            <img src={dotnet} class="img-thumbnail bghoverstyle border rounded-circle" alt="..." data-bs-toggle="modal" data-bs-target="#exampleModaldn"></img>
                            <div class="card-body d-flex justify-content-center ">
                            <div class="modal fade" id="exampleModaldn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Why C#</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                          C# is a modern, innovative, open-source, cross-platform object-oriented programming language and one of the top 5 programming languages on GitHub.

            Do you have experience with JavaScript, Java, or C++? You'll find C# instantly familiar, and you'll enjoy its evolving features including type safety, generics, pattern matching, async, records, and more.
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                          </div>
                        </div>
                        <div class="col-lg-2 col-sm-2 col-md-2 py-3">
                        <div class="card cards  bg-light p-3">
                            <img src={java} class="img-thumbnail bghoverstyle border rounded-circle" alt="..."  data-bs-toggle="modal" data-bs-target="#exampleModaljava"></img>
                            <div class="card-body d-flex justify-content-center ">
                            
                                    <div class="modal fade" id="exampleModaljava" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Java (programming language)</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div class="modal-body textstyle">
                                          Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions.
                                          </div>
                                        
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                        </div>
                        </div>
                       

                 
                      

                    </div>

                   
        </div>

     
  
</div>
        </>
    );
}