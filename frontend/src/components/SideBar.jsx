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
    <div style={{ backgroundColor: "white", marginTop: "1rem", height: "73vh", width: "13%" }}>
      {sideBarElement.map((ele) => {
        return (
          <div className="rightSideBarEle" style={{ backgroundColor: ele.selected }}>
            <div style={{ display: "flex", alignItems: "center" }}>{ele.img}</div>
            <div style={{ display: "flex", alignItems: "center" }}>{ele.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;