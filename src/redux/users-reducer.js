const FOLLOW = 'FOLLOW';

const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Serg', status: 'Whate is you name ?', location: {city: 'Kiev',  country: 'Ukraine'}},
        {id: 2, followed: true, fullName: 'Frend', status: 'Whate is you name ?', location: {city: 'Warsawa', country: 'Poland'}},
        {id: 3, followed: false, fullName: 'Lubach', status: 'Whate is you name ?', location: {city: 'Praha', country: 'Chehia'}}
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                        return u;
                    })
                }
                case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false}
                        }
                        return u;
                    })
                }

                default:
                return state;
            }
    }

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) =>
    ({type: UNFOLLOW, userId});

export default usersReducer;

