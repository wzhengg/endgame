import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  const [signInError, setSignInError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const user = useContext(UserContext);
  const navigate = useNavigate();
  const auth = useMemo(() => getAuth(), []);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setSignInError(false);
      navigate("/profile");
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
              e.preventDefault();
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
