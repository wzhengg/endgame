import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const auth = useMemo(() => getAuth(), []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, [auth]);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  });

  return user ? (
    <div className="flex-grow flex flex-col items-center gap-8 py-20">
      <h1 className="text-xl font-bold text-gray-600 tracking-widest">
        {user.displayName!.toUpperCase()}
      </h1>
      <button
        onClick={() => {
          signOut(auth);
          setUser(null);
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
