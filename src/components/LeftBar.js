import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListIcon from '@material-ui/icons/List';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import CollectionsIcon from '@material-ui/icons/Collections';
import PlaceIcon from '@material-ui/icons/Place';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme=>({
    container:{
      height:'100vh',
      paddingTop:theme.spacing(2),
      position:'sticky',
      backgroundColor: theme.palette.primary.main,
      top: 0,
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "white",
        color: "#555",
        border: "1px solid #ece7e7",
      },
    },
    item:{
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.up(600)]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
          },
    },
    icon:{
     marginRight:theme.spacing(2),
     [theme.breakpoints.up(600)]: {
        fontSize: "18px",
      },
    },
    text:{
        fontWeight:500,
        [theme.breakpoints.down(600)]: {
            display: "none",
          },
    }
}))
const LeftBar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
          <div className={classes.item}>
           <HomeIcon className={classes.icon}/>
           <Typography variant='body2' className={classes.text}>Homepage</Typography>
          </div> 
          <div className={classes.item}>
              <SupervisorAccountIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Friends</Typography>
          </div>
          <div className={classes.item}>
              <ListIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Lists</Typography>
          </div>
          <div className={classes.item}>
            <CameraAltIcon className={classes.icon}/>
            <Typography variant='body2' className={classes.text}>Camera</Typography>
         </div>
          <div className={classes.item}>
              <VideoCallIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Videos</Typography>
              </div>
          <div className={classes.item}>
              <AppsIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Apps</Typography>
          </div>
          <div className={classes.item}>
              <CollectionsIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Collections</Typography>
          </div>
          <div className={classes.item}>
              <PlaceIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Market Place</Typography>
          </div>
          <div className={classes.item}>
              <SettingsIcon className={classes.icon}/>
              <Typography variant='body2'className={classes.text}>Setting</Typography>
          </div>
          <div className={classes.item}>
              <ExitToAppIcon className={classes.icon}/>
              <Typography variant='body2' className={classes.text}>Logout</Typography>
          </div>

        </Container>
    )
}

export default LeftBar
