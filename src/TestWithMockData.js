import React from "react";

export const TestWithMockData = ({ data, displayUnorderedLIst, handleCick }) => {
    return (
        <div>
            {displayUnorderedLIst ?
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.id}
                            {item.first_name},
                            {item.last_name},
                            <a onClick={()=> {
                                console.log("email Click!!")
                                handleCick()
                            }}>{item.email}</a>
                            {item.age > 50 ? 'Senior': 'Not sernior'}
                        </li>
                        

                    ))}
                </ul>
                :
                <ol>
                    {data.map(item => (
                        <li key={item.id}>
                            Last name: {item.last_name}
                            
                        </li>
                    ))}
                </ol>
            }
            <label htmlFor='password'> Enter password</label>
            <input type='password' id='password'/>
            <input placeholder='Enter name'/>
            <button> Submit </button>
        </div>
    )
}

export default TestWithMockData;