import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import OAuth from "../components/OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      console.log(user);
      navigate('/');
      toast.success('Registro exitoso');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <section>
      <div
        className="rounded-2xl flex 
      justify-center 
      flex-wrap 
      items-center 
      px-6 py-12 
      max-w-6xl 
      mx-auto 
      w-full 
      p-6 
      m-auto 
      bg-white  
      shadow-md "
      >
        <div className="md:w-[40%] lg:w-[50%] mb-0 md:mb-3 sm:mb-0 sm:w-[30%]">
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-acceder-al-perfil-movil_114360-83.jpg?w=826&t=st=1676245114~exp=1676245714~hmac=de969bb845bc2cbf77a76ed30fc0704dc93d15f44af9c1fa4f587f203604a8e2"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 relative flex flex-col justify-center min-h-fit overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-black ">
              Registrate
            </h1>
            <form className="mt-6" onSubmit={onSubmit}>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block sm:text-xs lg:text-lg md:text-md font-semibold text-gray-800"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-[#023047] bg-white border rounded-md focus:border-[#00B4D8] focus:ring-[#90E0EF] focus:outline-none focus:ring focus:ring-opacity-40"
                  id="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block sm:text-xs lg:text-lg md:text-md font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-[#023047] bg-white border rounded-md focus:border-[#00B4D8] focus:ring-[#90E0EF] focus:outline-none focus:ring focus:ring-opacity-40"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="mb-2 relative">
                <label
                  htmlFor="password"
                  className="sm:text-xs lg:text-lg md:text-md block font-semibold text-gray-800"
                >
                  Contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full px-4 py-2 mt-2 text-[#023047] bg-white border rounded-md focus:border-[#00B4D8] focus:ring-[#90E0EF] focus:outline-none focus:ring focus:ring-opacity-40"
                  id="password"
                  value={password}
                  onChange={onChange}
                />
                {showPassword ? (
                  <AiFillEyeInvisible
                    className="absolute right-3 lg:top-12 md:top-9 sm:top-9 max-sm:top-11  text-xl cursor-pointer"
                    onClick={() => setShowPassWord((prevState) => !prevState)}
                  />
                ) : (
                  <AiFillEye
                    className="absolute right-3 lg:top-12 md:top-9 sm:top-9 max-sm:top-11  text-xl cursor-pointer"
                    onClick={() => setShowPassWord((prevState) => !prevState)}
                  />
                )}
              </div>

              <div className="mt-6">
                <button className="sm:text-xs lg:text-xl md:text-md w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#03045E] rounded-md hover:bg-[#90E0EF] focus:outline-none focus:bg-[#FB8500] hover:shadow-lg">
                  Registrarse
                </button>
              </div>
            </form>
            <p className="sm:text-xs lg:text-lg md:text-md mt-4 font-light text-center text-[#03045E]">
              {" "}
              Ya tienes una cuenta?{" "}
            </p>
            <p href="#" className="sm:text-xs lg:text-lg md:text-md text-center text-[#FB8500] hover:underline">
              <Link to="/SignIn"> Incia sesion </Link>
            </p>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="sm:text-s lg:text-xl md:text-lg font-semibold text-black ">
                o registrate con
              </p>
            </div>
            <OAuth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
