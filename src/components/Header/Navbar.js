import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Button
        startIcon={<HomeIcon sx={{ color: pink[500] }} fontSize="large" />}
        contained color="primary"
      >
        {/* <Button startIcon={<HomeIcon color='action'/>} > */}
        <Typography variant="h5" color="white">
          Logo
        </Typography>
      </Button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active pl-5">
            <PublicIcon color="primary" />
          </li>

          <li className="nav-item active pl-5">
            <PersonIcon color="primary" />
          </li>

          <li className="nav-item active pl-5">
            <EmailIcon color="primary" />
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active pr-3">
            <Avatar fontSize="small" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
