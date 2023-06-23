import { useState, useEffect } from "react"

const googleAutocomplete = async text =>
    new Promise((resolve, reject) => {
        if (!text) {
            return reject("Need valid text input")
        }

        // for use in things like GatsbyJS where the html is generated first
        if (typeof window === "undefined") {
            return reject("Need valid window object")
        }

        try {
            new window.google.maps.places.AutocompleteService().getPlacePredictions(
                { input: text, componentRestrictions: { country: "ca" } },
                resolve
            )
        } catch (e) {
            reject(e)
        }
    })

export function useAutoComplete(text = "", debounceTimeout = 400) {
    const [predictions, setPredictions] = useState([])

    useEffect(() => {
        const handleDebounce = setTimeout(async () => {
            try {
                if (!text) {
                    return
                }
                const nextPredictions = await googleAutocomplete(text)
                setPredictions(nextPredictions)
            } catch (e) {
                console.error(e)
            }
        }, debounceTimeout)

        return () => {
            clearTimeout(handleDebounce)
        }
    }, [text, debounceTimeout])

    return predictions
}
