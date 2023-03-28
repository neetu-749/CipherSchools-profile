import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import InterestsIcon from '@mui/icons-material/Interests';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const SideBar = () => {

  let sideBarElement = [
    { title: "Dashboard", img: <DashboardIcon />, selected: "white" },
    { title: "My Profile", img: <PersonIcon />, selected: "#F3912E" },
    { title: "Enrolled Courses", img: <LaptopChromebookIcon />, selected: "white" },
    { title: "Wishlist", img: <InterestsIcon />, selected: "white" },
    { title: "Liked Videos", img: <ThumbUpIcon />, selected: "white" },
  ];
  return (
    <div style={{ backgroundColor: "white", marginTop: "0rem", height: "110%", width: "100%" }}>
      {sideBarElement.map((ele) => {
        return (
          <div className="rightSideBarEle" style={{ width:'100%',backgroundColor: ele.selected ,marginLeft:'0%'}}>
            <div style={{ width:'100%',display: "flex", alignItems: "center" ,marginLeft:'5%'}}>{ele.img}</div>
            <div style={{width:'100%', display: "flex", alignItems: "center" ,marginLeft:'2%'}}>{ele.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;