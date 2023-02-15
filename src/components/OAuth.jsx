import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, serverTimestamp } from "firebase/firestore";


const OAuth = () => {
  const navigate = useNavigate();
  
  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      
      const docRef = doc(db,"users", user.uid )

      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email : user.email, 
          timestamp: serverTimestamp(), 
        })
      }
      
      navigate('/')
      toast.success('Registro exitoso');

    } catch (error) {
      toast.error(error.message)
      console.log(error);
    }
  }

  return (
    <div className="mt-6">
      <button type="button"
        className=" flex item-center justify-center sm:text-xs lg:text-xl md:text-md w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-900 focus:outline-none focus:bg-[#FB8500] hover:shadow-lg"
        onClick={onGoogleClick}
      >
        <FcGoogle className="text-2xl bg-white rounded-full mr-2 align-middle " />
        Cuenta Google
      </button>
    </div>
  );
};

export default OAuth;
