import React from "react"

export default function ScreenSelectedResult({ selected }) {
  return (
    <div className="flex flex-row gap-4 mt-3 w-full">
      <div className="flex items-center">
        <input
          checked
          id="default-radio-1"
          type="radio"
          value=""
          onChange={() => {}}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Left Better
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          onChange={() => {}}
          disabled={true}
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Equal
        </label>
      </div>

      <div className="flex items-center">
        <input
          checked
          id="default-radio-3"
          type="radio"
          value=""
          onChange={() => {}}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-3"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Right Better
        </label>
      </div>
    </div>
  )
}
