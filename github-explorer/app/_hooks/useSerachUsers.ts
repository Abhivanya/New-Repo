"use client";
import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../lib/github-api";


export const SEACH_USERS_QUERY_KEY = "search-users";

export function useSearchUsers(query: string) {
    return useQuery({
        queryKey : [SEACH_USERS_QUERY_KEY, query],
        queryFn : async () => {
            if(!query) return [];
            const res = await githubApi(`/search/users?q=${query}`);
            return res.data.items;
        },
        enabled : query.trim().length > 0
    })
}