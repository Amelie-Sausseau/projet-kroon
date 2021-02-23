import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: '#f1f1f1',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheaderr"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Mes commentaires ↓" />
          {open ? <List /> : <Collapse />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Mon commentaire n°1" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Mon commentaire n°2" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Mon commentaire n°3" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
