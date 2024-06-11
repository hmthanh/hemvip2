import { useActionRecorder } from "@/contexts/action-recorder"
import { useStudy } from "@/contexts/study"
import React from "react"
import cn from "clsx"
import ScreenSelectedResult from "./ScreenSelectedResult"
import { usePages } from "@/contexts/experiment"

export default function FinishScreen() {
  const pages = usePages()
  const { actions, screenActions } = useActionRecorder()
  const { options } = useStudy()
  // console.log(options)
  // console.log(pages)

  return (
    <div className="px-8 overflow-y-auto">
      <div className="max-w-[52rem] mx-auto">
        <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">
          Finish
        </h2>
        <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl"></h3>
        <p className="mt-3 leading-6 first:mt-0">Please submit to finish</p>

        <p className="mt-3 leading-6 first:mt-0">
          Gesture Generation is the process of generating gestures from speech
          or text. The goal of Gesture Generation is to generate gestures that
          are natural, realistic, and appropriate for the given context. The
          generated gestures can be used to animate virtual characters, robots,
          or embodied conversational agents.
        </p>
        <div
          className={cn(
            "-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ",
            "mask-gradient"
          )}
        >
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b py-4 text-left dark:border-neutral-700">
                <th className="px-6 py-2 font-semibold">Page</th>
                <th className="px-6 py-2 font-semibold">Question</th>
                <th className="px-6 py-2 font-semibold">Study Result</th>
              </tr>
            </thead>
            <tbody className="align-baseline text-gray-900 dark:text-gray-100">
              {Object.entries(options).map(([pageid, selected], index) => {
                return (
                  <tr
                    className="border-b border-gray-100 dark:border-neutral-700/50"
                    key={index}
                  >
                    <td className=" py-2 pl-6 ">{pageid}</td>
                    <td className=" py-2 pl-6 ">
                      {JSON.stringify(pages[pageid].content)}
                    </td>
                    <td className="py-2 pl-6">
                      <ScreenSelectedResult selected={selected} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 leading-6 first:mt-0">
          Gesture Generation is the process of generating gestures from speech
          or text. The goal of Gesture Generation is to generate gestures that
          are natural, realistic, and appropriate for the given context. The
          generated gestures can be used to animate virtual characters, robots,
          or embodied conversational agents.
        </p>
        <p className="mt-3 leading-6 first:mt-0">
          Gesture Generation is the process of generating gestures from speech
          or text. The goal of Gesture Generation is to generate gestures that
          are natural, realistic, and appropriate for the given context. The
          generated gestures can be used to animate virtual characters, robots,
          or embodied conversational agents.
        </p>
        <button
          type="submit"
          aria-disabled="false"
          className="mt-3 flex min-w-36 h-10 px-4 font-bold text-white bg-green-500 dark:border-neutral-800 items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
        >
          Finish
        </button>
      </div>
    </div>
  )
}
