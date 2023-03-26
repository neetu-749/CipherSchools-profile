import { Box, Typography, styled, Button } from '@mui/material';

import App from './Heatmap';
import Information from './Information';
import OnTheWeb from './OnTheWeb';
import Password from './password';



const Profile = () => {
    return (
        <>
        <Box>
            <Typography padding={2}>
                <b>ABOUT ME </b>
                <Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button>
            </Typography>
            
            <form>
                <textarea name='' id='' placeholder='Add something about you.' rows={8} cols={160}></textarea>
                <Box placeholder='Add something about you.' padding={2} paddingTop={2}></Box>
            </form>
            <hr width={1199}/>
            <Typography padding={2}>
                <b>CIPHER MAP</b>
            </Typography>
            <App padding={2}  />
            <hr width={1199}/>
            <Typography padding={2}>
                <b>ON THE WEB </b>
                <Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button>
            </Typography>
            <OnTheWeb/>
            <hr width={1199}/>
            <Typography padding={2}>
                <b>PROFESSIONAL INFORMATION </b>
                <Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button>
            </Typography>
            <Information />
            <hr width={1199}/>
            <Typography padding={2}>
                <b>PASSWORD & SECURITY </b>
                <Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Change</Button>
            </Typography>
            <Password />
            <Typography padding={2}>
                <b>INTERESTS </b>
                <Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button>
            </Typography>
        </Box> 
        </>   
    )
}

export default Profile;