import React, {useState} from "react";
import {BASE_API_URL} from "../../api/api";

const UploadImage = ({handleImage}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.data);
    const response = await fetch(`${BASE_API_URL}/images/upload-image`, {
      method: "POST",
      body: formData,
    });
    const responseWithBody = await response.json();
    if (response) handleImage(responseWithBody.url);
  };

  return (
    <div>
      <input type="file" name="file" onChange={handleFileChange}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UploadImage;
