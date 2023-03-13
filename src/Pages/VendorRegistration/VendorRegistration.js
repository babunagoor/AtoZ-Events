import React, { useState, useRef, useEffect } from "react";
import Thanks from "../../Assets/Images/bg_signup.jpg";
import "./VendorRegistartion.css";
import { useFormik } from "formik";
import Logo from "../../Assets/Images/favIcon.png";
import backArrow from "../../Assets/Images/backIcon.png";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Components/Firebase/Firebase";

export default function VendorRegistartion() {
  const navigateTo = useNavigate();
  const form = useRef();
  const [nextStep, setNextStep] = useState(0);
  const [items, setItems] = useState([]);
  const [newUser, setNewUser] = useState(null);

  const handleSubmit = (e) => {
    localStorage.clear("VendorDetails", JSON.stringify(e));
    setItems(e);
    localStorage.setItem("VendorDetails", JSON.stringify(e));
    createUserWithEmailAndPassword(auth, e.email, e.password)
      .then((user) => {
        setNewUser("Creating...");
        setTimeout(() => {
          setNewUser("Successfully created");
        }, 2000);
      })
      .catch((err) => {
        setNewUser("**User already Exits");
        const Load = async () => {
          await new Promise((res) => {
            setTimeout(() => {
              res(setNewUser("**Please Enter a new Email Id"));
            }, 2000);
          });
          await new Promise((res) => {
            setTimeout(() => {
              res(setNewUser(null));
            }, 2000);
          });
        };
        Load();
      });
    navigateTo("/atoz/vendor-dashboard");
    // alert(JSON.stringify(newUser))
  };
  useEffect(() => {
    localStorage.setItem("VendorDetails", JSON.stringify(items));
  }, [items]);

  const formik = useFormik({
    initialValues: {
      businessName: "",
      Town: "",
      phonenumber: "",
      category: "",
      userName: "",
      password: "",
      email: "",
    },
    // validationSchema: schemaLimits,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  return (
    <div className="flex flex-row justify-between gap-x-[24px] h-[100vh]">
      <div className="">
        <img src={Thanks} alt="Thanks You" className="bgSignup" />
        <p className="absolute font-extrabold text-[30px] bottom-[120px] left-[80px] text-white flex flex-col items-center">
          <img src={Logo} alt="" className="w-[100px] h-[100px]" />
          <p>Boost your Business Sales with us</p>
        </p>
      </div>
      <div className="pr-[100px] mt-[50px]">
        <div className="flex items-baseline justify-center">
          {/* <img src={Logo} alt="" className="w-[100px] h-[100px]" /> */}
          <p className="text-[26px] text-[#f53a25] font-semibold">
            For Free and Grow Your Business.
          </p>
        </div>
        <div className="text-center FormInput">
          {nextStep === 0 ? (
            <div className="">
              <p className="text-[22px] font-bold text-[#404040]">
                Contact Details
              </p>
              <p className="text-[18px] font-[400] text-[#767676]">
                Create your own storefront and be visible to thousands of
                couples.
              </p>
            </div>
          ) : (
            <div className="">
              <p onClick={() => setNextStep(0)}>
                <img
                  src={backArrow}
                  alt="back"
                  className="w-[30px] cursor-pointer"
                />
              </p>
              <p className="text-[22px] font-bold text-[#404040]">
                Login Information
              </p>
            </div>
          )}
          <form
            ref={form}
            className="mt-[30px]  flex flex-col items-center"
            onSubmit={formik.handleSubmit}
          >
            {nextStep === 0 && (
              <div className="flex flex-col gap-y-[30px]">
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  className="business"
                  placeholder="Name of the business"
                  {...formik.getFieldProps("businessName")}
                />
                <input
                  type="text"
                  className="business"
                  {...formik.getFieldProps("Town")}
                  name="Town"
                  id="Town"
                  placeholder="City/Town"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="business"
                  placeholder="Business email"
                  {...formik.getFieldProps("email")}
                />
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  {...formik.getFieldProps("phonenumber")}
                  className="business"
                  placeholder="Phone number"
                />
                <input
                  type="text"
                  name="category"
                  id="category"
                  {...formik.getFieldProps("category")}
                  className="business"
                  placeholder="Business category (E.g. Food,Florist,Designer)"
                />
                <button
                  type="button"
                  className="nextbtn"
                  onClick={() => setNextStep(1)}
                >
                  Next Step
                </button>
              </div>
            )}
            {nextStep === 1 && (
              <div className="mt-[20px]">
                <div className="flex flex-col gap-y-[30px]">
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    {...formik.getFieldProps("userName")}
                    placeholder="Email"
                    className="business"
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    {...formik.getFieldProps("password")}
                    placeholder="Password"
                    className="business"
                  />
                  <button
                    className="nextbtn"
                    type="submit"
                    onClick={() => formik.handleSubmit}
                    // onClick={formikAdd.handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
