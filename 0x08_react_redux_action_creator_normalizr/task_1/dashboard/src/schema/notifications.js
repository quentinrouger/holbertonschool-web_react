import { schema, normalize } from 'normalizr';
import * as notifications from '../../../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications.default, [notification]);

function getAllNotificationsByUser(userId) {
  return notifications.default
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}

export { normalizedData };
export default getAllNotificationsByUser;
