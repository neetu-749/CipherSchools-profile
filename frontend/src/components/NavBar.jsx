import { AppBar, Toolbar, styled, Typography, Autocomplete, TextField } from '@mui/material'
import { Menu } from '@mui/icons-material';
import  UserForm  from './Dropdown';



const StyledHeader = styled(AppBar)`
    background: white;
    height: 60px;
`;

const MenuIcon = styled(Menu)`
    color: #000;
`;

const Text = styled(Typography)`
    color: #000;
    padding-left: 10px;
    padding-right: 16px;
`;

const Image = styled('img')({
    height: 33,
    paddingTop: 9,
    marginLeft: 20,
    paddingBottom: 6
});


const NavBar = () => {

    const url =`https://media.licdn.com/dms/image/C560BAQEQ038Ip-LeFA/company-logo_200_200/0/1640520529390?e=2147483647&v=beta&t=NCCFSv2w9GArTHMN8QiDZ9Y4PjfFStEg9ncA18ySpYs`;
    

    return (
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt='logo'/>
                <Text><b> <a href='https://www.cipherschools.com/courses' style={{textDecoration:'none', fontWeight:'light', fontSize:20, textDecorationColor:'#000'}}>CipherSchools</a> </b></Text>
                <UserForm />
            </Toolbar>
        </StyledHeader>
    )
}

export default NavBar;