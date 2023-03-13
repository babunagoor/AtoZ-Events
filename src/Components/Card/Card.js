import React, { useState } from "react";
import PropTypes from "prop-types";
import SimpleImageSlider from "react-simple-image-slider";
import starIcon from "../../Assets/Icons/starIcon.png";
import coinsIcon from "../../Assets/Icons/coinsIcon.png";
import tagIcon from "../../Assets/Icons/tagIcon.png";
import lightIcon from "../../Assets/Icons/lightIcon.png";
import VendorRegistrationModal from "../../Components/vendorRegistrationModal/VendorRegistrationModal";
import closeIcon from "../../Assets/Icons/closeIcon.png";
import userIcon from "../../Assets/Icons/userIcon.png";
import emailIcon from "../../Assets/Icons/emailIcon.png";
import callIcon from "../../Assets/Icons/callIcon.png";
import { Formik, Form, Field } from "formik";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Card({ imageSrc, title, rating, location, cost, promotion, time }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className="w-[400px] h-[605px] border rounded-xl hover:shadow-2xl mt-5">
        <SimpleImageSlider
          width="398px"
          height="300px"
          images={imageSrc}
          showBullets={true}
          // showNavs={true}
          // style={{ borderRadius: "15px" }}
        />
        <div className="flex flex-col p-3">
          <h3 className="mb-5 font-bold">{title}</h3>
          <div className="flex">
            <img src={starIcon} alt="star" className="mr-2 h-7 w-7" />
            <p className="mr-3 font-semibold">{rating}/5</p>
            <p>{location}</p>
          </div>
          <div className="flex mt-3">
            <img src={coinsIcon} alt="" />
            <p className="ml-3">
              <span className="font-semibold ">From Rs.</span>
              <span className="font-bold">{cost}</span>
            </p>
          </div>
          {promotion.percentage ? (
            <div className="flex mt-3">
              <img src={tagIcon} alt="" className="w-5 h-5" />
              <p className="ml-3">
                <span className="mr-1 font-semibold ">Promotion</span>
                <span className="text-sm text-orange-400">
                  {promotion.percentage}%
                </span>
              </p>
            </div>
          ) : null}
          <button
            className="border rounded-md border-[#9a10e9] w-[100%] py-3 mt-12 text-[#9a10e9] font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Request Pricing
          </button>

          <div className="flex justify-center mt-3 mb-0">
            <img src={lightIcon} alt="" className="mr-2" />
            <p>Responds within {time} hours</p>
          </div>
        </div>
        <VendorRegistrationModal
          handleClose={handleClose}
          show={isModalOpen}
          className={`w-[500px] h-[450px] rounded-2xl mt-[5px] flex flex-col`}
        >
          <div className="bg-white w-[500px] h-[450px] rounded-2xl mt-[5px] flex flex-col">
            <div className="flex flex-row items-start justify-between ">
              <div>
                <p className="text-sm text-gray-500"> ANCHOR KIRAN </p>
                <h1 className="mt-1 text-xl font-semibold">
                  {" "}
                  Request pricing{" "}
                </h1>
              </div>
              <div
                onClick={() => handleClose()}
                className="-mt-[15px]  float-right"
              >
                <img src={closeIcon} alt="" className="cursor-pointer " />
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500 w-[100%]">
              {" "}
              Fill this Form and Anchor Kiran will contact you shortly. All the
              Information provided will be treated confidentially.
            </p>
            <Formik
              initialValues={{
                textArea: "",
                name: "",
                email: "",
                phonenumber: "",
                eventdate: "",
              }}
              validationSchema={""}
              onSubmit={(values) => console.log(values)}
            >
              {({ touched }) => (
                <Form className="w-[100%] mt-3 ">
                  <Field
                    className="w-[100%] border-solid border-2 outline-none min-h-[70px] rounded p-[5px] text-sm"
                    name="textArea"
                    as="textarea"
                    placeholder="Message"
                    rows="3"
                    maxLength="150"
                    style={{ resize: "none" }}
                  />
                  <div className="relative">
                    <Field
                      className="w-[100%] border-solid border-2 outline-none rounded p-[5px] h-[45px] text-sm mt-2"
                      name="name"
                      type="text"
                      placeholder="Name and Surname"
                    />
                    <img
                      src={userIcon}
                      alt=""
                      className="absolute right-[6px] top-[20px] h-[18px] w-[18px]"
                    />
                  </div>
                  <div className="relative flex flex-col justify-between">
                    <div>
                      <Field
                        className="w-[100%] border-solid border-2 outline-none h-[45px] rounded p-[5px] text-sm mt-4"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                      <p className="float-right pr-[25px]">
                        <img
                          src={emailIcon}
                          alt=""
                          className="h-[18px] w-[18px] absolute top-[30px] "
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center justify-between">
                      <Field
                        className="w-[250px] border-solid border-2 outline-none rounded p-[5px] h-[45px] text-sm mt-4"
                        name="phonenumber"
                        type="text"
                        placeholder="Phone number"
                      />
                      <img
                        src={callIcon}
                        alt=""
                        className="absolute left-[240px] mt-[14px] h-[20px]"
                      />
                    </div>
                    <div>
                      <Field
                        className="w-[250px] border-solid border-2 outline-none rounded p-[5px] h-[45px] text-sm mt-4"
                        name="eventdate"
                        type="date"
                        placeholder="Event Data"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-[100%] mt-7 h-[50px] bg-red-500 text-white rounded"
                    onClick={() => handleClose()}
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </VendorRegistrationModal>
      </div>
    </AnimationOnScroll>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
