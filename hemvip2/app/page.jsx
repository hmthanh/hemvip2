"use client"

import { generateSessionId } from "@/utils/utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Loading from "@/components/loading/loading"

const schema = z.object({
  prolificid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "Invalid PROLIFIC_PID format" }),
  studyid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "Invalid STUDY_ID format" }),
  sessionid: z
    .string()
    .regex(/^[a-z0-9]{12}$/, { message: "Invalid SESSION_ID format" }),
})

export default function Home({ searchParams }) {
  const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log("object")
  //   const sessionId = generateSessionId()
  //   router.push(
  //     `/prolific?PROLIFIC_PID=${prolific}&STUDY_ID=${study}&SESSION_ID=${sessionId}`
  //   )
  //   // handleSubmit
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      prolificid: PROLIFIC_PID || "",
      studyid: STUDY_ID || "",
      sessionid: SESSION_ID || "",
    },
  })

  const handleStart = (data) => {
    setLoading(true)
    router.push(
      `/prolific?PROLIFIC_PID=${data.prolific}&STUDY_ID=${data.studyid}&SESSION_ID=${data.sessionid}`
    )
    setLoading(false)
    // console.log(data, data.prolificid, data.studyid, data.sessionid)
  }

  return (
    <main className="flex w-full flex-col items-center justify-between px-24">
      <div className="w-full px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
        <div className="flex flex-col w-full h-full gap-2">
          <div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
            <div className=" h-full w-full  flex justify-center align-middle">
              <div className=" w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle">
                <div className="px-8 overflow-y-auto">
                  <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    Pairwise Comparison of Gesture Generation AI Model Studies
                  </h1>
                  <p className="mt-3 leading-6 first:mt-0">
                    Enter PROLIFIC_PID, STUDY_ID and click to start
                  </p>
                  <form
                    className="flex flex-row gap-4 px-4 py-8 justify-center items-end"
                    onSubmit={handleSubmit(handleStart)}
                  >
                    <div className="flex-1">
                      <label
                        htmlFor="prolificid"
                        className="block text-xs text-gray-600 uppercase"
                      >
                        PROLIFIC_PID
                      </label>
                      <input
                        {...register("prolificid")}
                        id="prolificid"
                        disabled={true}
                        placeholder="662b614c61935111d01484bf"
                        required=""
                        className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                        type="text"
                        name="prolificid"
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="studyid"
                        className="block text-xs text-gray-600 uppercase"
                      >
                        STUDY_ID
                      </label>
                      <input
                        id="studyid"
                        {...register("studyid")}
                        placeholder="665971ec91884faf5b5284d7"
                        required=""
                        disabled={true}
                        className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                        type="text"
                        name="studyid"
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="sessionid"
                        className="block text-xs text-gray-600 uppercase"
                      >
                        SESSION_ID
                      </label>
                      <input
                        id="sessionid"
                        {...register("sessionid")}
                        placeholder="03mr59tj5bmv"
                        required=""
                        disabled={true}
                        className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                        type="text"
                        name="sessionid"
                      />
                    </div>
                    <div className="flex-1">
                      <button
                        type="submit"
                        className="flex h-10 w-full font-bold text-white bg-blue-500 items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
                      >
                        {loading ? <Loading color="#fff" /> : "Start"}
                      </button>
                    </div>
                  </form>

                  <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">
                    Startup guide
                  </h2>
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">
                    1. Our Gesture Generation Study
                  </h3>
                  <p className="mt-3 leading-6 first:mt-0">
                    Gesture Generation is the process of generating gestures
                    from speech or text. The goal of Gesture Generation is to
                    generate gestures that are natural, realistic, and
                    appropriate for the given context. The generated gestures
                    can be used to animate virtual characters, robots, or
                    embodied conversational agents.
                  </p>
                  <p className="mt-3 leading-6 first:mt-0">Guide</p>
                  <ul className="mt-3 list-disc first:mt-0 ltr:ml-6 rtl:mr-6">
                    <li className="task-list-item">
                      Exist screen when paritipate
                    </li>
                    <li className="task-list-item">Update the website...</li>
                    <li className="task-list-item">Contact the media...</li>
                  </ul>
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">
                    2. Process of Gesture Generation Study
                  </h3>
                  <p className="mt-3 leading-6 first:mt-0">
                    Start our study by click{" "}
                    <code className="nextra-code" dir="ltr">
                      Start
                    </code>
                  </p>

                  <p className="mt-6 leading-6 first:mt-0">
                    Please choose{" "}
                    <code className="nextra-code" dir="ltr">
                      Next
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/prolific/my_first_experiment?PROLIFIC_PID=1234567&STUDY_ID=1234567&SESSION_ID=123123">
        Go
      </a>
    </main>
  )
}
