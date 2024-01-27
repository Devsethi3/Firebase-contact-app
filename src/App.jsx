import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import ModifyData from "./components/ModifyData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        // const contactSnapShot = await getDocs(contactRef);
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="container relative rounded-md">
      <Navbar />
      <div className="mt-[1rem] gap-2 relative flex items-center">
        <FiSearch className="text-[#ffffff88] text-xl left-3 absolute" />
        <input
          type="text"
          className="px-3 pl-10 py-[8px] rounded-md w-full outline-none bg-transparent border-2 border-[#ffffff40]"
          placeholder="Search Contact Here..."
        />
        <AiFillPlusCircle
          onClick={onOpen}
          className="text-[#fffffff6] text-6xl cursor-pointer"
        />
      </div>
      <div className="mt-[1rem]">
        {contacts.map((contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })}
      </div>
      <ModifyData isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
