import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)(( {theme})=> ({
    background: 'rgb(235 227 227 / 87%)',
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
     font-size: 14px;
     font-weight: 300;
     margin-left: 50px;
`


const InfoHeader = () => {
    
    const appleStore = 'https://th.bing.com/th/id/OIP.V0lOa_0dCA2k2dvZHSZeNwAAAA?w=184&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7';
    

    return(
        <Container position="static">
            <Text>
                Hello,
            </Text>
            <Typography>
                name
            </Typography>
            <Text>
                email
            </Text>
            <Box style={{display:'flex', marginLeft:'auto'}}>
                <Image src={appleStore} alt="appleStore"/>
            </Box>
        </Container>
    )
}

export default InfoHeader;