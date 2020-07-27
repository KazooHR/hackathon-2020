import * as React from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography variant="h5" color="inherit">
            Talent IQ
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">{children as any}</Container>
    </>
  );
};

export default Layout;
