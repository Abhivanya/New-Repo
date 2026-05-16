import { githubApi } from "@/app/lib/github-api"
import { useQuery } from "@tanstack/react-query"


export const useUserByUsername = (username:string)=>{
    return useQuery({
        queryKey : ["user-by-username", username],
        queryFn : async () => githubApi(`/users/${username}`).then(res => res.data),
        enabled : !!username
    })
}