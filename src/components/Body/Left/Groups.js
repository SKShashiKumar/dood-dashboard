import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupsIcon from '@mui/icons-material/Groups';

const Groups = () => {
    return ( 
        <div className="bg-light mt-3 pt-3">
           <div className="container">
               <div className="row">
                   <div className="col-2">
                        <GroupWorkIcon/>
                   </div>
                   <div className="col-10">
                       <h5>My Groups</h5>
                   </div>
               </div>
               <div className="row">
                   <div className="col-2">
                        <CalendarTodayIcon/>
                   </div>
                   <div className="col-10">
                       <h5>My Events</h5>
                   </div>
               </div>
               <div className="row">
                   <div className="col-2">
                        <GroupsIcon/>
                   </div>
                   <div className="col-10">
                       <h5>My People</h5>
                   </div>
               </div>
           </div>
        </div>
     );
}
 
export default Groups;
