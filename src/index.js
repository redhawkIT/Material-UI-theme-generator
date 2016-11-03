import React, {Component} from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import routes from './routes'
import './index.css'

import light from './themeDefault'

injectTapEventPlugin()

class Main extends Component {
  state = {
    theme: light
  }

  // toggleTheme = () => {
  //   const {theme} = this.state
  //
  //   if(theme === light) {
  //     this.setState({theme: dark})
  //     // document.getElementById("root").style.backgroundColor = '#424242'
  //   } else {
  //     this.setState({theme: light})
  //     // document.getElementById("root").style.backgroundColor = '#FAFAFA'
  //   }
  // }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
        <Router history={browserHistory} routes={routes} />
      </MuiThemeProvider>
    )
  }
}


render(<Main/>, document.getElementById('root'))
