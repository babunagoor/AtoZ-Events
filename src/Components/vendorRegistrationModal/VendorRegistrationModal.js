import React,{useEffect} from 'react'
import closeIcon from '../../Assets/Icons/closeIcon.png'
import userIcon from '../../Assets/Icons/userIcon.png'
import emailIcon from '../../Assets/Icons/emailIcon.png'
import callIcon from '../../Assets/Icons/callIcon.png'
import {Formik,Form,Field} from 'formik';
import './vendorRegistrationModal.css'
import {motion, AnimatePresence } from 'framer-motion'

 


const variants = {
    modalHidden: { opacity: 0, transition: { duration: 0.2 } },
    modalVisible: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    bgHidden: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    bgVisible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

function VendorRegistrationModal({
    // isModalOpen=false,
    handleClose = ()=>{},
    ipaddress = false,
    onClose,
    onBackdropClick,
    onBack,
    show: isModalOpen,
    title,
    showCloseButton,
    showBackButton,
    children,
    className = '',
    isLoading = false,
    isProcessing = false,
    bar = false,
    smallModal = true,
    ...props
}) 
{
    useEffect(() => {
        if (isModalOpen === true) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
        return () => {
          document.body.style.overflow = 'unset';
        };
      });
    return (
        // <>

        // { isModalOpen &&
        //         <div className="modal absolute flex items-center justify-center w-[100vw] h-[100vh] bg-black/60 top-[0px] left-[0px] right-[0px] bottom-[0px] z-30 overflow-y-hidden">
        //             <div className="bg-white w-[500px] h-[450px] rounded-2xl p-[20px] mt-[5px] flex flex-col">
        //                 <div className="flex flex-row items-center justify-between w-[100%]">
        //                     <div>
        //                         <p className="text-sm text-gray-500"> ANCHOR KIRAN </p>
        //                         <h1 className="mt-1 text-xl font-semibold"> Request pricing </h1>
        //                     </div>
        //                     <div onClick={()=> handleClose()}>
        //                         <img
        //                             src={closeIcon}
        //                             alt=""
        //                             className="cursor-pointer"
        //                         />
        //                     </div>
        //                 </div>
        //                 <p className="mt-2 text-xs text-gray-500 w-[100%]"> Fill this Form and Anchor Kiran will contact you shortly.
        //                     All the Information provided will be treated confidentially.
        //                 </p>
        //                 <Formik
        //                     initialValues = {{
        //                         textArea : '',
        //                         name : '',
        //                         email : '',
        //                         phonenumber : '',
        //                         eventdate : ''
        //                     }}
        //                     validationSchema = {""}
        //                     onSubmit ={(values)=>(
        //                         console.log(values)
        //                     )}
        //                 >
        //                     {({touched})=>(
        //                         <Form className="w-[100%] mt-3 ">
        //                             <Field 
        //                                 className="w-[100%] border-solid border-2 outline-none min-h-[70px] rounded p-[5px] text-sm"
        //                                 name="textArea"
        //                                 as="textarea"
        //                                 placeholder="Message"
        //                                 rows='3'
        //                                 maxLength="150" 
        //                                 style = {{resize: "none"}}
        //                             />
        //                             <div className="relative">
        //                                 <Field 
        //                                     className="w-[100%] border-solid border-2 outline-none rounded p-[5px] text-sm mt-2"
        //                                     name="name"
        //                                     type="text"
        //                                     placeholder="Name and Surname"
                                            
        //                                 />
        //                                 <img src={userIcon} alt="" className="absolute right-[6px] top-[13px] h-[18px] w-[18px]" />
        //                             </div>
        //                             <div className="relative flex flex-row justify-between">
        //                                 <Field 
        //                                         className="w-[48%] border-solid border-2 outline-none rounded p-[5px] text-sm mt-4"
        //                                         name="email"
        //                                         type="email"
        //                                         placeholder="Email"
                                                
        //                                 />
        //                                 <img src={emailIcon} alt="" className="h-[18px] w-[18px] absolute top-[22px] left-[190px]" />

        //                                 <Field 
        //                                         className="w-[48%] border-solid border-2 outline-none rounded p-[5px] text-sm mt-4"
        //                                         name="phonenumber"
        //                                         type="text"
        //                                         placeholder="Phone number"
                                                
        //                                 />
        //                                 <img src={callIcon} alt="" className="absolute top-[22px] right-[6px] h-[20px]" />
        //                             </div>

        //                             <Field 
        //                                 className="w-[48%] border-solid border-2 outline-none rounded p-[5px] text-sm mt-4"
        //                                 name="eventdate"
        //                                 type="date"
        //                                 placeholder="Event Data"   
        //                             />
                                
        //                             <button type="submit" className="w-[100%] mt-7 h-[35px] bg-red-500 text-white rounded"> Submit </button>
                                    
                                    
                                    
        //                         </Form>
        //                     )}

        //                 </Formik>

        //             </div>
        //         </div>
        // }

        // </>
        <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            key="bg"
            variants={variants}
            animate="bgVisible"
            initial="bgHidden"
            exit="bgHidden"
            onClick={onBackdropClick}
            className={'modal_bg'}
            {...props}
          >
            <motion.div
              key="modal"
              variants={variants}
              animate="modalVisible"
              initial="modalHidden"
              exit="modalHidden"
              className={`modal ${className}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {/* Modal Header */}
              <div
                className={`w-full flex items-center ${
                  showBackButton && showCloseButton
                    ? 'justify-between'
                    : showCloseButton
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                {showBackButton && (
                  <button onClick={onBack} type="button" className="self-start">
                    {/* <img src={backArrowIcon} width="20" height="20" /> */}
                  </button>
                )}
                {title && (
                  <div className="modal__header__infos">
                    <h3 className="modal__header__infos__title">{title}</h3>
                  </div>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    type="button"
                    className={`${
                      smallModal ? 'self-end' : 'self-end mb-4 -mr-5'
                    }`}
                  >
                    <div
                      className={`${
                        smallModal
                          ? 'icon-close text-cgy3 mr-0.5 hover:text-cgy4'
                          : 'icon-close text-cgy3 mr-5 hover:text-cgy4'
                      }`}
                    />
                  </button>
                )}
              </div>
              {title && bar ? (
                // <HBar className="mt-5 bg-cm5" />
                ''
              ) : (
                <div className={`${!ipaddress ? '' : 'mt-0'}`} />
              )}
              {/* Modal Body */}
              <motion.div className="modal__body">
                {children}
                <AnimatePresence>
                 
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
        
    );
    

}

export default VendorRegistrationModal