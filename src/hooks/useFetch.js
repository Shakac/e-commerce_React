import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)

    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        setIsLoading(true)
        axios.get(url)
        .then(res => {
            setInfoApi(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}`
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return [infoApi, getApi, hasError, IsLoading, postApi]
}

export default useFetch