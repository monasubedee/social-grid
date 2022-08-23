import { AppBar, Badge, IconButton, Toolbar, Typography,Grid, Menu, MenuItem, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { AccountCircle, MoreVert, Notifications, Search } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import  './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import LeftSide from '../LeftSide/LeftSide';


const Navbar = (props) => {
    const [menuOpen,setMenuOpen] = useState(false);
    const drawerWidth = 240;

    const { window } = props;
    const [mobileOpen,setMobileOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <LeftSide />
            {/* <Toolbar />
            <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;
   

    const handleMenuOpen = () => {
        setMenuOpen(prev => !prev);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu id={menuId} open={menuOpen} onClose={handleMenuClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )
    
    const mobileMenuId = 'primary-search-mobile-account-menu';
    const renderMobileMenu = (
        <Menu id={mobileMenuId} open={menuOpen} onClose={handleMenuClose} anchorOrigin={{vertical:'top',horizontal:'right'}} >
            <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <Notifications />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <Link to="auth">
            <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <AccountCircle style={{color:'#000'}} />
                    </Badge>
                </IconButton>
                <p style={{color:'#000'}}>Profile</p>
            </MenuItem>
            </Link>   
        </Menu>
    )
    return(
        <div>
            <Grid container display='flex'>
                <Grid item>
                <AppBar>
                <Toolbar>
                    <Box sx={{ display: { xs: 'block', sm: 'none' }}}>
                        <IconButton onClick={handleDrawerToggle} sx={{mr:2}} size="large" edge="start" color="inherit">
                            <MenuIcon />
                    </IconButton>
                    </Box>    
                   <Typography sx={{mr:{md:2,xs:0},fontSize:{md:'19px',xs:'16px'}}} variant="h6" component="div">
                     MNSocial
                   </Typography>
                 <Box sx={{width:{xs:'55%',md:'70%'},ml:{xs:'-5px'},mr:{xs:'12px'}}}>
                 <div className='searchContainer'>      
                      <div  className='searchIcon' > 
                       <Search  color="primary" />
                      </div>
                       <div className='searchInputWrapper'>
                       <input className='searchInput' type="text" placeholder='Search Me' />
                       </div>              
                  </div>
                 </Box>    
                   <Box sx={{flexGrow:1}} />
                   <Box sx={{display:{xs:'none',md:'flex'}}}>
                   <IconButton size="large" color="inherit">
                       <Badge badgeContent={17} color="error">
                           <Notifications />
                       </Badge>
                   </IconButton>
                  
                  <Link to="auth">
                   <IconButton onClick={handleMenuOpen} size="large" color='inherit'>
                       <AccountCircle style={{color:'#fff'}} />
                   </IconButton>
                   </Link> 
                   </Box>
                   <Box className="moreIcon" sx={{display:{xs:'block',md:'none'},ml:{xs:'30px'}}}>
                       <IconButton onClick={handleMenuOpen} size="large" color="inherit">
                          <MoreVert />
                       </IconButton>
                   </Box>
               </Toolbar>
           </AppBar>
           <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer> */}
      </Box>
           {renderMenu}
           {renderMobileMenu}

            </Grid>
            </Grid>
          
        </div>
          
        
    )
}


export default Navbar;