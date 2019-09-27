import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10,
  },
});

export default function Engenharias(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative UnB"
          height="240"
          image={require('../../assets/FT/ft.jpg')}
          title="Contemplative Unb"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Faculdade de Tecnologia
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            FT é de Engenharias da UnB 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
        <Button size="small" color="primary">
          Professores
        </Button>
      </CardActions>
    </Card>
  );
}
