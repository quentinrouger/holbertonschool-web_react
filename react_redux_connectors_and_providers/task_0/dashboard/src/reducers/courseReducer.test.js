// src/reducers/courseReducer.test.js
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer tests', () => {
  it('should return the default state', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual({
      courses: {},
    });
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });
    const state = courseReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });
    const action = { type: SELECT_COURSE, index: '2' };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });
    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });
    const action = { type: UNSELECT_COURSE, index: '2' };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });
    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});
