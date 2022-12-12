import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInError, setSignInError] = useState(false);
  const [formData, setFormData] = useState({
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
  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log(user);
      setSignInError(false);
    } catch (err) {
      console.log(err);
      setSignInError(true);
    }
  };

  return (
    <div className="bg-gray-100 grid place-items-center flex-grow">
      <div className="bg-white text-gray-600 p-12">
        <form className="flex flex-col items-center gap-4">
          <h2 className="tracking-widest font-semibold">LOGIN</h2>
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
            onChange={(e) => onInputChange(e)}
          />
          <button
            onClick={(e) => {
              // e.preventDefault();
              signIn();
            }}
            className="tracking-widest text-sm font-semibold w-full py-2 border-2 border-gray-700"
          >
            SIGN IN
          </button>
          {signInError ? (
            <span className="tracking-widest text-xs text-red-600">
              ERROR SIGNING IN
            </span>
          ) : null}
          <span className="tracking-widest text-xs">
            <Link to="/register">DON'T HAVE AN ACCOUNT? CREATE ACCOUNT</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
