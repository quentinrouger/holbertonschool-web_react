import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer, login } from "../actions/uiActionCreators";
import { initialState, uiReducer } from "./uiReducer";

describe('Test suite for uiReducer', () => {
    it('Tests uiReducer when no action is passed', () => {
        expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
    });
    it('Tests uiReducer when the action SELECT_COURSE is passed', () => {
        const action = selectCourse();
        expect(uiReducer(undefined, action).toJS()).toEqual(initialState.toJS());
    });
    it('Tests uiReducer when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const expectedState = {
            ...initialState.toJS(),
            isNotificationDrawerVisible: true
        };
        const action = displayNotificationDrawer();
        expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
    });
    it('Tests uiReducer when the action LOGIN is passed', () => {
        const expectedState = {
            ...initialState?.toJS(),
            user: {
                email: 'hello@world.com',
                password: 'Test123!'
            }
        };
        const action = login('hello@world.com', 'Test123!');
        expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
    });
});
