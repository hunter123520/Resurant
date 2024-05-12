import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    transition:"0.5s all",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      boxShadow: "0px 0px 3px #262626",
      color:"#262626 !important",
    },
    // border:"1px solid #262626c9",
    boxShadow: "0px 0px 2px #262626c9",
    padding:"2px",
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#262626c9",
    width:"90%",
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      transition:"0.5s all",
      '&:hover': {
        color:"#262626 !important",
    },
      width: '100%',
    //   [theme.breakpoints.up('md')]: {
    //     width: '20ch',
    //   },
    },
  }));


const SearchBox = ({placeholder="Search..."}) => {
  return (
    <div className='d-flex flex-row w-100 searchbar'>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={placeholder}
              inputProps={{ 'aria-label': 'search' }}
            />
    </Search>
    <Button  variant="contained" style={{backgroundColor:"black",fontFamily:"roboto_semi"}}>Search</Button>
    </div>
  )
}

export default SearchBox