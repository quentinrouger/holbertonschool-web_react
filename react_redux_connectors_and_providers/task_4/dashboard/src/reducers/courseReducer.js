// src/reducers/courseReducer.js
import { FETCH_COURSES_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  courses: {},
});

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeDeep({
        courses: fromJS(normalizedData.entities.courses).map(course => course.set('isSelected', false)),
      });

    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
