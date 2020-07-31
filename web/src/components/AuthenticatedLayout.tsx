import * as React from "react";

import {
  Container,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import theme from "./muiTheme";

const AuthenticatedLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <img src="./1440.png" style={{ position: 'absolute', width: '1440px', height: 'auto'}}/>
      <Container maxWidth="lg">{children as any}</Container>
    </ThemeProvider>
  );
};

export default AuthenticatedLayout;