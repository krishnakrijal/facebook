import { AppBar, InputBase, Toolbar, Typography, Badge, Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const useStyles = makeStyles((theme) => ({
  tool: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  typo: {
    display: 'flex',
  },

  bis: {
    display: 'inline',
    [theme.breakpoints.down(600)]: {
      display: 'none',
    }
  },
  search: {
      display: "flex",
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: '50%',
      [theme.breakpoints.down(600)]: {
        display: (props) => props.open ? "flex" : "none",
        width:'70%'
    }

  },
  input: {
    color: 'black',
    marginLeft: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    }
    },
  icon: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: 'center'

  },
  iconBut: {
    color: 'white',
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    },
  badgeIcon: {
    marginRight: theme.spacing(2)
  },

}));

const Bar = () => {
  const [open, setOpen]= useState(false);
  const classes = useStyles({open});
  
  return (
    <AppBar position='static'>
      <Toolbar className={classes.tool}  >
        <div className={classes.typo}>
          <Typography varient="h6" >Krijal</Typography>
          <Typography varient="h6" className={classes.bis}>Bishnu</Typography>
        </div>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase className={classes.input} />
          <CancelIcon className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icon}>
          <IconButton className={classes.iconBut} onClick={() => setOpen(true)}><SearchIcon /></IconButton>
          
          < Badge className={classes.badgeIcon} color="error" badgeContent={4}>
            <MailIcon />
          </Badge>
          < Badge className={classes.badgeIcon} color="error" badgeContent={5}>
            <NotificationsNoneIcon />
          </Badge>
          <Avatar alt="photo" src="/photo/krijal.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Bar
