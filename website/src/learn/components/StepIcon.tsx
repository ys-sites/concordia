import React from 'react';
import { BookOpen, Dumbbell, FileText, GraduationCap, ListChecks, PencilLine, PlayCircle, Timer, Wrench, LucideIcon } from 'lucide-react';
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
  extra: PlayCircle
};

export const KIND_LABEL: Record<StepKind, string> = {
  video: 'Explanation of the topic',
  notes: 'Formula to retain',
  reading: 'Reading',
  worked: 'Example of the topic',
  check: 'Check your understanding',
  practice: 'Practice Questions',
  exam: 'Past Midterms',
  tool: 'Interactive tool',
  extra: 'Explanation'
};

export const StepIcon: React.FC<{ step: Step; size?: number }> = ({ step, size = 16 }) => {
  const Icon = step.kind === 'exam' && step.timeLimit ? Timer : ICONS[step.kind] ?? FileText;
  return <Icon size={size} aria-hidden />;
};
