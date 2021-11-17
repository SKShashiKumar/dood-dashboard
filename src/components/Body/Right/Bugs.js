import BugReportIcon from "@mui/icons-material/BugReport";
import { Card } from "@mui/material";

const Bugs = () => {
  return (
    <div className="bg-light mt-3 mb-3">
      <Card>
        <div className="container p-3">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-4 mx-auto">
              <BugReportIcon fontSize="large" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Bugs;
