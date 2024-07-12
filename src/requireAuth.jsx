import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    console.log("request: ", request)
    console.log("request-url: ", request.url)

    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")
    
    if (!isLoggedIn) {
        throw redirect(`/login?redirectTo=${pathname}`)
    }
}