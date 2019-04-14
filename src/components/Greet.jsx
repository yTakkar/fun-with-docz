import PropTypes from 'prop-types'

const Greet = props => `Hello, ${props.name}`

Greet.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greet
