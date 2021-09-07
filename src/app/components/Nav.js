import React,{useState} from 'react';
import {AppBar,Toolbar,Button,Typography,Menu,MenuItem} from "@material-ui/core"
import {Link} from "react-router-dom"
import {Close} from '@material-ui/icons'; 
import MenuIcon from '@material-ui/icons/Menu'; 


const Nav = () => {

    const [anchorEl,setAnchorEl] = useState(null)

    return ( 
        <AppBar style={{boxShadow:"none"}} position="static">
                <Toolbar style={{fontSize:"1.2rem"}} className="font-thin pal-bg-2">
                    <div className="flex-grow-1">
                        <a href="/">
                            <img className="logo" src={"/img/mas.svg"} />
                        </a>
                    </div>
                    
                    <div id="large-menu">
                        <a className="nav-link pal-3 white mx-3" href="/#about">
                            Sobre mí
                        </a>
                        <Link className="nav-link pal-3 white mx-3" to="/portfolio">
                            Portfolio
                        </Link>
                        <a className="nav-link pal-3 white ml-3 mr-5" href="/#contact">
                            Contacto
                        </a>
                    </div>
                
                    <div id="burger-menu">
                    <MenuIcon onClick={(e)=>{
                            setAnchorEl(e.currentTarget)
                        }}
                    />
                    <Menu 
                        keepMounted
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={()=>{setAnchorEl(null)}}    
                    > 
                        <MenuItem 
                            onClick={
                                ()=>location.href = '/#about'    
                            }
                        >
                            Sobre mí
                        </MenuItem>
                        <MenuItem 
                            onClick={
                                ()=>location.href = '/portfolio'    
                            }
                        >
                            Portfolio
                        </MenuItem>
                        <MenuItem 
                            onClick={
                                ()=>location.href = '/#contact'    
                            }
                        >
                            Contacto
                        </MenuItem>
                    </Menu> 
                    </div>
                </Toolbar>
            </AppBar>
    );
}
 
export default Nav;