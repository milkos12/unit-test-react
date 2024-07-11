import { useEffect } from "react"

const TestingStateChange = () => {
    const [loaded, setLoad] = useState(false)
    useEffect(() => {setLoad(true)},[])

    return (
        <div>
            {loaded && <h3>Page loaded</h3>}
        </div>
    )
}