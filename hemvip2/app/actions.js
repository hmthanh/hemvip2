"use server"

import clientPromise from "@/server/mongodb"
import { z } from "zod"

const studySchema = z.object({
  prolificid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "Invalid PROLIFIC_PID format" }),
  studyid: z
    .string()
    .regex(/^[a-f0-9]{24}$/, { message: "Invalid STUDY_ID format" }),
  sessionid: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, { message: "Invalid SESSION_ID format" }),
})

export async function startStudy({ prolificid, studyid, sessionid }) {
  // Parse input
  let serverErrors
  try {
    // Use Zod to validate the received data against the UserSchema
    const result = studySchema.safeParse({ prolificid, studyid, sessionid })

    // Check if the validation is successful
    if (result.success) {
      // Start page
      const client = await clientPromise
      const db = client.db("HemVip")

      const studies = await db.collection("studies").find({}).toArray()

      const filter = { status: "new" }

      const updateDoc = {
        $set: {
          status: "started", // New status
          prolific_userid: prolificid, // New prolific_userid
          prolific_studyid: studyid, // New prolific_studyid
          prolific_sessionid: sessionid, // New prolific_sessionid
        },
      }

      const result = await db.collection("studies").updateOne(filter, updateDoc)

      if (result.matchedCount > 0) {
        return {
          errors: null,
          success: true,
          data: result,
          msg: "Success to start a study",
        }
      } else {
        return {
          errors: null,
          success: false,
          data: null,
          msg: "All study is complete",
        }
      }
    } else {
      // If validation errors, map them into an object
      serverErrors = Object.fromEntries(
        result.error?.issues?.map((issue) => [issue.path[0], issue.message]) ||
          []
      )
      return {
        errors: serverErrors,
        success: true,
        data: null,
        msg: "Failed to parse proflificid, studyid, sessionid",
      }
    }
  } catch (error) {
    return {
      errors: error,
      success: false,
      data: null,
      msg: "Internal server error",
    }
  }
}
