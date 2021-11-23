import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Card } from "@mui/material";
import React,{useState} from 'react';
import './center.css'
const Addposts = () => {

  const [addPost, setAddpost] = useState("Status: Feeling Blue");

  
  return (
    <div className="bg-light">
      <Card>
        <div className="container-fluid pt-3 pb-3 pl-3 pr-2 ">
          <div className="row">
            <div className="col-12">
              <Typography variant="body1" color="gray">
                Social Media template by w3.css
              </Typography>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12  ">
              <input
                value={addPost}
                onChange={e => setAddpost(e.target.value)} 
                id = 'addPost'
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <Button startIcon={<EditIcon />} variant="contained" className="btnPost" color="info">
                Post
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Addposts;
