import Button from "@mui/material/Button";

const UpcomingEvents = () => {
    return ( 
            <div className="container bg-light pt-3 pb-3 mb-3">
            <div className="row">
                <div className="col-md-12">
                    <h6 className="text-center">Upcoming Events</h6>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-12 mx-auto">
                    <img src="img/forest.jpg" alt="Friends" width="180px" height="120px"/>
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
     );
}
 
export default UpcomingEvents;