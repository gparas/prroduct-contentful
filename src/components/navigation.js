import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
        prroducts
      </Typography>
      <Button component={Link} to="/" color="inherit">
        Home
      </Button>
      <Button component={Link} to="/blog/" color="inherit">
        Blog
      </Button>
    </Toolbar>
  </AppBar>
);
