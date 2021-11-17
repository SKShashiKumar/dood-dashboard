import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LikeIcon from "@mui/icons-material/ThumbUp";
import Comment from "@mui/icons-material/Comment"
import { Card } from "@mui/material";
const Posts = () => {
  const datas = [{
    'imgName':'img/avatar2.png',
    'altName':'John Doe',
  'userName':'John Doe'}
  ]
  return (
      <div className="bg-light mt-3">
        <Card>
    <div className="container p-3 ">
      <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div className="col-4">
              <img
                src={datas[0].imgName}
                alt={datas[0].altName}
                height="50px"
                width="50px"
                className="mx-auto rounded-circle"
              />
            </div>
            <div className="col-8">
              <Typography variant="h6">{datas[0].userName}</Typography>
            </div>
          </div>
        </div>
        <div className="col">
          <Typography variant="subtitle2" align="right" color="gray">
            1 Min
          </Typography>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <Typography variant="body2" align="justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            reprehenderit porro sequi doloribus repellat beatae perspiciatis
            recusandae aspernatur sapiente optio in accusantium, fugiat eos
            labore autem? Necessitatibus fugiat labore recusandae. Lorem ipsum,
            dolor sit amet consectetur.
          </Typography>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src="img/lights.jpg" alt="lights" width="100%" height="100%" />
        </div>
        <div className="col-md-6">
          <img src="img/nature.jpg" alt="lights" width="100%" height="100%" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="row">
            <div className="col">
              <Button variant="contained" color="inherit" startIcon={<LikeIcon/>}>
                Like
              </Button>
            </div>
            <div className="col">
              <Button variant="contained" color="inherit" startIcon={<Comment/>} >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Card>

    <div className="bg-light mt-3">
        <Card>
    <div className="container p-3">
      <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div className="col-4">
              <img
                src="img/avatar2.png"
                alt="John"
                height="50px"
                width="50px"
                className="mx-auto rounded-circle"
              />
            </div>
            <div className="col-8">
              <Typography variant="h6">John Doe</Typography>
            </div>
          </div>
        </div>
        <div className="col">
          <Typography variant="subtitle2" align="right" color="gray">
            1 Min
          </Typography>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <Typography variant="body2" align="justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            reprehenderit porro sequi doloribus repellat beatae perspiciatis
            recusandae aspernatur sapiente optio in accusantium, fugiat eos
            labore autem? Necessitatibus fugiat labore recusandae. Lorem ipsum,
            dolor sit amet consectetur.
          </Typography>
        </div>
      </div>
      
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="row">
            <div className="col">
              <Button variant="contained" color="inherit" startIcon={<LikeIcon/>}>
                Like
              </Button>
            </div>
            <div className="col">
              <Button variant="contained" color="inherit" startIcon={<Comment/>} >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Card>
    </div>

    <div className="bg-light mt-3">
        <Card>
    <div className="container p-3">
      <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div className="col-4">
              <img
                src="img/avatar2.png"
                alt="John"
                height="50px"
                width="50px"
                className="mx-auto rounded-circle"
              />
            </div>
            <div className="col-8">
              <Typography variant="h6">John Doe</Typography>
            </div>
          </div>
        </div>
        <div className="col">
          <Typography variant="subtitle2" align="right" color="gray">
            1 Min
          </Typography>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <Typography variant="body2" align="justify">
          Have you seen this?
          </Typography>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <img src="img/nature.jpg" alt="lights" width="100%" height="100%" />
        </div>
      </div>
      <div className="row">
          <div className="col-md-12 mt-3">
          <Typography variant="body2" align="justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            reprehenderit porro sequi doloribus repellat beatae perspiciatis
            recusandae aspernatur sapiente optio in accusantium, fugiat eos
            labore autem? Necessitatibus fugiat labore recusandae. Lorem ipsum,
            dolor sit amet consectetur.
          </Typography>
          </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="row">
            <div className="col">
              <Button variant="contained" color="inherit" startIcon={<LikeIcon/>}>
                Like
              </Button>
            </div>
            <div className="col">
              <Button variant="contained" color="inherit" startIcon={<Comment/>} >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Card>
    </div>
    </div>
  );
};

export default Posts;
