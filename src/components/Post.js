import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 16 ,
  },
  media: {
    height: 250,
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/photo/krijal.jpg"
            title="about Krijal"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Krijal
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Krijal was born on 10th December 2018. He is son of Krishna and Bishnu. He is very active boy.
              He likes to play football with his dad
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>


    </div>
  )
}

export default Post
