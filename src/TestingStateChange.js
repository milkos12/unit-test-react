import { useState, useEffect } from "react"

const data = [
    {
        id: 1,
        name: 'kunal'
    },
    {
        id: 2,
        name: 'paul'
    },
    {
        id: 3,
        name: 'lisandro'
    },
]
  

export const TestingStateChange = () => {
    const [loaded, setLoad] = useState(false)
    const [toogleTextVisble, setToggleVissble] = useState(true)
    const [elements, setElements] = useState(data)

    useEffect(() => {setLoad(true)},[])

    return (
        <div>
            {loaded && <h3>Page loaded</h3>}
            {toogleTextVisble && <p>Text visible</p>}
            <button onClick={() => setToggleVissble(true)}>
                Toogle text
            </button>

            <h3> List </h3>
            {
                elements.map(item => (
                    <div key={item.id} data-testid='record'>
                        { item.id } : { item.name }
                    </div>
                ))
            }

            <button onClick={() => {
                setElements([
                    ...elements,
                    {id:4, name: 'abhinav'}
                ])
            }}> Add to list </button>
        </div>
    )
}