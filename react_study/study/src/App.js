import axios from "axios";
import React, {useEffect, useState} from "react";
import ImageUpload from './ImageUpload';

const App = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("http://3.35.236.83/pard/search/김광일")
            .then((response) => {
                console.log("response: " + JSON.stringify(response.data.data));
                setData(response.data.data);
            })
            .catch((error) => console.log("error: " + error));
    }, []);

    return (
        <div>
            {/* {JSON.stringify(data)} */}
            {
                data && (
                    <div>
                        <p>Name: {data.name}</p>
                        <p>age: {data.age}</p>
                        <img src={data.imgURL}/>
                    </div>
                )
            }
            <ImageUpload/>
        </div>
    );
};

export default App;