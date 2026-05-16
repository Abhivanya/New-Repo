import { useEffect, useState } from "react";

export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return function (this: any, ...args: Parameters<T>) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    } as T;
}

export const useDebounce = (value: string, delay: number =500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const timere = setTimeout(()=>{
            setDebouncedValue(value);
        },delay)
        return () => clearTimeout(timere);
    },[delay, value])

    return debouncedValue;

}