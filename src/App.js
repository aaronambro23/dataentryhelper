import React, { useState } from 'react';


function Header() {
  return <h1>Data Entry Helper</h1>;
}

const Description = () => {
  return <p>Upload a photo and our data entry helper will extract the text you need</p>;
}

 function UploadForm() {
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    // handle file upload
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload Photo</button>
    </form>
  );
}


function App() {
  return (
    <div>
      <Header />
      <Description />
      <br />
      <UploadForm />
    </div>
  );
}

export default App;
