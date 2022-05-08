import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography
            style={{
              fontFamily: '"Press Start 2P"',
              textAlign: "center",
              fontSize: "14px",
            }}
            className="classes.font"
            gutterBottom
            variant="h6"
            component="h2"
          >
            {product.name}
          </Typography>
          <Typography
            style={{
              fontFamily: '"Press Start 2P"',
              textAlign: "center",
              fontSize: "14px",
            }}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {product.price.formatted} lei
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
