import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const styles = theme => ({
  hero: {
    position: 'relative',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
});

const Hero = ({ data, classes }) => (
  <div className={classes.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={classes.heroContent}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="inherit"
        gutterBottom
      >
        {data.name}
      </Typography>
      <Typography variant="h6" align="center" color="inherit" paragraph>
        {data.title}
      </Typography>
      <Typography align="center" color="inherit" paragraph>
        {data.shortBio.shortBio}
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(Hero);
