import React from 'react'
import styled from 'styled-components'
import { GlobalStyles, Row, Column } from 'styles'
import { StylesProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import FadeIn from 'components/FadeIn'
import useDarkMode from 'hooks/useDarkMode'
import Switch from '@material-ui/core/Switch'
import { ThemeProvider as PrimaryThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme, { muiTheme } from 'theme'

export const LayoutStyles = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '95%')};
  margin: 10rem auto;
  max-width: 1000px;
`

const StyledAppBar = styled(AppBar)`
  transition: all 0.6s ease-in-out;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary} !important;
  box-shadow: none !important;
  min-height: 180px;
`

const Layout = ({ select, children, maxWidth }) => {
  const [themeVariant, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  }

  return (
    <PrimaryThemeProvider theme={theme[themeVariant]}>
      <MuiThemeProvider theme={muiTheme[themeVariant]}>
        <GlobalStyles />
        <FadeIn>
          <StyledAppBar position="fixed">
            <Column style={{ padding: '2rem' }}>
              <h1>IHME data from April 5</h1>
              <div style={{ marginTop: '2rem' }}>{select}</div>
            </Column>
            {/* <Switch onClick={toggleThemeVariant} /> */}
          </StyledAppBar>
          <LayoutStyles maxWidth={maxWidth}>
            <StylesProvider>
              <GlobalStyles />
              {children}
            </StylesProvider>
          </LayoutStyles>
        </FadeIn>
      </MuiThemeProvider>
    </PrimaryThemeProvider>
  )
}

export default Layout
