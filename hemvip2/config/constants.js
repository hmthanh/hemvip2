import { isValidElement } from "react"

export const DEFAULT_THEME = {
  darkMode: true,
  direction: "ltr",
}

export const DEFAULT_OPTION = {
  left: "Left Better",
  equal: "Equal",
  right: "Right Better",
}

export const DEFAULT_ACTION_STRING = {
  clickLeft: "Click Left Better",
  clickEqual: "Click Equal",
  clickRight: "Click Right Better",

  clickPrev: "Click Previous",
  clickNext: "Click Next",
  clickFinish: "Click Finish",

  playVideoLeft: "Click Play Video Left",
  playVideoRight: "Click Play Video Right",

  pauseVideoLeft: "Pause Video Left",
  pauseVideoRight: "Pause Video Right",

  seekedVideoLeft: "Seeked Video Left",
  seekedVideoRight: "Seeked Video Right",
}

export const DEFAULT_SCREEN_CONFIG = {
  testname: "Gesture Generation Experiment",
  stopOnErrors: true,
  remoteService: "/save",
  pages: [
    {
      type: "generic",
      id: "first_page",
      name: "Name of the first page, used as heading on the page.",
      content: "Content of the page, usage of HTML tags allowed.",
    },
    {
      type: "video",
      id: "subject_x",
      name: "Page 1 of Y",
      content: "Rate the videos shown below",
      question: "How human-like was the agent in this video?",
      stimuli: [
        {
          id: "C1",
          url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
        },
        {
          id: "C2",
          url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
        },
      ],
    },
    {
      type: "video",
      id: "subject_x",
      name: "Page 2 of Y",
      content: "Which from the two videos is the best?",
      question: "Which from the two videos is the best",
      stimuli: [
        {
          id: "C1",
          url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
        },
        {
          id: "C2",
          url: "https://github.com/hmthanh/GENEA/raw/main/public/gesture_video.mp4",
        },
      ],
    },
    {
      type: "finish",
      name: "Thank you",
      content: "Thank You!",
      showResults: false,
      writeResults: true,
      questionnaire: [
        {
          type: "number",
          label: "*What's your age in years?",
          name: "age",
          min: 0,
          max: 100,
          default: 0,
        },
        {
          type: "options",
          name: "gender",
          label: "*How would you identify yourself (gender)?",
          response: [
            {
              value: "female",
              label: "Female",
            },
            {
              value: "male",
              label: "Male",
            },
            {
              value: "other",
              label: "Other",
            },
          ],
        },
        {
          type: "text",
          label: "*What's your nationality?",
          name: "nationality",
        },
        {
          type: "likert",
          label: "How skilled are you with computers?",
          name: "video_games",
          response: [
            {
              value: "1",
              label: "1 - Not at all",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
            {
              value: "4",
              label: "4 - Moderately",
            },
            {
              value: "5",
              label: "5",
            },
            {
              value: "6",
              label: "6",
            },
            {
              value: "7",
              label: "7 - Extremely",
            },
          ],
        },
        {
          type: "long_text",
          label:
            "How do you feel today about yourself and the state of the world?",
          name: "feeling",
        },
      ],
      remoteFailService: "/fail",
    },
  ],
}

export const DEEP_OBJECT_KEYS = Object.entries(DEFAULT_SCREEN_CONFIG)
  .map(([key, value]) => {
    const isObject =
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !isValidElement(value)
    if (isObject) {
      return key
    }
  })
  .filter(Boolean)
