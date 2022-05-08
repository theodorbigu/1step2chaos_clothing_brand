import React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";
import madara from "./madara.mp4";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const [muted, setMuted] = useState(true);
  const handleToggleMute = () => setMuted((current) => !current);

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.backgroundLayer}>
        <video
          className={classes.backgroundVideo}
          loop
          autoPlay
          muted={setMuted}
        >
          <source src={madara} type="video/mp4" />
        </video>
        <button onClick={handleToggleMute} className="control">
          Unmute
        </button>
      </div>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
