import React from "react";
//import Carousel from 'react-bootstrap/Carousel';
//import Form from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import mongo from '../static/mongo.png';
//import express from '../static/express.png';
//import react from '../static/react.png';
//import node from '../static/node.png';


export default function Home() {
    
    return (
        <div>
            <div class='container-fluid' >
                <div className="row title bg-warning" style={{ marginBottom: "20px" }} > 
                    <div class="col-sm-12 ">  
                          Un Simple forum en utilisant JavaScript , Bootstrap dans Mern Stack
                    </div>   
                </div>
            </div> 
            <div className='container-fluid' > 


            {/**<Carousel>
                <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px"}}
                    className="d-block w-100" 
                    src={mongo}  /> 
                    <Carousel.Caption> 
                    <h3>First Demo </h3> 
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}}>
                <img style={{'height':"300px"}}
                className="d-block w-100"  
                src={express}  />  
                    <Carousel.Caption> 
                    <h3>Second Demo</h3>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}}> 
                <img style={{'height':"300px"}}
                className="d-block w-100" 
                src={react}   /> 
                    <Carousel.Caption>
                    <h3>Third Demo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}}> 
                <img style={{'height':"300px"}}
                className="d-block w-100" 
                src={node}   /> 
                    <Carousel.Caption>
                    <h3>Fourth Demo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>*/}
            </div>

        </div>  
    )
}