import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    contact: '',
    about: '',
    gender: '',
    resume: null,
    url: '',
  });

  const [errors, setErrors] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (e) => {
    setValues({ ...values, resume: e.target.files[0] });
  };

  const validate = () => {
    const newErrors = {};
    if (!values.FirstName.trim()) newErrors.FirstName = 'First Name is required';
    if (!values.LastName.trim()) newErrors.LastName = 'Last Name is required';
    if (!values.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = 'Email is invalid';
    if (!values.contact.trim()) newErrors.contact = 'Contact is required';
    else if (!/^\d{10}$/.test(values.contact))
      newErrors.contact = 'Contact must be 10 digits';
    if (!values.gender) newErrors.gender = 'Gender is required';
    if (!values.resume) newErrors.resume = 'Resume is required';
    if (!values.url.trim()) newErrors.url = 'URL is required';
    else if (!/^(http|https):\/\/[^ "]+$/.test(values.url))
      newErrors.url = 'URL is invalid';
    if (!values.about.trim()) newErrors.about = 'About section is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully:', values);
      setErrors({});
      alert('Form submitted successfully!');
    }
  };

  const handleReset = () => {
    setValues({
      FirstName: '',
      LastName: '',
      email: '',
      contact: '',
      about: '',
      gender: '',
      resume: null,
      url: '',
    });
    setErrors({});
  };

  return (
    <div className="container">
      <h1>Signup Form</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="FirstName"
          id="FirstName"
          value={values.FirstName}
          onChange={handleChanges}
        
        />
        {errors.FirstName && <p className="error">{errors.FirstName}</p>}

        <label htmlFor="LastName">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="LastName"
          id="LastName"
          value={values.LastName}
          onChange={handleChanges}
        
        />
        {errors.LastName && <p className="error">{errors.LastName}</p>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChanges}
         
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Enter Contact"
          name="contact"
          id="contact"
          value={values.contact}
          onChange={handleChanges}
         
        />
        {errors.contact && <p className="error">{errors.contact}</p>}

        <label htmlFor="gender">Gender</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={values.gender === 'Male'}
              onChange={handleChanges}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={values.gender === 'Female'}
              onChange={handleChanges}
            />{' '}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={values.gender === 'Other'}
              onChange={handleChanges}
            />{' '}
            Other
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <label htmlFor="resume">Resume</label>
        <input type="file" name="resume" onChange={handleFileChange} />
        {errors.resume && <p className="error">{errors.resume}</p>}

        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          value={values.url}
          onChange={handleChanges}
        />
        {errors.url && <p className="error">{errors.url}</p>}

        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="5"
          value={values.about}
          onChange={handleChanges}
          placeholder="Enter description"
        ></textarea>
        {errors.about && <p className="error">{errors.about}</p>}

        <div className="buttons">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
