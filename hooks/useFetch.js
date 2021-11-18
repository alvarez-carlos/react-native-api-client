import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const res = await fetch(url)
        const dataJSON = await res.json()
        setData(dataJSON)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { loading, data }
}

export default useFetch