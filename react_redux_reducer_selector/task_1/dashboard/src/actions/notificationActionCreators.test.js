import { notificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe("notificationActionCreators tests", () => {
  it("markAsRead action creator returns the correct action", () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it("setNotificationFilter action creator returns the correct action", () => {
    const filter = notificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
