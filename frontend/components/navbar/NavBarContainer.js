import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions'
import NavBar from './NavBar'

const mSTP = state => {
    return{
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mDTP = dispatch => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(NavBar)