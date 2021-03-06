import BugReportIcon from "@mui/icons-material/BugReport";
import { Card } from "@mui/material";

const Bugs = () => {
  return (
    <div className="bg-light mt-3 mb-3">
      <Card>
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
              <BugReportIcon fontSize="large" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Bugs;
