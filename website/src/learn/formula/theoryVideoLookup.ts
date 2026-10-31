// Mapping theory questions to their corresponding narrated AI explanation videos
// Supports:
// 1. Midterm official AI narrated solve videos (from MIAE221_MIDTERM_VIDEOS)
// 2. Historical past paper question solve videos (from MIAE221_SOLVE_VIDEOS)
// 3. High-yield topic AI lesson videos (from MIAE221_TOPIC_VIDEOS)

import type { MotionLesson } from '../../data/engr213Lessons';
import { MIAE221_MIDTERM_VIDEOS } from '../../data/miae221MidtermVideos';
import { MIAE221_SOLVE_VIDEOS } from '../../data/gates/miae221SolveVideos';
import { MIAE221_TOPIC_VIDEOS } from '../../data/gates/miae221TopicVideos';
import type { TheoryQuestionItem } from './midterm2017TheoryData';

export interface TheoryVideoInfo {
  kind: 'motion';
  title: string;
  badge: string;
  sourceNote: string;
  motionLesson: MotionLesson;
  duration?: string | number;
}

export function getTheoryVideo(item: TheoryQuestionItem): TheoryVideoInfo | null {
  // 1. Check for Midterm Question match (Q1 -> Q40)
  const qMatch = item.qNum.match(/Q(\d+)/i);
  if (qMatch && (/2017|midterm/i.test(item.paper) || item.id.startsWith('m17-'))) {
    const num = parseInt(qMatch[1], 10);
    const key = `TX_MIAE221_2017_Q${num < 10 ? '0' + num : num}`;
    const lesson = MIAE221_MIDTERM_VIDEOS[key];
    if (lesson) {
      return {
        kind: 'motion',
        title: `${item.qNum} · ${item.subject}`,
        badge: 'AI Midterm Video Explainer',
        sourceNote: 'Step-by-step AI video solution with question analysis, derivation & pitfalls',
        motionLesson: lesson,
        duration: lesson.duration
      };
    }
  }

  // 2. Check for past exam question solve videos in MIAE221_SOLVE_VIDEOS
  if (item.id.includes('f17-') || /F17-18/i.test(item.id)) {
    const solveLesson = MIAE221_SOLVE_VIDEOS['F17-18'];
    if (solveLesson) {
      return {
        kind: 'motion',
        title: solveLesson.title,
        badge: 'Past Exam Solve Video',
        sourceNote: 'Step-by-step AI worked solution',
        motionLesson: solveLesson,
        duration: solveLesson.duration
      };
    }
  }

  // 3. Fallback to Topic AI Video
  const topicByChapter: Record<number, string> = {
    1: 'bonding',
    2: 'cells',
    3: 'defects',
    4: 'diffmech',
    5: 'tensile',
    6: 'slip'
  };
  const topicKey = topicByChapter[item.chapter];
  if (topicKey && MIAE221_TOPIC_VIDEOS[topicKey]) {
    const topicLesson = MIAE221_TOPIC_VIDEOS[topicKey];
    return {
      kind: 'motion',
      title: topicLesson.title,
      badge: `Chapter ${item.chapter} Step-by-Step AI Lesson`,
      sourceNote: 'Narrated AI concept & formula walkthrough',
      motionLesson: topicLesson,
      duration: topicLesson.duration
    };
  }

  return null;
}
