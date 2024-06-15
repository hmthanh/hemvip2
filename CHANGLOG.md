# Change log of HEMVIP version 2

**Main point**

- Create evaluation screen from scratch instead using webMUSHRA.
- Pairwise comparation instead of parallel evalution of mutiple model.

## Detail change:

**🎯 Feature**

- Navigation with `ArrowLeft`, `ArrowRight`
- Support participant study on mobile
- Preview Finish before submit.
- Startup guide screen for participant study.
- Finish screen before submit.
- Screen study have three evalution button: `Left Better`, `Equal`, `Right Better`
- Record all action button click on screen study: `Click Next`, `Click Previous`, `Click Start`, `Seeking`, `Click LeftBetter`, `Click Equal`, `Click Right Better`
- Rewrite structure of MongoDB. (Detail mongodb schema is in `/database`)
- Each study have 3 states `new` -> `started` -> `finish`.

**❎ Remove**

- Remove `stopOnErrors`
- Remove `question`, change to content.
- Change `stimuli` in each video to `videos`
- Remove option `showResults` and `writeResults`
