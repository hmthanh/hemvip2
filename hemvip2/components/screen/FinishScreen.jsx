import { useActionRecorder } from "@/contexts/action-recorder"
import { useStudy } from "@/contexts/study"
import React from "react"

export default function FinishScreen() {
  const { actions, screenActions } = useActionRecorder()
  const { options } = useStudy()
  // console.log(options)

  return (
    <div className="px-8 overflow-y-auto">
      <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">
        Complete
      </h2>
      <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl"></h3>
      <p className="mt-3 leading-6 first:mt-0">
        Please visit this link{" "}
        <a
          className="text-primary-600 underline decoration-from-font [text-underline-position:from-font]"
          href="https://app.prolific.com/submissions/complete?cc=CMTN9LUK"
        >
          Link
        </a>
      </p>
      <p className="mt-3 leading-6 first:mt-0">
        Gesture Generation is the process of generating gestures from speech or
        text. The goal of Gesture Generation is to generate gestures that are
        natural, realistic, and appropriate for the given context. The generated
        gestures can be used to animate virtual characters, robots, or embodied
        conversational agents.
      </p>
    </div>
  )
}
