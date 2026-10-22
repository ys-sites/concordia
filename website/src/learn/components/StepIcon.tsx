import React from 'react';
import { BookOpen, Dumbbell, FileText, GraduationCap, ListChecks, PencilLine, PlayCircle, Timer, Wrench, Youtube, LucideIcon } from 'lucide-react';
import type { Step, StepKind } from '../model';

const ICONS: Record<StepKind, LucideIcon> = {
  video: PlayCircle,
  notes: FileText,
  reading: BookOpen,
  worked: PencilLine,
  check: ListChecks,
  practice: Dumbbell,
  exam: GraduationCap,
  tool: Wrench,
  extra: Youtube
};

export const KIND_LABEL: Record<StepKind, string> = {
  video: 'Video',
  notes: 'Key notes',
  reading: 'Reading',
  worked: 'Worked example',
  check: 'Quick check',
  practice: 'Practice',
  exam: 'Past exam questions',
  tool: 'Interactive tool',
  extra: 'Extra video'
};

export const StepIcon: React.FC<{ step: Step; size?: number }> = ({ step, size = 16 }) => {
  const Icon = step.kind === 'exam' && step.timeLimit ? Timer : ICONS[step.kind];
  return <Icon size={size} aria-hidden />;
};
