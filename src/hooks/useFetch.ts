import { useCallback, useEffect, useReducer } from "react";
import axios from "axios";

type State<T> = {
    data?: T,
    error?: Error,
    isLoading: boolean
}

type Action<T> = { type: 'FETCH_INIT' } | { type: 'FETCH_SUCCESS', payload: T } | { type: 'FETCH_ERROR', payload: Error };

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
    switch(action.type) {
        case 'FETCH_INIT':
            return { ...state, isLoading: true };
        case 'FETCH_SUCCESS':
            return { ...state, isLoading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}

export function useFetch<T>(url: string): State<T> {
    const [{ isLoading, error, data }, dispatch] = useReducer(
        fetchReducer<T>, {
            data: undefined,
            error: undefined,
            isLoading: false
        }
    );

    const fetchData = useCallback(async () => {
        dispatch({ type: 'FETCH_INIT' })

        try {
            const response = await axios.get(url)
            if(response.status !== 200) {
                throw new Error(response.statusText);
            } 
            const data = await response.data.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch(error) {
            dispatch({ type: 'FETCH_ERROR', payload: error as Error });
        }
    }, [url]);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { isLoading, error, data };
}