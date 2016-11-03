import App from './components/App.jsx'
import Home from './components/Home.jsx'

const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      component: Home
    }
  ]
}

export default routes
