import React, { useState } from "react";
// import Button from "@mui/material/Button";
import "./left.css";
import Typography from "@mui/material/Typography";
// import ClearIcon from "@mui/icons-material/Clear";

const PingMsg = () => {
  const [Show, setShow] = useState(true);

  return (
    <>
      {Show ? (
        <div className="pingmsg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
                <h5 className="hey">Hey</h5>
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 closeButton">

                <p onClick={() => setShow(false)} className="pp">X</p>
              </div>
            </div>
            <div className="row">
              <Typography variant="subtitle2" align="justify" className="col PingContent">
              People are looking at your profile. Find out who.
              </Typography>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PingMsg;
