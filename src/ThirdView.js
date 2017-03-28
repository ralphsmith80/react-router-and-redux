import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ThirdView extends React.Component {
  componentWillMount() {
    console.log('mount Third View')
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps Third View')
  }
  render() {
    return (
      <Route path='/second' render={({location}) => {
        console.log('render Third View')
        return null
      }}/>
    )
  }
}

// export default ThirdView
export default connect()(ThirdView)
// export default withRouter(connect()(ThirdView))