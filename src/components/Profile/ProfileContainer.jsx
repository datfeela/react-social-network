import { connect } from "react-redux";
import { selectAuthUserId, selectIsAuth } from "../../redux/authSelectors";
import { selectPosts, selectProfileInfo, selectStatus} from "../../redux/profilePageSelectors";
import { initializeProfile, updateStatus, addPost } from "../../redux/profilePageReducer";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    return {
        profileInfo: selectProfileInfo(state),
        profileStatus: selectStatus(state),
        posts: selectPosts(state),
        authUserId: selectAuthUserId(state),
        isAuth: selectIsAuth(state),
    };
};

let dispatchObj = {
    initializeProfile,
    updateStatus,
    addPost,
};

export default connect(mapStateToProps, dispatchObj)(Profile)
