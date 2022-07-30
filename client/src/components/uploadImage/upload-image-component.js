import React, { useState } from 'react'

const UploadImage = () => {

    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setFile(img)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", file.data);
        const response = await fetch("http://localhost:3001/images/upload-image", {
            method: "POST",
            body: formData,
        });
        const responseWithBody = await response.json();
        if (response) setUrl(responseWithBody.url);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={handleFileChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UploadImage