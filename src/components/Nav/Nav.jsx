import { AppBar, Box, Menu, Toolbar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { userService } from '../../../services';
import logo from "../../../assets/logo.svg";
import Image from 'next/image';
import styles from "../../../styles/Home.module.css";
import CategoryItem from './CategoryItem';
import categories from './data';

export { Nav };
import { Navcontainer } from "../../../styles/styledComponents";

function Nav() {

    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const isMenuOpen = Boolean(anchorEl);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    if (!user) return null;

    const handleMenuClose = () => {  
        setAnchorEl(null);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={()=>{handleMenuClose();}}
        >       
        </Menu>
      );    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#010d11" }}>
                <Toolbar className={styles.Navtolbar}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                        <div className={styles.logoPrincipalnav}>
                        <Image src={logo} alt="Logo" width="350px" />
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            {renderMenu}
    <Navcontainer>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Navcontainer>
        </Box>
    );
}