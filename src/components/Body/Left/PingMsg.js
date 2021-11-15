import React, { useState } from "react";
import Button from "@mui/material/Button";

const PingMsg = () => {
  const [Show, setShow] = useState(true);

  return (
    <>
    {
        Show ? 
              <div className="bg-light mt-3 pt-3 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <h2 className="p-2">Hey</h2>
                </div>
                <div className="col-md-3">
                  <Button contained onClick={() => (setShow(false))}>
                                        <h5 className="text-dark">X</h5>
                  </Button>
                </div>
              </div>
              <div className="row p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo sed suscipit dolor aspernatur autem! Possimus iure nos
              </div>
            </div>
          </div>
         : null }   
    </>
  );
};

export default PingMsg;
