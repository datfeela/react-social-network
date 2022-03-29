import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST',
    INPUT_CHANGE = 'INPUT-CHANGE',
    SET_PROFILE_INFO = 'GET_PROFILE_INFO',
    SET_STATUS = 'SET_STATUS'

let initialState = {
    profileInfo: null,
    profileStatus: null,
    inputText: '',
    posts: [
        {
            authorId: 0,
            author: 'Ivan Ivan',
            date: 'Jul 17, 2022',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus, animi nam ducimus nulla placeat dignissimos!'
        },
        {
            authorId: 2,
            author: 'Ivan Ivan 2',
            date: 'Jun 15, 2022',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, obcaecati.'

        }, {
            authorId: 4,
            author: 'Ivan Ivan 4',
            date: 'Jun 14, 2022',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt ex laboriosam totam ipsa, nobis et sint dicta atque a harum amet maxime esse expedita saepe doloribus quo tempore quos quidem exercitationem modi architecto accusantium? Porro facere pariatur architecto suscipit ducimus perferendis, in voluptas veniam perspiciatis dolore accusamus sint quibusdam!'
        }, {
            authorId: 5,
            author: 'Ivan Ivan 5',
            date: 'Jun 11, 2022',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem odit. Animi magni provident rerum veritatis nam iste illum dolor, neque blanditiis consectetur. Ducimus dicta facilis maxime esse incidunt, ut, excepturi ipsum sunt reiciendis similique ad sapiente exercitationem optio unde nulla sit possimus inventore rem aliquid accusantium cupiditate quos laborum pariatur! Doloribus esse facere perspiciatis veniam neque pariatur vitae iste eius fugiat nihil eos natus provident rerum, ducimus cum rem soluta quisquam aspernatur animi saepe non nisi culpa? Laudantium eius doloribus numquam repudiandae at aspernatur id distinctio vero voluptate reprehenderit deleniti, aliquid accusantium fugit dolorem! Maxime excepturi adipisci in. Odit.'
        }, {
            authorId: 3,
            author: 'Ivan Ivan 3',
            date: 'Apr 1, 2022',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quae nostrum provident cum, nemo itaque, distinctio excepturi molestiae repellat fuga ipsum ea voluptate temporibus, animi nam ducimus nulla placeat dignissimos!'
        },
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                authorId: 4,
                author: 'Ivan Ivan 4',
                date: `${new Date().getMonth()} ${new Date().getDate()}, ${new Date().getFullYear()}`,
                text: state.inputText
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                inputText: ''
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputText: action.inputText
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

export const setProfileInfo = (profileInfo) => ({
    type: SET_PROFILE_INFO,
    profileInfo
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const addPost = () => ({
    type: ADD_POST
})

export const newPostInputChange = (text) => ({
    type: INPUT_CHANGE,
    inputText: text
})



//TC

export const getProfileInfo = (userId) => (dispatch) => {
    profileAPI.getProfileInfo(userId).then((response) => {
        dispatch(setProfileInfo(response))
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
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

// export const getProfileInfo = (userId) => {
//     return (dispatch) => {
//         profileAPI.getProfileInfo(userId).then((response) => {
//             dispatch(setProfileInfo(response))
//         });
//     }
// }
