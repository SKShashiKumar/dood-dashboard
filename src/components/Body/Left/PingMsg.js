import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./left.css";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";

const PingMsg = () => {
  const [Show, setShow] = useState(true);

  return (
    <>
      {Show ? (
        <div className="bg-light-darkslate mt-3 pt-3 mb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <h5 className="p-2">Hey</h5>
              </div>
              <div className="col-md-3">
                <Button
                  variant="contained"
                  onClick={() => setShow(false)}
                  color="inherit"
                >
                  <ClearIcon />
                </Button>
              </div>
            </div>
            <div className="row pl-4 pr-4 pb-4">
              <Typography variant="subtitle2" align="justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo sed suscipit dolor aspernatur autem! Possimus iure nos
              </Typography>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PingMsg;
