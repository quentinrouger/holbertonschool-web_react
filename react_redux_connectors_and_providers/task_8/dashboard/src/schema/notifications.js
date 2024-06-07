import { schema, normalize } from 'normalizr';
import * as notifications from '../../dist/notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications.default, [notification]);

function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  const notifications = normalizedData.entities.notifications;
  
  for (const key in notifications) {
    if (notifications[key].author === userId) {
      userNotifications.push(normalizedData.entities.messages[notifications[key].context]);
    }
  }

  return userNotifications;
}

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};

export { normalizedData };
export default getAllNotificationsByUser;
