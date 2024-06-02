"use client"

import { useCallback, useState } from "react"
import Loading from "@/components/loading/loading.jsx"
import { useRouter } from "next/navigation"
import { loginAction } from "./actions"
import { Callout } from "@/components/core"

export default function LoginPage({ searchParams }) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(searchParams.error)
  const [inforMessage, setInforMessage] = useState(searchParams.info)

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setLoading(true)

      // type-casting here for convenience
      // in practice, you should validate your inputs
      const data = {
        email: email,
        password: password,
      }
      try {
        const { error } = await loginAction(data)
        if (error) {
          // console.log(error)
          setErrorMessage("Could not authenticate user")
          // redirect("/login?message=Could not authenticate user");
        } else {
          router.push("/")
        }
      } catch (error) {
      } finally {
        setLoading(false)
      }
    },
    [email, password, router]
  )

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
            <h3 className="text-xl font-semibold">Sign In</h3>
            <p className="text-sm text-gray-500">
              Use your email and password to sign in
            </p>
          </div>
          <form
            className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-xs text-gray-600 uppercase"
              >
                Email Address
              </label>
              <input
                id="email"
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sample@gmail.com"
                autoComplete="email"
                required
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                type="email"
                name="email"
              />
            </div>
            <div>
              <label
                htmlFor="current-password"
                className="block text-xs text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="current-password"
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                type="current-password"
                name="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              aria-disabled="false"
              className="flex h-10 w-full font-bold text-white bg-green-500 items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
            >
              {loading ? (
                <Loading color="#fff" />
              ) : (
                <>
                  Sign in
                  <span aria-live="polite" className="sr-only" role="status">
                    Submit form
                  </span>
                </>
              )}
            </button>
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a className="font-semibold text-gray-800" href="/register">
                Sign up
              </a>{" "}
              for free.
            </p>
            {errorMessage ? <Callout type="error">{errorMessage}</Callout> : ""}
            {inforMessage ? <Callout type="info">{inforMessage}</Callout> : ""}
          </form>
        </div>
      </div>
    </>
  )
}
