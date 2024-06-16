# Change log of HEMVIP version 2

![image](/image.png)

**Main point**

- Create evaluation screen from scratch instead using webMUSHRA.
- Pairwise comparation instead of parallel evalution of mutiple model.

## Detail change:

**🚩Study status process**

- Each study have 3 states `new` -> `started` -> `finish` | `uncomplete`.
- Prolific Participants first click link will redirecto to `https://hemvip.vercel.app/?PROLIFIC_PID=662b614c61935111d01484bf&STUDY_ID=665971ec91884faf5b5284d7&SESSION_ID=0cvbkz5w327p`
- Participants click start button at homepage and redirect to `/prolific` and start study screen.
- Participants select option and at Finish page, submit result to send final result.
(Study data store in MongoDB collection `studies`)

![start_homepage](/start_homepage.png)


**🎯 Feature**

- Navigation with keyboard `ArrowLeft`, `ArrowRight`
- Prevent user exist during study
- Support participant study on mobile
- Preview Finish before submit.
- Startup guide screen for participant study.
- Finish screen before submit.
- Screen study have only 3 evalution button: `Left Better`, `Equal`, `Right Better`
- Record all action button click on screen study:  `Click Start`, `Click Finish`, `Click Left Better`, `Click Equal`, `Click Right Better`, `Click Previous`, `Click Next`, `Click Finish`, `Click Play Video Left`, `Click Play Video Right`, `Pause Video Left`, `Pause Video Right`, `Seeked Video Left`, `Seeked Video Right`.
- Rewrite structure of MongoDB. (Detail mongodb schema is in `/database`)


**❎ Remove**

- Remove `stopOnErrors`
- Remove `question`, change to content.
- Change `stimuli` in each video to `videos`
- Remove option `showResults` and `writeResults`
