// Mapping theory questions to their corresponding narrated explanation videos
// Supports:
// 1. 2017 Midterm official AI narrated solve videos (from MIAE221_MIDTERM_VIDEOS)
// 2. Historical past paper question solve videos (from MIAE221_SOLVE_VIDEOS)
// 3. High-yield topic companions and YouTube explainers (from MIAE221_YOUTUBE_COMPANION & MIAE221_TOPIC_VIDEOS)

import type { MotionLesson } from '../../data/engr213Lessons';
import { MIAE221_MIDTERM_VIDEOS } from '../../data/miae221MidtermVideos';
import { MIAE221_SOLVE_VIDEOS } from '../../data/gates/miae221SolveVideos';
import { MIAE221_YOUTUBE_COMPANION } from '../../data/miae221YouTubeVideos';
import { MIAE221_TOPIC_VIDEOS } from '../../data/gates/miae221TopicVideos';
import type { TheoryQuestionItem } from './midterm2017TheoryData';

export interface TheoryVideoInfo {
  kind: 'motion' | 'youtube';
  title: string;
  badge: string;
  sourceNote: string;
  motionLesson?: MotionLesson;
  youtubeId?: string;
  channel?: string;
  duration?: string | number;
}

export function getTheoryVideo(item: TheoryQuestionItem): TheoryVideoInfo | null {
  // 1. Check for 2017 Sample Midterm Question match (Q1 -> Q40)
  const qMatch = item.qNum.match(/Q(\d+)/i);
  if (qMatch && (/2017/i.test(item.paper) || item.id.startsWith('m17-'))) {
    const num = parseInt(qMatch[1], 10);
    const key = `TX_MIAE221_2017_Q${num < 10 ? '0' + num : num}`;
    const lesson = MIAE221_MIDTERM_VIDEOS[key];
    if (lesson) {
      return {
        kind: 'motion',
        title: `${item.qNum} · ${item.subject}`,
        badge: 'Official 2017 Midterm Video Explainer',
        sourceNote: lesson.source || 'Step-by-step video solution with question analysis, derivation & pitfalls',
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
        sourceNote: solveLesson.source,
        motionLesson: solveLesson,
        duration: solveLesson.duration
      };
    }
  }

  // 3. Fallback to Chapter-level YouTube companion video
  const ytByChapter: Record<number, string> = {
    1: 'whmLL77C8e0', // Texas A&M Bonding Overview
    2: 'PaGJwOPg2kU', // Efficient Engineer: Crystal Structures (FCC, BCC, HCP)
    3: 'aMCth97s-Ns', // Solid Solutions & Hume-Rothery Rules
    4: 'K_1QmKJvNjc', // Diffusion in Solids (Fick's Laws)
    5: 'pNIvZyd5djQ', // Stress, Strain & Hooke's Law
    6: 'QgymOJv0Igc'  // Dislocations & Slip Systems
  };

  const targetYtId = ytByChapter[item.chapter];
  if (targetYtId) {
    const ytItem = MIAE221_YOUTUBE_COMPANION.find((y) => y.youtubeId === targetYtId);
    if (ytItem) {
      return {
        kind: 'youtube',
        title: ytItem.videoTitle,
        badge: `Chapter ${item.chapter} Concept Video Explainer`,
        sourceNote: `${ytItem.channel} · ${ytItem.lectureRef}`,
        youtubeId: ytItem.youtubeId,
        channel: ytItem.channel,
        duration: ytItem.duration
      };
    }
  }

  // 4. Fallback to Topic AI Video
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
      sourceNote: topicLesson.source,
      motionLesson: topicLesson,
      duration: topicLesson.duration
    };
  }

  return null;
}
