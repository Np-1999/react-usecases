// Handling file input i.e. uncontrolled components
// https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag

import React, { useRef, useState } from 'react';

const FileUpload = function FileUpload() {
  const [inputs, setInputs] = useState({
    textInfo: '',
  });
  const fileInput = useRef<HTMLInputElement | null>(null);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    // Nullish Coalescing
    const fileList = fileInput?.current?.files;
    // eslint-disable-next-line no-alert
    alert(fileList?.item(0)?.name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="textInfo" value={inputs.textInfo} onChange={handleChange} />
      <input type="file" name="fileUpload" ref={fileInput} required />
      <input type="submit" />
    </form>
  );
};

export default FileUpload;
