
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";

const UserForm = () => {
  const fnameref = useRef<any>();
  const lnameref = useRef<any>();
  const ageref = useRef<any>();
  const locref = useRef<any>();
  const skillsref = useRef<any>();
  const qualref = useRef<any>();
  const fileref = useRef<any>();
  const passref = useRef<any>();
  const cpassref = useRef<any>();

  const [isFormValid, setIsFormValid] = useState(false);

  // Feedback messages
  const [feedback, setFeedback] = useState({
    firstName: "",
    lastName: "",
    age: "",
    location: "",
    skills: "",
    qualification: "",
    file: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const messages: any = {};

    // First Name Validation
    if (fnameref.current.value.length && fnameref.current.value.length >= 5) {
      messages.firstName = "Success!";
    } else {
      messages.firstName = "First name must be more than 4 characters.";
    }

    // Last Name Validation
    if (lnameref.current.value.length && lnameref.current.value.length > 2) {
      messages.lastName = "Success!";
    } else {
      messages.lastName = "Last name must be more than 2 characters.";
    }

    // Age Validation
    const age = parseInt(ageref.current.value);
    if (age && age > 18) {
      messages.age = "Success!";
    } else {
      messages.age = "You must be older than 18.";
    }

    // Location Validation
    if (locref.current.value !== "") {
      messages.location = "Success!";
    } else {
      messages.location = "Location is required.";
    }

    // Skills Validation
    if (skillsref.current && skillsref.current.selectedOptions.length > 1) {
      messages.skills = "Success!";
    } else {
      messages.skills = "Select at least two skill.";
    }

    // Qualification Validation
    if (qualref.current && qualref.current.selectedOptions.length > 1) {
      messages.qualification = "Success!";
    } else {
      messages.qualification = "Select at least two qualification.";
    }

    // File Validation
    if (fileref.current && fileref.current.files.length > 0) {
      messages.file = "File uploaded successfully!";
    } else {
      messages.file = "Please upload a file.";
    }

    // Confirm Password Validation
    if (passref.current.value && passref.current.value === cpassref.current.value) {
      messages.confirmPassword = "Passwords match successfully!";
    } else {
      messages.confirmPassword = "Passwords do not match.";
    }

    setFeedback(messages);

    // Determine if the entire form is valid
    const isValid = Object.values(messages).every(
      (msg) => msg === "Success!"  || msg === "File uploaded successfully!" || msg === "Passwords match successfully!"
    );
    setIsFormValid(isValid);
  };

  const handleChange = () => {
    validateForm();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Form</h2>
      <form>
        {/* First Name */}
        <div className="form-group mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            ref={fnameref}
            className="form-control"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <small className={feedback.firstName.includes("Success") ? "text-success" : "text-danger"}>
            {feedback.firstName}
          </small>
        </div>

        {/* Last Name */}
        <div className="form-group mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            ref={lnameref}
            className="form-control"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
          <small className={feedback.lastName.includes("Success") ? "text-success" : "text-danger"}>
            {feedback.lastName}
          </small>
        </div>

        {/* Age */}
        <div className="form-group mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            id="age"
            ref={ageref}
            className="form-control"
            placeholder="Enter your age"
            onChange={handleChange}
          />
          <small className={feedback.age.includes("Success") ? "text-success" : "text-danger"}>
            {feedback.age}
          </small>
        </div>

        {/* Location */}
        <div className="form-group mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            id="location"
            ref={locref}
            className="form-control"
            placeholder="Enter your location"
            onChange={handleChange}
          />
          <small className={feedback.location.includes("Success") ? "text-success" : "text-danger"}>
            {feedback.location}
          </small>
        </div>

        {/* Skills */}
        <div className="form-group mb-3">
          <label htmlFor="skills" className="form-label">Skills</label>
          <select
            id="skills"
            ref={skillsref}
            className="form-select"
            multiple
            onChange={handleChange}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
          </select>
          <small className={feedback.skills.includes("Success") ? "text-success" : "text-danger"}>
            {feedback.skills}
          </small>
        </div>

        {/* Qualification */}
        <div className="form-group mb-3">
          <label htmlFor="qualification" className="form-label">Qualification</label>
          <select
            id="qualification"
            ref={qualref}
            className="form-select"
            multiple
            onChange={handleChange}
          >
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
          </select>
          <small className={feedback.qualification.includes("Success") ? "text-success" : "text-danger"}>
            {feedback.qualification}
          </small>
        </div>

        {/* File */}
        <div className="form-group mb-3">
          <label htmlFor="file" className="form-label">Upload File</label>
          <input
            type="file"
            id="file"
            ref={fileref}
            className="form-control"
            onChange={handleChange}
          />
          <small className={feedback.file.includes("successfully") ? "text-success" : "text-danger"}>
            {feedback.file}
          </small>
        </div>

        {/* Password */}
        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            ref={passref}
            className="form-control"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="form-group mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            ref={cpassref}
            className="form-control"
            placeholder="Re-enter your password"
            onChange={handleChange}
          />
          <small className={feedback.confirmPassword.includes("successfully") ? "text-success" : "text-danger"}>
            {feedback.confirmPassword}
          </small>
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
