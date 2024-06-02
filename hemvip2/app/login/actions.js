"use server"

import { createClient } from "@/utils/supabase/server"

export async function loginAction(data) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword(data)

  return { error }
}
