import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import {requestGroups} from './reducers'

import FirstView from './FirstView'
import SecondRoute from './SecondView'
import ThirdRoute from './ThirdView'

import FirstViewLink from './FirstViewLink'
import SecondViewInput from './SecondViewInput'

class App extends Component {
  render() {
    return (
      <main className='App'>
        <section className='parent' onClick={() => {
            console.log('parent click')
            this.props.getGroups('groups')
          }}>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
          </header>
          <Link to='/'>Home</Link>
          <FirstViewLink />
          <SecondViewInput />
          <ThirdRoute />
          <FirstView />
          <SecondRoute />
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: (resolved) => {
      dispatch(requestGroups(resolved))
    }
  }
}
// export default App
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))