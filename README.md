# HemVip2 - Create a Study Experiment to evaluate Gesture Generation AI Model

![image sample](./image.png)

## Feature support:

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
- Record all action button click on screen study: `Click Start`, `Click Finish`, `Click Left Better`, `Click Equal`, `Click Right Better`, `Click Previous`, `Click Next`, `Click Finish`, `Click Play Video Left`, `Click Play Video Right`, `Pause Video Left`, `Pause Video Right`, `Seeked Video Left`, `Seeked Video Right`.
- Rewrite structure of MongoDB. (Detail mongodb schema is in `/database`)

## Quick start

### Install

```bash
git clone https://github.com/hmthanh/hemvip2.git
npm i
npm run dev
```

### Edit information about your study

Edit in `hemvip2/my_first_experiment/`

- `config.json`: Config file for video link
- `startup.mdx`: Startup page

Edit `env.local`

```bash
MONGODB_URI=mongodb+srv://hmthanh:Thanh051205@cluster0.bb1owv7.mongodb.net/
```
