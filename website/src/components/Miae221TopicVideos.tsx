import React from 'react';
import { TopicVideosHub } from './TopicVideosHub';
import { MIAE221_MOTION_LESSONS } from '../data/miae221Lessons';

// Lazy-loaded from CourseWorkspace so the video data never enters the main bundle.
export const Miae221TopicVideos: React.FC<{ onLaunchDrill?: (sectionId: string) => void; onBack?: () => void }> = ({ onLaunchDrill, onBack }) => (
  <TopicVideosHub
    courseCode="MIAE221"
    title="MIAE 221 · Teacher Topics Explained (AI Videos)"
    intro="One narrated motion-graphics lesson per teacher topic, Chapters 1–7. Each video follows the professor's lecture slides and worked examples; every subtopic is a chapter you can jump to, and each topic links to its practice drill."
    lessons={MIAE221_MOTION_LESSONS}
    onLaunchDrill={onLaunchDrill}
    onBack={onBack}
  />
);

export default Miae221TopicVideos;
