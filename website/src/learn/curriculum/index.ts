import type { CourseId } from '../../types';
import type { CourseSpec } from './types';
import { ENGR213_SPEC } from './engr213';
import { INDU211_SPEC } from './indu211';
import { MIAE215_SPEC } from './miae215';
import { MIAE221_SPEC } from './miae221';

export const COURSE_SPECS: Record<CourseId, CourseSpec> = {
  ENGR213: ENGR213_SPEC,
  INDU211: INDU211_SPEC,
  MIAE215: MIAE215_SPEC,
  MIAE221: MIAE221_SPEC
};
