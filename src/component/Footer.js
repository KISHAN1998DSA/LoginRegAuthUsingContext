import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
const style = {
    backgroundColor: "dodgerBlue",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%"
  };

const Footer = () => {
    
  return (
    <>
        <Grid style={style}>
            <Divider/>
            <Typography variant='h4'> This is Footer Area</Typography>
        </Grid>
    </>
  )
}

export default Footer