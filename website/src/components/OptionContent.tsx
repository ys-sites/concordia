import React from 'react';
import { MathText } from '../utils/mathRenderer';
import { CppOptionView, OutputOptionView, isCodeOption, isOutputOption } from './CppOptionView';

export const OptionContent: React.FC<{ text: string }> = ({ text }) => {
  if (isCodeOption(text)) {
    return <CppOptionView code={text} />;
  }
  if (isOutputOption(text)) {
    return <OutputOptionView output={text} />;
  }
  return <MathText text={text} />;
};

export { isCodeOption, isOutputOption };
