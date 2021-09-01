import { useState, useEffect } from 'react'

function getSavedvalue(key, intialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (intialValue instanceof Function) return intialValue()
    return intialValue
}

export default function Localstorage(key, intialValue) {
    const [value, setValue] = useState(() => {
        return getSavedvalue(key, intialValue)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    return [value, setValue]
}
