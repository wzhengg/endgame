import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const auth = useMemo(() => getAuth(), []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return user ? (
    <div className="flex-grow flex flex-col items-center gap-8 py-20">
      <h1 className="text-xl font-bold text-gray-600 tracking-widest">
        {user.displayName!.toUpperCase()}
      </h1>
      <button
        onClick={() => {
          signOut(auth);
        }}
        className="text-sm text-gray-600 tracking-widest border-2 border-gray-500 px-6 py-4"
      >
        LOG OUT
      </button>
    </div>
  ) : (
    <h6 className="font-semibold text-gray-600 tracking-widest text-center my-20">
      LOADING...
    </h6>
  );
};

export default ProfilePage;
