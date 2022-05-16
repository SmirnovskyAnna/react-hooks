import * as React from "react";

function FormField(props) {
  const { name, label, value, onChange, type = "text" } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
}

export function FormExample() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState(21);

  return (
    <form>
      <FormField
        name="firstName"
        label="First Name:"
        value={firstName}
        onChange={setFirstName}
      />

      <FormField
        name="lastName"
        label="Last Name:"
        value={lastName}
        onChange={setLastName}
      />

      <FormField
        name="age"
        label="Age:"
        value={age}
        type="number"
        onChange={(newValue) => setAge(newValue ? parseInt(newValue) : 0)}
      />
    </form>
  );
}
