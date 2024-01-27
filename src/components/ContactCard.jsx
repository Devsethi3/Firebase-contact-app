import { PiUserCircleLight } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import ModifyData from "./ModifyData";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <>
      <div className="bg-[#822fbe] contact-wrapper py-2 px-3 rounded-md mt-[1rem] flex items-center justify-between">
        <div
          className="pr-[5rem] contact flex gap-4 items-center"
          key={contact.id}
        >
          <PiUserCircleLight className="text-4xl user-img text-[#ffffffd4]" />
          <div className="flex flex-col">
            <h2 className="font-medium heading text-[1.1rem] text-[#ffffffe1]">
              {contact.name}
            </h2>
            <p className="text-[.8rem] mt-[-4px] text-[#ffffffa5]">
              {contact.email}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[1rem]">
          <TbEdit
            onClick={onOpen}
            className="text-2xl icon text-[#38ff66] cursor-pointer"
          />
          <RiDeleteBin5Line
            onClick={() => deleteContact(contact.id)}
            className="text-2xl icon text-[#ff8080] cursor-pointer"
          />
        </div>
      </div>
      <ModifyData
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
