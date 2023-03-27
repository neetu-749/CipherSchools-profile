import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)(( {theme})=> ({
    background: '#e5e4e2',
    // display: 'flex',
    // color: '#FFFFFF',
    // alignItems: 'center',
    height: 105,
    // marginBottom: 30,
    // [theme.breakpoints.down('md')]: {
    //     display: 'none'
    // }
}));


const Image = styled('img')({
    height: 35,
    paddingBottom: 20,
    // '&:last-child':{
    //     margin: '0 5px 0 20px'
    // }
})

const Text= styled(Typography)`
     font-size: 18px;
     line-height: 1.25;
     font-weight: 400;
     margin-left: 0;
`

const TextName= styled(Typography)`
     font-size: 22px;
     line-height: 1.75;
     margin: 0;

`


const InfoHeader = () => {

    return(
        <Container position="static" marginLeft={8}>
            <div style={{ marginLeft: "1.5rem", marginRight: "70rem" }}>
                <Text style={{ marginLeft: "1.5rem", marginRight: "70rem", paddingTop: "0.5rem" }}>Hello,</Text>
                <TextName style={{ marginLeft: "1.5rem", marginRight: "70rem" }}><b>Neetu</b></TextName>
                <Text style={{ marginLeft: "1.5rem", marginRight: "70rem" }}>chaudharyneetu749@gmail.com</Text>
            </div>
        </Container>
    )
}

export default InfoHeader;