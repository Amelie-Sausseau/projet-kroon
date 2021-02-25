import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  container: {
    width: 40,
    },
  avatar: {
    margin: 10,
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="flex-start">
      <Avatar alt="Remy Sharp" src="" className={classes.avatar} />
    </Grid>
  );
}

