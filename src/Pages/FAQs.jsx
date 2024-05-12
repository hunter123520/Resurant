import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from 'react-bootstrap/Container';
import "../Styles/FAQs.css";
const FAQs = () => {
  return (
    <div>
        <div className='d-flex flex-column align-items-center justify-content-center flex-fill mainTitle w-100 mt-5 mb-5 pb-5'>
            <span>Frequently Asked</span>
            <span className='main squeeze'>Questions</span>
        </div>

        <Container  className='d-flex flex-row align-items-center justify-content-center mb-5 pb-5 h-100' style={{gap:"25px",}}>
            <div className='d-flex flex-column w-50 h-100'>
            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                What services do you offer ?
                </AccordionSummary>
                <AccordionDetails>
                We offer food from different categories, we can deliver to your location, and you can ask for special services also 
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                How do you Charge ?
                </AccordionSummary>
                <AccordionDetails>
                It totally depends on what you are looking for, you can contact me about your order and i will give you more details.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                How much long it takes ?
                </AccordionSummary>
                <AccordionDetails>
                depending on the type of order you are trying to do, but our services will also be fast.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                Can i offer something not in the website ?
                </AccordionSummary>
                <AccordionDetails>
                yes you can offer special orders, and we will see what we can do.
                </AccordionDetails>
            </Accordion>
            </div>
            <div className='d-flex flex-column w-50 h-100'>
            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                What are you looking for in the future ?
                </AccordionSummary>
                <AccordionDetails>
                We are looking to create our brand in the market, as we are still a small restaurant.
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                Can we colaborate ?
                </AccordionSummary>
                <AccordionDetails>
                Of course, you can contact as and we will help you with anything you want
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                Can i ask for some advices ?
                </AccordionSummary>
                <AccordionDetails>
                Yes, you can talk to us on facebook and we will be open to help you with some advices
                </AccordionDetails>
            </Accordion>

            <Accordion className='acord'>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:"var(--white)"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                className='acordT'
                >
                How much your experience ?
                </AccordionSummary>
                <AccordionDetails>
                We started from 2015 and today its 9 years of experience.
                </AccordionDetails>
            </Accordion>
            </div>
        </Container>


    </div>
  )
}

export default FAQs