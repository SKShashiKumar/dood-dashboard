import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Card } from "@mui/material";
const FriendsReq = () => {
  return (
    <div className="bg-light mt-3">
        <Card>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-center">Friend Request</h5>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-8 mx-auto">
            <img
              src="img/avatar6.png"
              alt="Friends"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-md-12 pl-2">
            <h5 className="text-center">Jane Doe</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <ButtonGroup>
              <Button variant="contained" color="success">
                {<CheckIcon />}
              </Button>
              <Button variant="contained" color="error">
                {<ClearIcon />}
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      </Card>
    </div>
  );
};

export default FriendsReq;
