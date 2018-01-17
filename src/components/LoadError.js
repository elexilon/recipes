import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import PropTypes from 'prop-types'



class LoadError extends PureComponent {
  static propTypes = {
    loaderror: PropTypes.array,
    open: PropTypes.bool,
  }

  render() {
    const { loaderror, open } = this.props
    return (
      <div>
          <Snackbar
            open={open}
            SnackbarContentProps={{ 'aria-describedby': 'message-id', }}
            message={<span id="message-id">{ loaderror }</span>}
          />
      </div>
    )
  }
}

const mapStateToProps = ({ loadError }) => ({
  loaderror: loadError,
  open: loadError.length > 0
})

export default connect(mapStateToProps)(LoadError)
