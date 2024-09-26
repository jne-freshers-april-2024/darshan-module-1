import React, { useEffect, useState } from "react";
import './styles.css';
const FetchingDataUseEffect = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((apiData) => setApiData(apiData))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])

    return (
        <div>
            <table  border={2} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>useename</th>
                        <th>email</th>
                        <th>address</th>
                        <th>phone </th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>
                            <div>
                                <p>street :{data.address.street}</p>
                                <p>Suite: {data.address.suite}</p>
                                <p>City: {data.address.city}</p>
                                <p>Zipcode: {data.address.zipcode}</p>
                                <p>Geo Location: {`Lat: ${data.address.geo.lat}, Lng: ${data.address.geo.lng}`}</p>
                            </div>
                            </td>
                            <td>{data.phone}</td>
                            <td>{data.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FetchingDataUseEffect;