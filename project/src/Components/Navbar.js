import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const AppWrapper = styled('div')({
  flexGrow: 1,
});

const StyledAppBar = styled(AppBar)({
  background: 'black',
  borderRadius: '8px',
  width:'900px',
  alignItems:'center'

});

const ContentWrapper = styled('div')({
    margin:'0px',
    position:'fixed',
    height:'80px',
    width:'1500px',
  backgroundImage: 'url("https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?w=1060&t=st=1700481387~exp=1700481987~hmac=b455830de575198bc4551c4fa47b18237922cfd2b4a23cf52610b99d67597478")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
});

const NavBarButton = styled(Button)({
  color: 'white',
  marginLeft: '20px',
});

const Navbar = () => {
  
    const navigate = useNavigate();

    const handleLoginClick = () => {
      // Use the navigate function for programmatic navigation
      navigate('/Login');
  };
  return (
      <ContentWrapper>
             <AppWrapper>
      <StyledAppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          <div>
            <NavBarButton variant="outlined" color="inherit" className='home'>
              Home
            </NavBarButton>
            <NavBarButton variant="outlined" color="inherit" className='home'>
              About
            </NavBarButton>
            <NavBarButton variant="outlined" color="inherit" className='home'>
              Category
            </NavBarButton>
            <NavBarButton variant="outlined" color="inherit" className='home'>
              Author
            </NavBarButton>
            <NavBarButton variant="outlined" color="inherit" className='home' onClick={handleLoginClick}>
              Login
            </NavBarButton>
          </div>
        </Toolbar>
      </StyledAppBar>   
    </AppWrapper>
      </ContentWrapper>
  );
};
export default Navbar;