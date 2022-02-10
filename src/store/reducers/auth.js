import { AUTHENTICATE } from "../actions/auth";

const initialState = {
    username: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { username: action.username };
        default:
            return state;
    }
};
