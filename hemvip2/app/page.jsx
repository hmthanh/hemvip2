"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [prolific, setProlific] = useState("662b614c61935111d01484bf")
  const [study, setStudy] = useState("665971ec91884faf5b5284d7")
  const router = useRouter();

  const handleStart = () => {
    router.push(`/prolific?PROLIFIC_PID=${prolific}&STUDY_ID=${study}&SESSION_ID=123123`)
  }
  return (
    <main className="flex w-full flex-col items-center justify-between px-24">
      <div className="w-full px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
        <div className="flex flex-col w-full h-full gap-2">
          <div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
            <div className=" h-full w-full  flex justify-center align-middle">
              <div className=" w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle" >

                <div className="px-8 overflow-y-auto">
                  <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Gesture Generation</h1>
                  <p className="mt-3 leading-6 first:mt-0">Enter PROLIFIC_PID, STUDY_ID and click to start</p>
                  <div className="flex flex-row gap-4 px-4 py-8 justify-center items-end">
                    <div className="flex-1">
                      <label htmlFor="prolicficid" className="block text-xs text-gray-600 uppercase">PROLIFIC_PID</label>
                      <input id="prolicficid" placeholder="662b614c61935111d01484bf" required="" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                        type="text" name="prolicficid" value={prolific} onChange={(e) => setProlific(e.target.value)} />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="studyid" className="block text-xs text-gray-600 uppercase">STUDY_ID</label>
                      <input id="studyid" placeholder="665971ec91884faf5b5284d7" required="" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" type="text"
                        name="studyid" value={study} onChange={(e) => setStudy(e.target.value)} />
                    </div>
                    <div className="flex-1">
                      <button className="flex h-10 w-full font-bold text-white bg-blue-500 items-center justify-center rounded-md border text-sm transition-all focus:outline-none" onClick={handleStart}>Start
                      </button>
                    </div>
                  </div>

                  <h2 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-2xl">Startup guide</h2>
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">1. Our Gesture Generation Study</h3>
                  <p className="mt-3 leading-6 first:mt-0">Gesture Generation is the process of generating gestures from speech or text. The goal of Gesture Generation is to generate gestures that are natural, realistic, and appropriate for the given context. The generated gestures can be used to animate virtual characters, robots, or embodied conversational agents.</p>
                  <p className="mt-3 leading-6 first:mt-0">Guide</p>
                  <ul className="mt-3 list-disc first:mt-0 ltr:ml-6 rtl:mr-6">
                    <li className="task-list-item">Exist screen when paritipate</li>
                    <li className="task-list-item">Update the website...</li>
                    <li className="task-list-item">Contact the media...</li>
                  </ul>
                  <h3 className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-3 text-xl">2. Process of Gesture Generation Study</h3>
                  <p className="mt-3 leading-6 first:mt-0">Start our study by click <code className="nextra-code" dir="ltr">Start</code>
                  </p>

                  <p className="mt-6 leading-6 first:mt-0">Please choose <code className="nextra-code" dir="ltr">Next</code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/prolific/my_first_experiment?PROLIFIC_PID=1234567&STUDY_ID=1234567&SESSION_ID=123123">Go</a>
    </main>
  );
}
