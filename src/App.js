import React from 'react';
//importaciones propias
import { AppRouter } from "./router";
import { theme } from "./styles";
import { ThemeProvider, CssBaseline } from "@material-ui/core";


export default function App (){
  return (
    <>
    <CssBaseline/>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>

  )
}
