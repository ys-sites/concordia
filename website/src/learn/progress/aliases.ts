// Progress is stored against ids: `COURSE/stepId` for steps and quiz sessions, `COURSE/lessonId` for notes,
// question ids, video ids and schedule event ids. Changing one of those ids would leave every student's
// progress for it behind, so validate:curriculum keeps a lock of all of them (scripts/progress-ids.lock.json)
// and refuses a change that drops one without an entry here.
//
// To rename: add `old: new` below (full ids as stored), run `npm run validate:curriculum -- --update-lock`.
// Never remove an entry: a student who has not visited since still has the old id saved.
export const ID_ALIASES: Record<string, string> = {
  'MIAE221/atomic-structure.video-topic221-m221-02-bonding': 'MIAE221/bonding.video-topic221-m221-02-bonding',
  'MIAE221/bonding.yt-DVtJ-nTjflI': 'MIAE221/bonding.video-topic221-m221-02-bonding',
  'yt:DVtJ-nTjflI': 'topic221:m221-02-bonding',
  'MIAE221/bond-energy.yt-idp9TI72Yys': 'MIAE221/bond-energy.video-topic221-m221-02b-bondcurve',
  'yt:idp9TI72Yys': 'topic221:m221-02b-bondcurve'
};

// Ids removed on purpose (the content itself was taken down). Their saved progress stays in the record, unused.
export const RETIRED_IDS: string[] = [
  // Past-paper lessons (Oct 2026): papers are no longer listed as lessons in any course — their
  // questions live on inside Build your own quiz as the "Previous exams" source.
  'ENGR213/paper-f18',
  'ENGR213/paper-f18.exam',
  'ENGR213/paper-f21',
  'ENGR213/paper-f21.exam',
  'ENGR213/paper-oq',
  'ENGR213/paper-oq.exam',
  'ENGR213/paper-s21',
  'ENGR213/paper-s21.exam',
  'ENGR213/paper-w17',
  'ENGR213/paper-w17.exam',
  'ENGR213/paper-w25q',
  'ENGR213/paper-w25q.exam',
  'ENGR213/paper-w25t',
  'ENGR213/paper-w25t.exam',
  'INDU211/paper-a2',
  'INDU211/paper-a2.exam',
  'INDU211/paper-f20',
  'INDU211/paper-f20.exam',
  'INDU211/paper-m20',
  'INDU211/paper-m20.exam',
  'INDU211/paper-s19',
  'INDU211/paper-s19.exam',
  'INDU211/paper-sf22',
  'INDU211/paper-sf22.exam',
  'MIAE215/paper-f23',
  'MIAE215/paper-f23.exam',
  'MIAE215/paper-m24',
  'MIAE215/paper-m24.exam',
  'MIAE215/paper-q2',
  'MIAE215/paper-q2.exam',
  'MIAE215/paper-r21',
  'MIAE215/paper-r21.exam',
  'MIAE215/paper-r25',
  'MIAE215/paper-r25.exam',
  'MIAE221/paper-a25',
  'MIAE221/paper-a25.exam',
  'MIAE221/paper-f17',
  'MIAE221/paper-f17.exam',
  'MIAE221/paper-f24',
  'MIAE221/paper-f24.exam',
  'MIAE221/paper-fx',
  'MIAE221/paper-fx.exam',
  'MIAE221/paper-pps1',
  'MIAE221/paper-pps1.exam',
  'MIAE221/paper-w26',
  'MIAE221/paper-w26.exam',
  // Retired outside YouTube creator steps from course section (moved to Exam Prep):
  'MIAE221/atomic-structure.yt-6MAKMnZdfbs',
  'MIAE221/atomic-structure.yt-NIwcDnFjj98',
  'MIAE221/atomic-structure.yt-aQf6Q8t1FQE',
  'MIAE221/unit-cells.yt-PaGJwOPg2kU',
  'MIAE221/polymers.yt-jWpB7_6X81Q',
  'yt:jWpB7_6X81Q'
];

