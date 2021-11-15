import Typography from "@mui/material/Typography";
const Posts = () => {
  return (
    <div className="container mt-5">
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
    <div className="row">
        <div className="col-md-6">
            <img src="" alt="" />
        </div>
    </div>
    </div>
  );
};

export default Posts;
