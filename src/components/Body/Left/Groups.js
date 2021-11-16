import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupsIcon from '@mui/icons-material/Groups';
import './left.css'

const Groups = () => {
    return ( 
        // <div className="">
           <div className="mt-2 p-2">
           <div className="container bg-darkslate text-white">
               <div className="row p-2 GrpHvr">
                   <div className="col-2">
                        <GroupWorkIcon fontSize="small"
                        />
                   </div>
                   <div className="col-10">
                       <h6>My Groups</h6>
                   </div>
               </div>
               <div className="row p-2 GrpHvr">
                   <div className="col-2">
                        <CalendarTodayIcon fontSize="small"
                        />
                   </div>
                   <div className="col-10">
                       <h6>My Events</h6>
                   </div>
               </div>
               <div className="row p-2 GrpHvr">
                   <div className="col-2">
                        <GroupsIcon fontSize="small"
                        />
                   </div>
                   <div className="col-10">
                       <h6>My People</h6>
                   </div>
               </div>
           </div>
        </div>
     );
}
 
export default Groups;
