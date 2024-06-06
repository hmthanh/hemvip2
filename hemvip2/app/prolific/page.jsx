"use server"

import { Progressbar } from "@/components/screen"
import { PopupError } from "@/components/screen"
import { PopupDialog } from "@/components/screen"
import { Screen } from "@/components/screen"
import { NavScreen } from "@/components/screen"
import { fetchStudy } from "./actions"
import { ExperimentConfigProvider } from "@/contexts/experiment"
import { ScreenControlProvider } from "@/contexts/screencontroll"
import { ActionRecorderProvider } from "@/contexts/action-recorder"
import PreventRefreshPage from "@/components/PreventRefreshPage"
import { Callout } from "@/components/core"

export default async function Page({ searchParams }) {
  const { PROLIFIC_PID, STUDY_ID, SESSION_ID } = searchParams
  console.log(PROLIFIC_PID, STUDY_ID, SESSION_ID)

  const { errors, success, data, msg } = await fetchStudy({
    prolificid: PROLIFIC_PID,
    studyid: STUDY_ID,
    sessionid: SESSION_ID,
  })

  // console.log("data", data)
  if (!success) {
    return (
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <Callout type="error">sdfsdf</Callout>
      </div>
    )
  }

  return (
    <>
      <div className="w-full max-h-screen h-screen bg-gray-100 overflow-hidden">
        <ExperimentConfigProvider value={data}>
          <ScreenControlProvider min={0} max={data.pages.length - 1}>
            <ActionRecorderProvider>
              <Screen />
            </ActionRecorderProvider>
          </ScreenControlProvider>
        </ExperimentConfigProvider>
      </div>
      {/* <PreventRefreshPage /> */}
      {/* <PaginationScreen /> */}
    </>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           experimentid: 'my_first_experiment',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

// export async function getServerProps({ params }) {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const repo = await res.json()
//   // return { props: { repo } }
//   console.log(params)
//   const id = params.experimentid

//   return { props: { experimentid: id } }
// }
// export async function getServerSideProps() {
//   // const data = await fetchData()
//   const data = { json: '' }
//   return { props: { data } }
// }
