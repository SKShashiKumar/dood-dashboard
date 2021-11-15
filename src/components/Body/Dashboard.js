import Addposts from "./Center/Addposts";
import Posts from "./Center/Posts";
import Groups from "./Left/Groups";
import Intrests from "./Left/Intrests";
import PingMsg from "./Left/PingMsg";
import Profile from "./Left/Profile";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="m-4 pl-6">
      <div className="row">
        <div className="col-md-3 bg-cw">
            <Profile/>
            <Groups/>
            <Intrests/>
            <PingMsg/>
        </div>
        <div className="col-md-7 bg-light">
            <Addposts/>
            <Posts/>
        </div>
        <div className="col-md-2 bg-danger ">
            Right
        </div>
      </div>
    </div>
  );
};

export default Dashboard;