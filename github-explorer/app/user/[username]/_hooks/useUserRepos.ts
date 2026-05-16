import { githubApi } from "@/app/lib/github-api"
import { useQuery } from "@tanstack/react-query"


export const useUserRepos = (username:string)=>{
    return useQuery({
        queryKey : ["user-repos", username],
        queryFn : async () => githubApi(`/users/${username}/repos`).then(res => res.data),
        enabled : !!username
    })
}