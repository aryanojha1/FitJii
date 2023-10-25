import React, { useState } from "react";
import styles from "./calculator.module.css";

const Second = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const [formError, setFormError] = useState("");

  const [bmiResult, setBmiResult] = useState("");
  const [weightStatus, setWeightStatus] = useState("");

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2); // Round BMI to 2 decimal places
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!height || !weight || !age || !gender) {
      setFormError("Fill All Fields");
      setBmiResult("");
      setWeightStatus("");
    } else {
      setFormError("");

      const bmi = calculateBMI(weight, height);

      setBmiResult(bmi);

      if (bmi < 18.5) {
        setWeightStatus("Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setWeightStatus("Healthy");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setWeightStatus("Overweight");
      } else {
        setWeightStatus("Obese");
      }

      // Reset form fields
      setHeight("");
      setWeight("");
      setAge("");
      setGender("");
      setEmail("");
    }
  };

  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <p className="paragraph">Fill Details And Receive Email</p>
        <h2>Your BMI</h2>
        <p>
          Overrideds on hanging fruits to identify ball park value added
          activity to beta overrided the digitals divided with additionals
          clickthroughs from line.
        </p>
        <form onSubmit={(e) => formHandler(e)}>
          <div>
            <input
              type="number"
              placeholder="Height / cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="number"
              placeholder="Weight / kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
          <p className={styles.error}>{formError}</p>
        </form>
      </div>
      <div>
        <h2>BMI Result</h2>
        {bmiResult && (
          <div>
            <p>
              Your BMI: <strong>{bmiResult}</strong>
            </p>
            <p>
              Weight Status: <strong>{weightStatus}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Second;
