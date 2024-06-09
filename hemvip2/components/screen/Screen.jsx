"use client"

import React, { useEffect, useState } from "react"
import { ScreenHeader } from "./ScreenHeader"
import { ScreenMain } from "./ScreenMain"
import { AnimatePresence, motion } from "framer-motion"
import { NavScreen, PopupDialog, PopupError, Progressbar } from "."
import { useExperimentConfig } from "@/contexts/experiment"
import { useScreenControl } from "@/contexts/screencontroll"
import StartupScreen from "./StartupScreen"
import FinishScreen from "./FinishScreen"
import useDebouncedCallback from "@/utils/hooks/use-bounded-callback"
import LoadingSpin from "../loading/LoadingSpin"
import { useStudy } from "@/contexts/study"

export function Screen() {
  const config = useExperimentConfig()
  const { currentPage, isStartPage, isEndPage, setPrev, setNext } =
    useScreenControl()
  const { options, selectStudy } = useStudy()

  const [overlay, setOverlay] = useState(false)
  const debouncedPrevPage = useDebouncedCallback(setPrev, 500, {
    leading: true,
  })
  const debouncedNextPage = useDebouncedCallback(setNext, 500, {
    leading: true,
  })

  let [isOpenDialog, setIsOpenDialog] = useState(true)
  function closeDialog() {
    setIsOpenDialog(false)
  }

  function openDialog() {
    setIsOpenDialog(true)
  }

  // console.log(options)

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key)
      if (event.key === "ArrowLeft") {
        if (!isStartPage) {
          // setTimeout(() => {
          //   setPrev()
          // }, 500)
          debouncedPrevPage()
        }
      } else if (event.key === "ArrowRight") {
        if (!isEndPage) {
          debouncedNextPage()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [setPrev, setNext])

  if (!config) {
    return <></>
  }

  return (
    <div className="w-full max-h-screen h-screen flex flex-col bg-stone-50">
      {overlay ? <LoadingSpin /> : <></>}
      <NavScreen name={config.name} />
      <div className="w-full h-screen px-[7%] gap-2 p-2 flex flex-col bg-stone-50">
        <Progressbar value={process} />
        {/* <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={openDialog}
            className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Open dialog
          </button>
        </div> */}

        <div className="flex flex-col w-full h-full gap-2">
          <ScreenHeader
            currentPage={currentPage}
            setPrev={setPrev}
            setNext={setNext}
          />

          <div className="flex-grow w-full h-full bg-white px-0 py-2 sm:p-4 border-none rounded-xl sm:border sm:border-zinc-300 flex flex-col gap-4">
            <div className="relative h-full w-full  flex justify-center align-middle">
              <AnimatePresence initial={false} custom={currentPage}>
                <motion.div
                  key={currentPage}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={currentPage}
                  variants={{
                    enter: (direction) => {
                      return {
                        x: direction > 0 ? "100%" : "-100%",
                        opacity: 0,
                      }
                    },
                    center: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: (direction) => {
                      return {
                        x: direction > 0 ? "-100%" : "100%",
                        opacity: 0,
                      }
                    },
                  }}
                  transition={{
                    ease: "linear",
                    x: { type: "linear", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full h-full overflow-hidden flex flex-col gap-2 justify-center align-middle"
                >
                  {isStartPage ? (
                    <StartupScreen />
                  ) : isEndPage ? (
                    <FinishScreen />
                  ) : (
                    <ScreenMain currentPage={currentPage} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <PopupDialog
          isOpen={isOpenDialog}
          onClose={closeDialog}
          autoCloseTime={50000}
        />
        <PopupError />
      </div>
    </div>
  )
}
