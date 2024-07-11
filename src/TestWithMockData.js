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
                            {item.email}
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
        </div>
    )
}

export default TestWithMockData;