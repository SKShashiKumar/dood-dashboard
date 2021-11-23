import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Card } from "@mui/material";

import './right.css'

const FriendsReq = () => {
  return (
    <div className="bg-light mt-3">
        <Card>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-center">Friend Request</h5>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-12 align-items-center imgCenter">
            <img
              src="img/avatar6.png"
              alt="Friends"
              width="90%"
              height="90%"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-12 pl-2">
            <h5 className="text-center">Jane Doe</h5>
          </div>
        </div>
        <div className="row">
          
            <ButtonGroup className="col-md-12 btn-grp">
              <Button variant="contained" color="success" fullWidth className="col">
                {<CheckIcon  />}
              </Button>
              <Button variant="contained" color="error" fullWidth  className="col" >
                {<ClearIcon />}
              </Button>
            </ButtonGroup>
        </div>
      </div>
      </Card>
    </div>
  );
};

export default FriendsReq;
