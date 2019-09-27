import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function Lucero() {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="baseline">
      <Avatar alt="Lucero" src={require('../../assets/Professor/lucero.jpg')} className={classes.bigAvatar} />
      <ThemeProvider theme={theme}>
        <Typography variant="h3" style={{color:'white', margin: 10}}>Lucero</Typography>
      </ThemeProvider>
    </Grid>
  );
}