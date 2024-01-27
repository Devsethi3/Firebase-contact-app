import { PiUserCircleLight } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <div className="gap-4 bg-[#822fbe] py-2 px-3 rounded-md mt-[1rem] flex items-center justify-between">
      <PiUserCircleLight className="text-4xl text-[#ffffffd4]" />
      <div
        className="pr-[5rem] border-r-2 border-r-[#ffffff3c]"
        key={contact.id}
      >
        <h2 className="font-medium text-[1.1rem] text-[#ffffffe1]">
          {contact.Name}
        </h2>
        <p className="text-[.8rem] mt-[-4px] text-[#ffffffa5]">
          {contact.Email}
        </p>
      </div>
      <div className="flex items-center gap-[1rem]">
        <TbEdit className="text-2xl text-[#38ff66] cursor-pointer" />
        <RiDeleteBin5Line
          onClick={() => deleteContact(contact.id)}
          className="text-2xl text-[#ff8080] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactCard;
