import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/HomePage.css";

import display from "../Images/display.jpg";
import display2 from "../Images/display2.jpg";
// import { BsArrowRight } from "react-icons/bs";
import food1 from "../Images/food1.png";
import food2 from "../Images/food2.png";
import food3 from "../Images/food3.png";
import food4 from "../Images/food4.png";
import food5 from "../Images/food5.png";
import food6 from "../Images/food6.png";
import food7 from "../Images/food7.png";
import food8 from "../Images/food8.png";
import { Star } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import { Link } from 'react-router-dom'
import React from 'react';
import SearchBox from '../Components/SearchBox';
import TabsHolder from '../Components/TabsHolder';
import '../Styles/embla.css'
import { Facebook, Twitter, GitHub, LinkedIn} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';

function HomePage() {


    return (
        <div className='bb'>
            
            <Container maxWidth="sm" fluid="xxxl" className='con-intro' >
                <div className='intro-container center ps-5 ' style={{height:"100vh"}}>
                    <div className='intro-text-container ps-4'>
                    <span className='intro-title-small' >Easy Way to Order your Food</span>
                        <div className='intro-title'>
                            <span>Choosing <span style={{color:"var(--main)"}}>Healthy</span> & <span style={{color:"var(--main)"}}>Fresh</span> Food</span>
                        </div>
                        <div className='intro-content'>

                            <span>We are most Fastes and Favourite Food Delivery Services all Over the World.
                                <br></br>
                                 Search for your favourite food or restaurant in your area</span>
                        </div>
                        <SearchBox placeholder='Search for Food & Restaurant' />

                        <div className='d-flex flex-row justify-content-center align-items-center mt-4' style={{gap:"25px"}}>
                            <div className='d-flex flex-column itemDisplayer justify-content-center align-items-center'>
                                <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center' style={{width:"65%",aspectRatio:"1",backgroundColor:"black"}}>
                                    <Star style={{color:"white",fontSize:"40px"}}></Star>
                                </div>
                                (4.8)
                                <span >15k reviews</span>
                            </div>

                            <div className='d-flex flex-column itemDisplayer justify-content-center align-items-center'>
                                <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center' style={{width:"65%",aspectRatio:"1",backgroundColor:"black"}}>
                                    <RestaurantMenuIcon style={{color:"white",fontSize:"40px"}}></RestaurantMenuIcon>
                                </div>
                                3000+
                                <span >Restaurant</span>
                            </div>

                            <div className='d-flex flex-column itemDisplayer justify-content-center align-items-center'>
                                <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center' style={{width:"65%",aspectRatio:"1",backgroundColor:"black"}}>
                                    <DinnerDiningIcon style={{color:"white",fontSize:"40px"}}></DinnerDiningIcon>
                                </div>
                                9000+
                                <span >Food Items</span>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center p-4 right-holder' style={{gap:"25px"}}>
                    <div className='intro-img'>
                        <img src={food2} alt="logo" className='imgc'/>
                    </div>
                    <div className='d-flex flex-row justify-content-center align-items-center' style={{gap:"15px"}}>
                    <img src={food1} alt="logo" className='img-small'/>
                    <img src={food8} alt="logo" className='img-small'/>
                    <img src={food7} alt="logo" className='img-small'/>
                    <img src={food5} alt="logo" className='img-small'/>
                    </div>
                    </div>
                </div>
            </Container>
            <Container fluid="xl" >
                <div className='d-flex flex-column justify-content-center align-items-center Sec-Part'>
                    <span className='s-title' style={{color:"var(--main)"}}>
                        New in Menu
                    </span>
                    <span className='b-title mb-5' >
                        Special Menu For You
                    </span>
                    <TabsHolder></TabsHolder>
                </div>
            </Container>
            <Container fluid="xxxl" className=' desc1 d-flex justify-content-within align-items-center w-100 m-0 p-0' >
                <img className='img-left' src={display} alt=""/> 
                <div className='text-container w-50 d-flex flex-column'>
                        <span className='h-title'>
                            ABOUT US
                        </span>
                        <span className='s-title' style={{color:"var(--main)"}}>
                            About us
                        </span>
                        <span className='b-title ' >
                            Why We Are The Best ?
                        </span>
                    <div className='descocontent'>
                    We are a group of team that grew in the last years to create the best of what we can, this allows us to create lot of restaurents and serve many different food types
                    </div>

                    <div className='d-flex flex-column justify-content-center align-items-center' style={{gap:"25px"}}>

                       <div className='d-flex flex-row itemDisplayer p-4' style={{gap:"15px",width:"55%",height:"165px",marginLeft:"-200px"}}>
                        <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center w-25' style={{height:"fit-content",aspectRatio:"1",backgroundColor:"black"}}>
                                <SoupKitchenIcon style={{color:"white",fontSize:"24px"}}></SoupKitchenIcon>
                            </div>
                        <div className='d-flex flex-column  justify-content-start align-items-start pt-2'>
                            Fresh Food
                            <span style={{fontSize:"15px"}}> All the food we serve is fresh, every meat every fish you order is there for less than 3 days</span>
                            </div>
                       </div>

                       <div className='d-flex flex-row itemDisplayer p-4' style={{gap:"15px",width:"55%",height:"165px"}}>
                        <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center w-25' style={{height:"fit-content",aspectRatio:"1",backgroundColor:"black"}}>
                                <DeliveryDiningIcon style={{color:"white",fontSize:"24px"}}></DeliveryDiningIcon>
                            </div>
                        <div className='d-flex flex-column  justify-content-start align-items-start pt-2'>
                            Fast Delivery
                            <span style={{fontSize:"15px"}}> You are afraid of waiting ? we are the fastes food delivery in the hood, just call us and wait 10 minuts</span>
                            </div>
                       </div>

                       <div className='d-flex flex-row itemDisplayer p-4' style={{gap:"15px",width:"55%",height:"165px",marginRight:"-200px"}}>
                        <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center w-25' style={{height:"fit-content",aspectRatio:"1",backgroundColor:"black"}}>
                                <BrunchDiningIcon style={{color:"white",fontSize:"24px"}}></BrunchDiningIcon>
                            </div>
                        <div className='d-flex flex-column  justify-content-start align-items-start pt-2'>
                        Quality Maintain
                            <span style={{fontSize:"15px"}}> Over this years we are still the best, even that our team is growing we are still maintaining our qualities</span>
                            </div>
                       </div>

                    </div>

                </div>

            </Container>
            <Container fluid="xxxl" className=' desc1 d-flex flex-column justify-content-conter align-items-center w-100 m-0 p-0'  >
            <span className='h-title'>
                            CUSTOMERS REVIEWS
                        </span>
                        <span className='s-title' style={{color:"var(--main)"}}>
                            Customers Reviews
                        </span>
                        <span className='b-title ' >
                            What Our Customers Says ?
                        </span>
                <div style={{height:"50px"}}></div>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <div className='text-container ans d-flex flex-column justify-content-start align-items-start content-container' style={{height:"60vh",backgroundColor:"var(--wt)",width:"55%"}}>
                        <span className='l-title'>Andrew Simons</span>
                        <span className='ll-title'>Manager in Stars Food</span>
                        <div className='descocontent mt-4' style={{fontSize:"20px"}}>
                        Food Delivery was incredibly user-friendly.  Searching for restaurants was a breeze and the interface was clear and easy to navigate. Ordering was simple and I appreciated the ability to track my food in real-time.
                        </div>
                        <div class="col p-0" style={{height:"fit-content",zIndex:"5"}}>
                            <div class="d-flex flex-row pt-3 justify-content-start" style={{gap:"25px",zIndex:"5"}}>
                                <IconButton href="https://www.linkedin.com/in/mohammed-abdelhadi-sellami-241880209/" className="iconbuttonB" color="primary" aria-label="LinkedIn" style={{color:"black !important"}}>
                                    <LinkedIn fontSize={"large"} />
                                </IconButton>
                                <IconButton href="https://www.facebook.com/profile.php?id=100012502147526"  className="iconbuttonB"  color="primary" aria-label="Facebook" style={{color:"black !important"}}>
                                    <Facebook fontSize={"large"} />
                                </IconButton>
                                <IconButton href="https://twitter.com/XxHUNTERx5" className="iconbuttonB"  color="primary" aria-label="Twitter" style={{color:"black !important"}}> 
                                    <Twitter fontSize={"large"} />
                                </IconButton>
                                <IconButton href="https://github.com/hunter123520"  className="iconbuttonB"  color="primary" aria-label="Github"style={{color:"black !important"}} >
                                    <GitHub fontSize={"large"} />
                                </IconButton>
                            </div>
                            <div class="d-flex flex-row pt-3 justify-content-start" style={{gap:"25px",zIndex:"5"}}>
                                <a className='but iconbuttonB'  href='mailto: philippe.fernandez.2002@gmail.com' style={{color:"black !important"}}>andrew.simons@gmail.com</a>
                            </div>
                        </div>
                    </div>
                <img className='img-right-small' src={display2} alt=""/> 
                </div>
            </Container>

            <Container fluid="xxxl" className=' desc1 desc2 d-flex flex-column justify-content-conter align-items-center w-100 m-0 p-0'  >
            <span className='h-title'>
                            CONTACT US
                        </span>
                        <span className='s-title' style={{color:"var(--main)"}}>
                            Contact Us
                        </span>
                        <span className='b-title ' >
                            Our Support Team Will Assist You With Any Question.
                        </span>
                <div style={{height:"100px"}}></div>
                    <div className='d-flex flex-row justify-conteny-center align-items-center w-75' style={{gap:"50px"}}>
                        <div className='itemDisplayer d-flex flex-column  justify-content-start align-items-start p-5 position-relative' style={{width:"55%",height:"150px"}}>
                            Email Adress
                            <span style={{fontSize:"15px"}}> Company.Adress@gmail.com</span>
                            <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center iconHolderOut' style={{height:"fit-content",aspectRatio:"1"}}>
                                <Email style={{color:"black",fontSize:"28px"}}></Email>
                            </div>
                        </div>

                        <div className='itemDisplayer d-flex flex-column  justify-content-start align-items-start p-5 position-relative' style={{width:"55%",height:"150px"}}>
                            Live Support
                            <span style={{fontSize:"15px"}}> Get Live Support Now</span>
                            <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center iconHolderOut' style={{height:"fit-content",aspectRatio:"1"}}>
                                <SupportAgentIcon style={{color:"black",fontSize:"28px"}}></SupportAgentIcon>
                            </div>
                        </div>

                        <div className='itemDisplayer d-flex flex-column  justify-content-start align-items-start p-5 position-relative' style={{width:"55%",height:"150px"}}>
                            Phone Number
                            <span style={{fontSize:"15px"}}> +94 654 213 546</span>
                            <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center iconHolderOut' style={{height:"fit-content",aspectRatio:"1"}}>
                                <PhoneInTalkIcon style={{color:"black",fontSize:"28px"}}></PhoneInTalkIcon>
                            </div>
                        </div>
                    </div>

            </Container>

            <div style={{height:"50px"}}></div>

        </div>
    );
}

export default HomePage