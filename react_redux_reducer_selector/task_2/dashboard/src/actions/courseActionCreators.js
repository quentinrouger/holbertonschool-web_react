import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const boundSelectCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = (dispatch) => bindActionCreators(unSelectCourse, dispatch);
