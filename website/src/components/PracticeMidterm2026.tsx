import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Clapperboard, FileText } from 'lucide-react';
import type { MotionLesson } from '../data/engr213Lessons';
import { MotionLessonPlayer } from './MotionLessonPlayer';
import { audio } from '../utils/audio';
import './PracticeMidterm2026.css';

// The teacher's MIAE 215 practice midterm (Fall 2026), question by question, each with its narrated video
// solution and a hidden answer to check against. The video map loads only when this tab is open.
interface PracticeQuestion {
  id: string;
  label: string;
  prompt: string;
  parts?: string[];
  code?: string;
  answer: string;
  answerNote: string;
}

// wording exactly as on the paper
const Q2_INTRO =
  'Q2) What is the output of the following programs (assume appropriate include statements, namespace, main, etc.) ? You can assume the programs compile without errors and execute. Please indicate the outputs in the ANSWER BOOKLET by putting a box around your answers.';

const QUESTIONS: PracticeQuestion[] = [
  {
    id: 'pm26_q1',
    label: 'Q1 · Write a program',
    prompt: 'Q1) Write a program that:',
    parts: [
      'a) Inputs a 1D array A of 10 doubles from the keyboard.',
      'b) Determines the minimum element A[i] and prints it out.',
      'c) Checks if all elements of A are between -7 and 7. If that is true then print out "elements of A are in range". Otherwise stop the program immediately.',
      'd) Repeatedly inputs two integers i1 and i2 from the keyboard until valid values are given. The inputs are considered valid when i1, i2 are in the range from 0 to 9 and i1 is not equal to i2.',
      'e) Swaps (ie exchanges) elements i1 and i2 of A.',
      'f) Saves the elements of A to a file called "A.txt".'
    ],
    answer: `#include <iostream>
#include <fstream>
#include <cstdlib>
using namespace std;

int main()
{
    int i, n = 10, i1, i2;
    double A[10], A_min, temp;

    // a) input A (10 doubles)
    cout << "\\ninput A (10 elements) ?\\n";
    for(i=0; i<n; i++) cin >> A[i];

    // b) minimum element of A
    A_min = A[0];
    for(i=1; i<n; i++) {
        if( A[i] < A_min ) A_min = A[i];
    }
    cout << "\\nminimum element of A = " << A_min;

    // c) all elements between -7 and 7? otherwise stop
    for(i=0; i<n; i++) {
        if( (A[i] < -7) || (A[i] > 7) ) {
            cout << "\\nA[" << i << "] is out of range";
            exit(1);
        }
    }
    cout << "\\nelements of A are in range";

    // d) input i1, i2 until they are valid
    while(1) {
        cout << "\\ninput i1 and i2 ? ";
        cin >> i1 >> i2;
        if( (i1 >= 0) && (i1 <= 9) && (i2 >= 0) && (i2 <= 9)
            && (i1 != i2) ) break;
        cout << "\\ninvalid input, try again";
    }

    // e) swap A[i1] and A[i2]
    temp  = A[i1];
    A[i1] = A[i2];
    A[i2] = temp;

    // f) save A to the file "A.txt"
    ofstream fout("A.txt");
    for(i=0; i<n; i++) fout << A[i] << "\\n";
    fout.close();

    cout << "\\ndone.\\n";
    return 0;
}`,
    answerNote: 'Compiled and run with MinGW g++. Assumption (state it on the exam): -7 and 7 themselves count as "in range".'
  },
  {
    id: 'pm26_q2a',
    label: 'Q2 a) · Output tracing',
    prompt: Q2_INTRO,
    code: `int i;
double A[5] = {2,3,5,7,11}, x = 0.0;
for(i=0;i<5;i++) {
    if(A[i] > 7) {
        x++;
    } else if ( !i ) {
        x = 1/(i+3);
    } else {
        x = 7.0/(i-1);
    }
    cout << "\\n" << x;
}
cout << "\\n" << i;`,
    answer: '0\ninf\n7\n3.5\n4.5\n5',
    answerNote: '1/(i+3) is int ÷ int = 0 · !i is true only for i = 0 · 7.0/0 = inf · 7 > 7 is false · after the loop i = 5.'
  },
  {
    id: 'pm26_q2b',
    label: 'Q2 b) · Output tracing',
    prompt: Q2_INTRO,
    code: `int B[] = {11,7,5,3,2,1}, i = 0, x, a = 20 % 7;

while( B[i] >= 2 ) {
    B[i] = B[i+1];
    i++;
    x += B[i];
}

cout << "\\n" << B[2] << " " << B[3] << " " << i << " " << a << " " << x;`,
    answer: '3 2 5 6 G',
    answerNote: 'B becomes 7 5 3 2 1 1 · i = 5 · a = 20 % 7 = 6 · x was never initialised, so it is garbage (G); with x = 0 it would be 18.'
  }
];

export const PracticeMidterm2026: React.FC = () => {
  const [videos, setVideos] = useState<Record<string, MotionLesson> | null>(null);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let live = true;
    import('../data/miae215PracticeMidtermVideos')
      .then((m) => live && setVideos(m.MIAE215_PRACTICE_MIDTERM_VIDEOS))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="pm26-root">
      <div className="pm26-head">
        <div className="pm26-kicker">
          <FileText size={15} /> Teacher practice midterm · Fall 2026
        </div>
        <h3>MIAE 215 Midterm Exam (Fall 2026, Section XX) · Video Solutions</h3>
        <p className="pm26-paper">
          Please write your name and ID number on the answer booklet. All answers go in the answer booklet. A one-sided formula sheet and a
          non-programmable faculty approved calculator is permitted. You have 1 hour 15 minutes to complete the exam.
        </p>
        <p>
          Try each question on paper first, then watch its video: it solves this exact question step by step and shows where every rule is on
          the 1-page cheat sheet.
        </p>
      </div>

      {QUESTIONS.map((q) => {
        const lesson = videos?.[q.id];
        const shown = !!open[q.id];
        return (
          <section key={q.id} className="pm26-q">
            <div className="pm26-q-label">{q.label}</div>
            <p className="pm26-prompt">{q.prompt}</p>
            {q.parts && (
              <ul className="pm26-parts">
                {q.parts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {q.code && <pre className="pm26-code">{q.code}</pre>}

            {lesson ? (
              <MotionLessonPlayer
                lesson={lesson}
                badge="Video Solution · Step by Step"
                disclosure="following the teacher's practice midterm, with every output checked by compiling and running the code"
              />
            ) : videos ? null : (
              <div className="pm26-video-wait">
                <Clapperboard size={16} /> Loading the video solution…
              </div>
            )}

            <button
              type="button"
              className="pm26-answer-btn"
              onClick={() => {
                audio.playClick();
                setOpen((o) => ({ ...o, [q.id]: !o[q.id] }));
              }}
            >
              <span>{shown ? 'Hide the answer' : q.code ? 'Show the answer (try it first!)' : 'Show the full solution (try it first!)'}</span>
              {shown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {shown && (
              <div className="pm26-answer">
                <pre className={q.code ? 'pm26-answer-box' : 'pm26-code'}>{q.answer}</pre>
                <p>{q.answerNote}</p>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default PracticeMidterm2026;
