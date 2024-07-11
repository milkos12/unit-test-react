import { useState, useEffect } from "react"

export const TestingStateChange = () => {
    const [loaded, setLoad] = useState(false)
    const [toogleTextVisble, setToggleVissble] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)

    useEffect(() => {setLoad(true)},[])

    return (
        <div>
            {loaded && <h3>Page loaded</h3>}
            {toogleTextVisble && <p>Text visible</p>}
            <button onClick={() => setToggleVissble(true)}>
                Toogle text
            </button>
        </div>
    )
}