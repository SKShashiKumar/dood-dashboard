import { Card } from "@mui/material";
import Button from "@mui/material/Button";

const UpcomingEvents = () => {
  return (
    <div className="bg-warning">
      <Card>
        <div className="container-fluid pt-3 pb-3 mb-3">
          <div className="row">
            <div className="col-12">
              <h6 className="text-center">Upcoming Events</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 align-items-center">
              <img
                src="img/forest.jpg"
                alt="Friends"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="row p-1">
            <div className="col-md-12 pl-3">
              <h5 className="text-center fw-bolder">Holiday</h5>
            </div>
          </div>
          <div className="row p-1">
            <div className="col-md-12 pl-3">
              <h6 className="text-center">Friday 15:00</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Button variant="contained" color="action" fullWidth>
                <h6 className="text-center">info</h6>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UpcomingEvents;
