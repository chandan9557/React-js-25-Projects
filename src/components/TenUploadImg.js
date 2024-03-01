import React, { useState } from "react";

const TenUploadImg = () => {
  const [file, setFile] = useState(null);
  const handleFilechange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFilechange} />
      {file && <img src={URL.createObjectURL(file)} alt="upload file"/>}
    </div>
  );
};

export default TenUploadImg;
