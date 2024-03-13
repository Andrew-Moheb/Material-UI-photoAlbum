import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

function GridItem() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            Heading
          </Typography>
          <Typography gutterBottom variant="h5">
            This is a media card.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Views
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default GridItem;
