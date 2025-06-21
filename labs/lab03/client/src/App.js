import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [dogImage, setDogImage] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('images', selectedFiles[i]);
    }
    await axios.post('http://localhost:5000/upload', formData);
    alert('Uploaded!');
  };

  const getRandomImages = async () => {
    const res = await axios.get('http://localhost:5000/random-images');
    setRandomImages(res.data);
  };

  const getDogImage = async () => {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setDogImage(res.data.message);
  };

  const uploadDogImage = async () => {
    const response = await axios.get(dogImage, { responseType: 'blob' });
    const formData = new FormData();
    formData.append('dogImage', response.data, 'dog.jpg');
    await axios.post('http://localhost:5000/upload-dog', formData);
    alert('Dog image uploaded to server!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Lab 3 Image Upload</h1>

      <h2>1️⃣ Upload Multiple Images</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <h2>2️⃣ Get Random Uploaded Images</h2>
      <button onClick={getRandomImages}>Get Random Images</button>
      <div style={{ display: 'flex', gap: 10 }}>
        {randomImages.map((img, i) => (
          <img key={i} src={img} alt="random" width={150} />
        ))}
      </div>

      <h2>3️⃣ Get Random Dog Image</h2>
      <button onClick={getDogImage}>Fetch Dog Image</button>
      {dogImage && (
        <div>
          <img src={dogImage} alt="dog" width={200} />
          <button onClick={uploadDogImage}>Upload This Dog to Server</button>
        </div>
      )}
    </div>
  );
}

export default App;
