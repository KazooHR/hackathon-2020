import * as React from "react";

import { Text, Button, IconButton } from "@kazoohr/confetti";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
  ThemeProvider
} from "@material-ui/core";
import theme from "./muiTheme";

const AuthenticatedLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
            <IconButton
              icon="hamburger"
              iconSize={24}
              className={"menuButton"}
            />
            <Typography variant="h5" color="inherit">
              Talent IQ Demo
            </Typography>
            <Button
              variant={"feature_inverted"}
              href={"/admin"}
              className={"adminButton"}
              size="large"
            >
              <Text
                className={""}
                size={"small"}
                data-testid="admin-link-text"
              >
                {"admin"}
              </Text>
            </Button>
          </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className={"mainContainer"}>{children as any}</Container>
    </ThemeProvider>
  );
};

export default AuthenticatedLayout;
