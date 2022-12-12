import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [createAccountError, setCreateAccountError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const auth = getAuth();
  const createUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log(user);
      setCreateAccountError(false);
    } catch (err) {
      console.log(err);
      setCreateAccountError(true);
    }
  };

  return (
    <div className="bg-gray-100 grid place-items-center flex-grow">
      <div className="bg-white text-gray-600 p-12">
        <form className="flex flex-col items-center gap-4">
          <h2 className="tracking-widest font-semibold">CREATE ACCOUNT</h2>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-2 p-2 border-gray-200"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-2 p-2 border-gray-200"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-2 p-2 border-gray-200"
            name="email"
            value={formData.email}
            onChange={(e) => onInputChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-2 p-2 border-gray-200"
            name="password"
            value={formData.password}
            minLength={6}
            onChange={(e) => onInputChange(e)}
          />
          <button
            onClick={(e) => {
              // e.preventDefault();
              createUser();
            }}
            className="tracking-widest text-sm font-semibold w-full py-2 border-2 border-gray-700"
          >
            CREATE
          </button>
          {createAccountError ? (
            <span className="tracking-widest text-xs text-red-600">
              ERROR CREATING ACCOUNT
            </span>
          ) : null}
          <span className="tracking-widest text-xs">
            <Link to="/login">ALREADY HAVE AN ACCOUNT? LOG IN</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
