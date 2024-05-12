import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../Styles/TabStyle.css"
import { Avatar } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import EmblaCarousel from '../Components/EmblaCarousel'
import food1 from "../Images/food1.png";
import food2 from "../Images/food2.png";
import food3 from "../Images/food3.png";
import food4 from "../Images/food4.png";
import food5 from "../Images/food5.png";
import food6 from "../Images/food6.png";
import food7 from "../Images/food7.png";
import food8 from "../Images/food8.png";
import food9 from "../Images/food9.png";
import food10 from "../Images/food10.png";
import food11 from "../Images/food11.png";
import food12 from "../Images/food12.png";
import food13 from "../Images/food13.png";

const Food_List = [
  {
    img:food9,
    name:"Italian Veg Pizza",
    content:"ICheese with Shrimps",
    price:"18.00",
    rate:4,
  },
  {
    img:food10,
    name:"Remory Frensh Pizza",
    content:"ICheese with Shrimps",
    price:"13.00",
    rate:4,
  },
  {
    img:food11,
    name:"Pizza De Noire",
    content:"ICheese with Shrimps",
    price:"20.00",
    rate:5,
  },
  {
    img:food12,
    name:"Jiano Pizza",
    content:"ICheese with Shrimps",
    price:"17.00",
    rate:3,
  },
  {
    img:food13,
    name:"Pizza Fery",
    content:"ICheese with Shrimps",
    price:"16.00",
    rate:5,
  },
  {
    img:food10,
    name:"Pizza with meat",
    content:"ICheese with Shrimps",
    price:"18.00",
    rate:4,
  }
]
const Food_List1 = [
  {
    img:food1,
    name:"Chicken Rais",
    content:"chicken and rais",
    price:"25.00",
    rate:4,
  },
  {
    img:food2,
    name:"Pasta with meat balls",
    content:"Meat",
    price:"15.00",
    rate:4,
  },
  {
    img:food3,
    name:"Pasta",
    content:"ICheese with Shrimps",
    price:"10.00",
    rate:5,
  },
  {
    img:food4,
    name:"Fitiro Pasta",
    content:"ICheese with Shrimps",
    price:"26.00",
    rate:4,
  },
  {
    img:food5,
    name:"Fish Cronsort",
    content:"ICheese with Shrimps",
    price:"37.00",
    rate:4,
  },
  {
    img:food6,
    name:"Meat Balls",
    content:"ICheese with Shrimps",
    price:"10.00",
    rate:4,
  }
]

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 16
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Food_Generator = (Food_List = Food_List) =>{
  return (
    <EmblaCarousel slides={Food_List.map(product => {
      return(
        <div className='d-flex flex-column productDisplayer justify-content-center align-items-center'>
            <div className='rounded-circle mb-3 d-flex align-items-center justify-content-center ' style={{width:"65%",aspectRatio:"1",backgroundColor:"black"}}>
                {/* <DinnerDiningIcon style={{color:"white",fontSize:"2.5rem"}}></DinnerDiningIcon> */}
                <Avatar
                    className='avcont'
                    src={product.img}
                    sx={{ width: "100%", height: "100%" }}
                />
            </div>
            {product.name}
            <span className='content'>{product.content}</span>
            <Rating name="read-only" value={product.rate} readOnly />
            <span className='content2'>${product.price}</span>
            <Button  variant="contained" className='productButton'>Add to Bag</Button>
        </div>
      );
    })} options={OPTIONS} />
  );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsHolder = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
   
    <Box sx={{ width: '100%' }}>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs  value={value} onChange={handleChange} centered  >
        <Tab label="Pizza" {...a11yProps(0)} className='Tab' />
        <Tab label="Burger" {...a11yProps(1)} className='Tab'/>
        <Tab label="Sushi" {...a11yProps(2)} className='Tab'/>
        <Tab label="Cake" {...a11yProps(3)} className='Tab'/>
        <Tab label="Steak" {...a11yProps(4)} className='Tab'/>
        <Tab label="Ramen" {...a11yProps(5)} className='Tab'/>
      </Tabs>
    </Box>
      <CustomTabPanel value={value} index={0}> {Food_Generator(Food_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={1}> {Food_Generator(Food_List1)} </CustomTabPanel>
      <CustomTabPanel value={value} index={2}> {Food_Generator(Food_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={3}> {Food_Generator(Food_List1)} </CustomTabPanel>
      <CustomTabPanel value={value} index={4}> {Food_Generator(Food_List)} </CustomTabPanel>
      <CustomTabPanel value={value} index={5}> {Food_Generator(Food_List1)} </CustomTabPanel>
    </Box>
    </>

  )
}

export default TabsHolder