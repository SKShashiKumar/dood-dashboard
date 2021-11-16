import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
const Addposts = () => {
    return ( 
            <div className="container pt-3 pb-3 pl-2 pr-2 bg-light">
                <div className="row">
                    <div className="col-12">
                        <Typography variant="body1" color="gray">
                            Social Media template by w3.css
                        </Typography>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12  ">
                    <TextField id="filled-standard" value="Status: Feeling Blue" variant="standard" fullWidth focused="true"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <Button startIcon={<EditIcon/>} variant="contained" color="grey">Post</Button>
                    </div>
                </div>
            </div>
     );
}
 
export default Addposts;