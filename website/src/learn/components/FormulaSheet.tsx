import React from 'react';
import type { Curriculum } from '../model';
import { MIAE221FormulaHub } from '../formula/MIAE221FormulaHub';
import { CourseFormulaHub } from '../formula/CourseFormulaHub';
import '../styles/formulas.css';

// Every course now provides the Master Formula & Midterm Explainer Hub with video explanations
export const hasFormulaSheet = (_course: Curriculum['id']) => true;

export const FormulaSheet: React.FC<{ cur: Curriculum }> = ({ cur }) => {
  if (cur.id === 'MIAE221') {
    return <MIAE221FormulaHub />;
  }
  return <CourseFormulaHub cur={cur} />;
};

export default FormulaSheet;
