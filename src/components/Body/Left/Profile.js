import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from "@mui/icons-material/Cake";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import "./left.css";

const Profile = () => {
  return (
    <div className="bg-light">
      <Card>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-2">
              <Typography variant="h5" align="center">
                My Profile
              </Typography>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-4 mx-auto">
              <img
                src="img/avatar3.png"
                alt="Default"
                width="100%"
                height="100%"
                className="bordRound"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2">
              <h5>
                <EditIcon color="disabled" fontSize="small" />
              </h5>
            </div>
            <div className="col-8">
              <Typography align="left" variant="body1">
                Designer, UI
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <h5>
                <HomeIcon color="disabled" fontSize="small" />
              </h5>
            </div>
            <div className="col-8">
              <Typography align="left" variant="body1">
                London, UK
              </Typography>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <h5>
                <CakeIcon color="disabled" fontSize="small" />
              </h5>
            </div>
            <div className="col-8">
              <Typography align="left" variant="body1">
                April 1, 1988
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
