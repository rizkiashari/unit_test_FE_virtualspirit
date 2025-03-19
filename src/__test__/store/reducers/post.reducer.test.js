import post from '../../../store/reducers/post.reducer';
import { homeActionType as actionTypes } from "../../../store/actionTypes/home.actionType";

describe('post reducer', () => {
    const initialState = {
        loading: false,
        data: [],
    };

    it('should return the initial state', () => {
        expect(post(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_REQUEST', () => {
        const action = { type: actionTypes.FETCH_REQUEST };
        const expectedState = {
            ...initialState,
            loading: true,
        };
        expect(post(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_SUCCESS', () => {
        const action = {
            type: actionTypes.FETCH_SUCCESS,
            data: { id: 1, title: 'Test Post' },
        };
        const expectedState = {
            loading: false,
            data: [{ id: 1, title: 'Test Post' }],
        };
        expect(post(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_FAILED', () => {
        const action = { type: actionTypes.FETCH_FAILED };
        const expectedState = {
            ...initialState,
            loading: false,
        };
        expect(post(initialState, action)).toEqual(expectedState);
    });

    it('should handle DELETE_POST_REQUEST', () => {
        const action = { type: actionTypes.DELETE_POST_REQUEST };
        const expectedState = {
            ...initialState,
            loading: true,
        };
        expect(post(initialState, action)).toEqual(expectedState);
    });

    it('should handle DELETE_POST_SUCCESS', () => {
        const initialStateWithData = {
            loading: false,
            data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
        };

        const action = {
            type: actionTypes.DELETE_POST_SUCCESS,
            id: 1,
        };

        const expectedState = {
            loading: false,
            data: [{ id: 2, title: 'Post 2' }],
        };

        expect(post(initialStateWithData, action)).toEqual(expectedState);
    });

    it('should handle CREATE_POST_REQUEST', () => {
        const action = { type: actionTypes.CREATE_POST_REQUEST };
        const expectedState = {
            ...initialState,
            loading: true,
        };
        expect(post(initialState, action)).toEqual(expectedState);
    });

    it('should handle CREATE_POST_SUCCESS', () => {
        const action = {
            type: actionTypes.CREATE_POST_SUCCESS,
            body: { id: 3, title: 'New Post' },
        };

        const expectedState = {
            loading: false,
            data: [{ id: 3, title: 'New Post' }],
        };

        expect(post(initialState, action)).toEqual(expectedState);
    });

    it('should handle UPDATE_POST_SUCCESS', () => {
        const initialStateWithData = {
            loading: false,
            data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
        };

        const action = {
            type: actionTypes.UPDATE_POST_SUCCESS,
            body: { id: 1, title: 'Updated Post 1' },
        };

        const expectedState = {
            loading: false,
            data: [{ id: 1, title: 'Updated Post 1' }, { id: 2, title: 'Post 2' }],
        };

        expect(post(initialStateWithData, action)).toEqual(expectedState);
    });
});