import React from 'react'
import Routes from './routes'
import './App.sass'
import LoadError from './components/LoadError'
import Loading from './components/Loading'

class App extends React.Component {

  render() {
    return (
      <div>
        <Loading />
        <LoadError />
        <Routes />
      </div>
    )
  }
}

export default App
