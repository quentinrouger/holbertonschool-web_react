// src/schema/courses.js
import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');

export const coursesNormalizer = (data) => {
  if (!data) return { entities: { courses: {} }, result: [] };
  return normalize(data, [course]);
};
