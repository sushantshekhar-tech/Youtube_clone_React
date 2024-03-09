//In React while using the material Ui The sx prop is used to give the styling to the the component we are using in the material

import React from "react";
import { Stack,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{display: 'flex', alignItems:'center'}}>
      <img src={logo} alt='logo' height={45}></img>
      <Typography p={3} variant="subtitle1" fontSize={35} fontWeight='bold' color='#FFF'>
YOUTUBE CLONE
      </Typography>
  
    </Link>
   
  
    <SearchBar/>
  </Stack>
);

export default Navbar;
