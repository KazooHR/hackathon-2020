import * as React from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
  ThemeProvider
} from "@material-ui/core";
import theme from './muiTheme';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar color="primary" position="static" style={{ height: 64 }}>
          <Toolbar style={{ height: 64 }}>
            <Typography variant="h5" color="inherit">
              Talent IQ
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">{children as any}</Container>
        </ThemeProvider>
    </>
  );
};

export default Layout;
