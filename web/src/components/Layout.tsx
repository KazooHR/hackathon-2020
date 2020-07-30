import * as React from "react";

import {
  AppBar,
  CardMedia,
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
          <CardMedia style={{ height: 64 }} image={require('web/public/bg-overlay.png')}>
            <Toolbar style={{ height: 64 }}>
              <Typography variant="h5" color="inherit">
                Talent IQ
              </Typography>
            </Toolbar>
          </CardMedia>
        </AppBar>
        <Container maxWidth="sm">{children as any}</Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
