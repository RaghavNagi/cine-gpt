import userImg from "../assets/userImg.jpeg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearchClick  =() =>{
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);

  return (
    <div className="absolute w-screen px-2 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="h-16"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user &&(<div className="flex justify-end gap-2">
        <button className="py-2 px-4 m-2 bg-purple-600 text-white rounded-md font-bold"
        onClick={handleGptSearchClick}
        >cineGPT Search</button>
        {/* <img className="w-12 h-12 mt-2" src={user?.photoURL} alt="user-icon" /> */}
        <img className="w-12 h-12 mt-2" src={userImg} alt="user-icon" />
        <button
          onClick={handleSignOut}
          className="font-bold text-white bg-[#212121]"
        >
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
