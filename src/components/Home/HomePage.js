import videohomepage from "../../assets/video-homepage.mp4"
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const isAuthenticated=useSelector(state=> state.user.isAuthenticated);
  const account=useSelector(state=> state.user.account);
  return (
    <>
      <div className="homePage-container">
        <video autoPlay muted loop>
          <source src={videohomepage} type="video/mp4" />
        </video>
        <div className="homePage-content">
        <div className="title-1">
          There's a better way to ask
        </div>
        <div className="title-2">
          You don't want to make a boring form.
          And your audience won't answer one.
          Create a typeform instead-and make everyone happy.
        </div>
        <div className="title-3">
          <button className="btn-start">Get's start. It's free</button>
        </div>
      </div>
      </div>
      
    </>

  );
};

export default HomePage;
