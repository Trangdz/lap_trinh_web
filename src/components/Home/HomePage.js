import videohomepage from "../../assets/video-homepage.mp4"
const HomePage = (props) => {
    return (
      <div className="homePage-container">
        <video autoPlay muted loop>
          <source src={videohomepage} type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default HomePage;
  