"use client"
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
  TransitionChild,
  Transition,
} from "@headlessui/react"
import React, { Fragment, useEffect, useState } from "react"

export function PopupDialog({ isOpen, onClose, autoCloseTime }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseTime)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose, autoCloseTime])

  if (!isOpen) return null

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full  p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl border-red-200 bg-red-100 text-red-900 border-red-200/30 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200 p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Payment successful
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm ">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 animate-loading"
                    style={{ animationDuration: "1.5s" }} // Adjust animation duration here
                  />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
