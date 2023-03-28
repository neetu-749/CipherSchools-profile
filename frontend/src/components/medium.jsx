import { Box, Typography, styled, Button } from '@mui/material';

import Information from "./Information";
import OnTheWeb from "./OnTheWeb";
import Password from "./password";
import App from './Heatmap';


const Medium = () => {
    return (
        <div  >
            <Typography padding={0}>
                <div style={{display:'flex', paddingBottom: 10, justifyContent: 'space-between'}}>
                    <div ><b>ABOUT ME </b></div>
                    <div><Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button></div>
                </div>  
            </Typography>
            
            <form>
                <textarea name='' id='' placeholder='Add something about you.' rows={8} cols={152}></textarea>
                <Box placeholder='Add something about you.' padding={2} paddingTop={2}></Box>
            </form>
            <hr width={1134}/>

            <Typography paddingTop={4}>
                <div style={{display:'flex', paddingBottom: 10, justifyContent: 'space-between'}}>
                    <div ><b>CIPHER MAP </b></div>
                    <div><Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button></div>
                </div>  
            </Typography>
            <App padding={2}  />
            <hr width={1134}/>

            <Typography paddingTop={4}>
                <div style={{display:'flex', paddingBottom: 10, justifyContent: 'space-between'}}>
                    <div ><b>ON THE WEB</b></div>
                    <div><Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button></div>
                </div>  
            </Typography>

            <OnTheWeb/>

            <hr width={1134}/>
            <Typography paddingTop={4}>
                <div style={{display:'flex', paddingBottom: 10, justifyContent: 'space-between'}}>
                    <div ><b>PROFESSIONAL INFORMATION</b></div>
                    <div><Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button></div>
                </div>
            </Typography>

            <Information />
            <hr width={1134}/>
            <Typography paddingTop={4}>
                <div style={{display:'flex', paddingBottom: 10, justifyContent: 'space-between'}}>
                    <div ><b>PASSWORD & SECURITY</b></div>
                    <div><Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>CHANGE</Button></div>
                </div>  
            </Typography>

            <Password />

            <Typography paddingTop={4}>
                <div style={{display:'flex', paddingBottom: 10, justifyContent: 'space-between'}}>
                    <div ><b>INTERESTS</b></div>
                    <div><Button variant="contained" style={{color:'#ffffff', background:'#f3912e', font:13, height: 28, width: 80 }}>Edit</Button></div>
                </div>  
            </Typography>

        </div>
    )
}

export default Medium;