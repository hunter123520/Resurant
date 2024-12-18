import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutPage.css";
import team_img from "../Images/team_img.png";
import { CgShapeRhombus } from "react-icons/cg";
import { Avatar } from "@mui/material";
import aboutBG from "../Images/meExpanded-transformed (1).jpg";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import user from "../Images/user.png";
import GL from "../Images/GL.png"

const project_members = [
  {
    name: "Worker",
    role: "Cook",
    img: user,
    fb_link: "#",
  },
 
];

const render_project_members = project_members.map((member, index) => {
  return (
    <div
      className="row-xxl d-flex flex-column align-items-center justify-content-center mmbcont"
      style={{ fontWeight: "300", padding: "0.5em" }}
      key={index}
    >
      <a href={member.fb_link} target="_blank">
        <Avatar
          alt={member.name}
          src={member.img}
          sx={{ width: 126, height: 126 }}
        />
      </a>
      <span
        style={{
          fontSize: "19.5px",
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "400",
          color:"black !important"
        }}
      >
        {member.name}
      </span>
      <span
        style={{
          fontSize: "12.8px",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "25px",
          color:"black !important"
        }}
      >
        {member.role}
      </span>
    </div>
  );
});

function AboutPage() {
  return (
    <>
      <div
        className="w-100 text-center position-absolute d-flex justify-content-center align-items-center TTlilte "
        style={{
          backgroundColor: "#06272e54",
          top: 0,
          height: 350,
          zIndex: 8,
          paddingTop: "175px",
          
        }}
      >
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </div>
      <CardMedia
        component="img"
        height="350"
        image={aboutBG}
        alt="green iguana"
        sx={{
          objectPosition: "top",
          marginTop: "-100px",
          zIndex: 7,
          position: "relative",
        }}
      />
      <div className="d-flex flex-row justify-content-center align-items-center p-2 Panle">
        <Button onClick={() => window.location.replace("/About#whoweAre")}>
          Who We are
        </Button>
        <Button onClick={() => window.location.replace("/About#OurTeam")}>
          Our Team
        </Button>
        <Button onClick={() => window.location.replace("/About#Goals")}>
          Goals
        </Button>
        <Button
          onClick={() => window.location.replace("/About#ShareKnowledge")}
        >
          share your knowledge
        </Button>
        
        
      </div>
      <div style={{ height: "50px" }}></div>
      <Container id="whoweAre" fluid="xxl" className="con-intro">
        <Container className="d-flex flex-column justify-content-center align-items-center p-5 text-center">
          <div
            className="intro-title-A text-center lighter p-0"
            style={{
              color: "#0B3841",
              fontSize: "45px",
            }}
          >
            WHO WE ARE
          </div>
          <hr
            style={{
              width: "20%",
              height: 2,
              borderWidth: 3,
              color: "orange",
            }}
          />
          <Typography
            className="w-75 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            fontWeight={"bold"}
            color={"black"}
          >
            <span style={{fontSize:25,fontWeight:"300"}}><span style={{color: "#178a9f"}}>Food Services </span></span>
            <br></br><br></br>
            Welcome to our Resurant Group! We are a
            passionate group of friends starting our bussinis in the
            exciting fields of Resurants and food delivery. With a
            collective goal to make our customers happy, we have come together to cook
            and delivere you food from anywhere you are.
            .
          </Typography>
        </Container>
      </Container>
      <div style={{ height: "50px" }}></div>
      <div id="OurTeam" className="infos-container">
        <div className="team-container">
          <div className="container-xxl">
            <div
              className="team-title text-center"
              style={{
                color: "#0B3841",
                fontSize: "40px",
                fontWeight: "600",
                marginTop: "0.25em",
                marginBottom: "0.5em",
                textAlign: "center",
              }}
            >
              <span>Our Team:</span>
            </div>
          </div>
          <div
            className="row-xs d-flex flex-wrap justify-content-between align-items-center"
            style={{
              fontSize: "24px",
              fontWeight: "300",
              padding: "0.5em",
            }}
          >
            {render_project_members}
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div
        id="Goals"
        className="Goals w-100 d-flex flex-row"
        style={{ padding: "15%", paddingTop: "10%", paddingBottom: "5%" }}
      >
        <div className="d-flex flex-column">
          <Typography variant="h4" gutterBottom fontWeight={"bold"} color={"black"}>
            Our Goals
          </Typography>
          <Typography
            className="w-100 p-0"
            variant="h7"
            gutterBottom
            style={{ marginTop: 10 }}
            lineHeight={1.5}
            color={"black"}
          >
            We believe in a community needs a better food services, this is why we are here.

            Our goals are clear:<br />
            <span style={{ lineHeight: 2 }}>
              {" "}
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> serve the customers
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> make you happy
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> cook good food
            </span>
            <br />
            <span style={{ lineHeight: 2 }}>
              <span style={{ color: "rgb(54, 240, 253);" }}>✓</span> lower the costs
            </span>
          </Typography>
        </div>
        <div className="intro-img">
          <img
            src={GL}
            alt="logo"
            height={500}
            sx={{
              objectPosition: "top",
            }}
          />
        </div>
      </div>
      <div id="ShareKnowledge" fluid="xxl" className="con-intro p-5">
        <div className="intro-container">
          <div className="intro-text-container">
            <div
              className="intro-title-A lighter p-0"
              style={{
                color: "#0B3841",
                fontSize: "45px",
              }}
            >
              <span style={{ color: "#D9383C" }}>share</span> your foodback
            </div>
            <div className="intro-content">
              <Typography
                className="w-75 p-0"
                variant="h7"
                gutterBottom
                style={{ marginTop: 10 }}
                color={"black"}
              >
                Furthermore, we would love to hear your thoughts! Your feedback is important to us, 
                as it helps me learn and improve. Please feel free to share any comments or suggestions 
                you have about our service.
              </Typography>
            </div>
          </div>
          <div className="intro-img">
            <img src={team_img} alt="logo" />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default AboutPage;
