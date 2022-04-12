import { authAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_PROFILE_INFO = 'GET_PROFILE_INFO',
    SET_STATUS = 'SET_STATUS',
    INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState = {
    isInitialized: false,
    profileInfo: null,
    profileStatus: null,
    posts: [
        {
            authorId: 22988,
            author: 'datfeela',
            date: '15.01.2022',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt ex laboriosam totam ipsa, nobis et sint dicta atque a harum amet maxime esse expedita saepe doloribus quo tempore quos quidem exercitationem modi architecto accusantium? Porro facere pariatur architecto suscipit ducimus perferendis, in voluptas veniam perspiciatis dolore accusamus sint quibusdam!'
        }, {
            authorId: 5,
            author: 'Ivan Ivan 5',
            date: '01.05.2021',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem odit. Animi magni provident rerum veritatis nam iste illum dolor, neque blanditiis consectetur. Ducimus dicta facilis maxime esse incidunt, ut, excepturi ipsum sunt reiciendis similique ad sapiente exercitationem optio unde nulla sit possimus inventore rem aliquid accusantium cupiditate quos laborum pariatur! Doloribus esse facere perspiciatis veniam neque pariatur vitae iste eius fugiat nihil eos natus provident rerum, ducimus cum rem soluta quisquam aspernatur animi saepe non nisi culpa? Laudantium eius doloribus numquam repudiandae at aspernatur id distinctio vero voluptate reprehenderit deleniti, aliquid accusantium fugit dolorem! Maxime excepturi adipisci in. Odit.'
        }, {
            authorId: 3,
            author: 'Ivan Ivan 3',
            date: '01.04.2021',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus, animi nam ducimus nulla placeat dignissimos!'
        },
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        case ADD_POST:
            // debugger;
            let newPost = {
                authorId: action.author.id,
                author: action.author.name,
                date: action.date,
                text: action.text
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case SET_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;

//AC

const setInitializeSuccess = () => ({
    type: INITIALIZE_SUCCESS
})

export const setProfileInfo = (profileInfo) => ({
    type: SET_PROFILE_INFO,
    profileInfo
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const addPostAction = (text, author, date) => ({
    type: ADD_POST,
    text,
    author,
    date
})

//TC

export const addPost = (text) => (dispatch) => {
    //костыль для создания автора и даты поста без серверного api
    const date = `${new Date().toLocaleDateString()}`;

    authAPI.getUserData().then((response) => {
        profileAPI.getProfileInfo(response.data.id).then((response) => {
            let author = {
                id: response.userId,
                name: response.fullName
            }
            dispatch(addPostAction(text, author, date));
        });
    })
}

export const initializeProfile = (userId) => (dispatch) => {
    const profileInfoPromise = dispatch(getProfileInfo(userId));
    const statusPromise = dispatch(getStatus(userId));
    Promise.all([profileInfoPromise, statusPromise])
        .then(() => {
            dispatch(setInitializeSuccess())
        })
}

export const getProfileInfo = (userId) => (dispatch) => {
    return profileAPI.getProfileInfo(userId).then((response) => {
        dispatch(setProfileInfo(response))
    });
}

export const getStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response))
    });
}

export const updateStatus = (status) => (dispatch) => {
    //updating
    profileAPI.updateStatus(status).then((response) => {
        response.resultCode === 0 ? dispatch(setStatus(status)) : console.log(response);
        //update finished
    });
}
