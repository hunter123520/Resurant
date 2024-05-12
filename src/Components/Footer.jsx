
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Footer.css';
import me1 from "../Images/meExpanded-transformed (1).jpg";
import logo from "../Images/logo1.png"
import { Facebook, Twitter, GitHub, LinkedIn} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
	const url = window.location.pathname;
	const resolvedPath = useResolvedPath(to);
	const isactive = useMatch({ path: resolvedPath.pathname, end: true });
	console.log(to, url.includes(to) ? "active" : "");
	console.log(isactive);
	return (
	  <Link to={to} {...props}>
		{/* ("active" && isactive )+  */}
		<a className={url.includes(to) ? "activebut but" : "inactivebut but"}href={to}>
		  {children}
		</a>
	  </Link>
	);
  }

function Footer(){
	
    return(
        <div class="footer  container-fliud text-white">
		<img class="imgloft position-absolute" src={me1} />
		<div class="row justify-content-md-center">
		</div>
		<div class="row" >
    	<div class="col pb-0 pe-5 pt-5 ps-5" style={{height:"fit-content",zIndex:"5"}}>
    		<img class="img-fluid" src={logo} style={{width:"30%",height:"30%"}}/>
    		<div class="font-weight-bold ps-4 pe-5">
			Food Resurant, the best services in all the world.
    		</div>
			
    		<div class="p-4 h2" style={{zIndex:"5"}}>
			<div class="d-flex flex-row pt-3 " style={{gap:"25px",zIndex:"5"}}>
			<CustomLink className="link_page" to="/Home"> Home </CustomLink>
			<CustomLink className="link_page" to="/Projects"> Projects </CustomLink>
			<CustomLink className="link_page" to="/FAQs"> FAQs </CustomLink>
			<CustomLink className="link_page" to="/Contact"> Contact </CustomLink>

    		</div>
				
    		</div>
    	</div>
    	<div class="col p-5" style={{height:"fit-content",zIndex:"5"}}>
			<div class="d-flex flex-row pt-3 justify-content-end buttomicons" style={{gap:"25px",zIndex:"5"}}>
				<IconButton href="techtune.serv@gmail.com" className="iconbutton" color="primary" aria-label="LinkedIn" style={{color:"var(--white)"}}>
					<LinkedIn fontSize={"large"} />
				</IconButton>
				<IconButton href="techtune.serv@gmail.com"  className="iconbutton"  color="primary" aria-label="Facebook" style={{color:"var(--white)"}}>
					<Facebook fontSize={"large"} />
				</IconButton>
				<IconButton href="techtune.serv@gmail.com" className="iconbutton"  color="primary" aria-label="Twitter" style={{color:"var(--white)"}}> 
					<Twitter fontSize={"large"} />
				</IconButton>
				<IconButton href="techtune.serv@gmail.com"  className="iconbutton"  color="primary" aria-label="Github"style={{color:"var(--white)"}} >
					<GitHub fontSize={"large"} />
				</IconButton>
			</div>
			<div class="d-flex flex-row pt-3 justify-content-end" style={{gap:"25px",zIndex:"5"}}>
				<a className='but' href='mailto: techtune.serv@gmail.com'>techtune.serv@gmail.com
</a>
			</div>
    	</div>
  	</div>
  	<div class="row pt-0 pe-5 ps-5 ">
  		<hr class="col me-4 ms-4 mt-0 text-opi" />
  	</div>
  	<div class="row justify-content-md-center pb-2"> 
  		<div class="col-md-auto  col-md-6 text-center text-opi ">
		  Copyright © 2024 TechTune All rights reserved.
  		</div>
  	</div>
  	


	</div>
    );
}

export default Footer;