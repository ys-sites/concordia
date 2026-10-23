// Progress is stored against ids: `COURSE/stepId` for steps and quiz sessions, `COURSE/lessonId` for notes,
// question ids, video ids and schedule event ids. Changing one of those ids would leave every student's
// progress for it behind, so validate:curriculum keeps a lock of all of them (scripts/progress-ids.lock.json)
// and refuses a change that drops one without an entry here.
//
// To rename: add `old: new` below (full ids as stored), run `npm run validate:curriculum -- --update-lock`.
// Never remove an entry: a student who has not visited since still has the old id saved.
export const ID_ALIASES: Record<string, string> = {};

// Ids removed on purpose (the content itself was taken down). Their saved progress stays in the record, unused.
export const RETIRED_IDS: string[] = [];
