import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ModifyData = ({ isOpen, onClose, isUpdate, contact }) => {
  const handleSubmit = async (values) => {
    try {
      if (isUpdate) {
        const contactRef = doc(db, "contacts", contact.id);
        await updateDoc(contactRef, values);
        toast.success("Contact Updated Successfully");
      } else {
        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, values);
        toast.success("Contact Added Successfully");
      }
      onClose(); // Close the modal after successfully adding or updating a contact
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: isUpdate ? contact.name : "",
            email: isUpdate ? contact.email : "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="flex mb-5 flex-col gap-[2px]">
              <label htmlFor="name" className="text-sm opacity-90">
                Name
              </label>
              <Field
                name="name"
                placeholder="Enter Your Name"
                className="border-[1px] py-2 px-3 rounded-md outline-none border-[#00000048]"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <label htmlFor="email" className="text-sm opacity-90">
                Email
              </label>
              <Field
                placeholder="Enter Your Email"
                name="email"
                className="border-[1px] py-2 px-3 rounded-md outline-none border-[#00000048]"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 text-white h-[2.8rem] rounded-md mt-[2rem] bg-[#822fbe]"
            >
              <span className="text-3xl">+</span>
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default ModifyData;
