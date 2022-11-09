import { createContext, useContext, useState, useEffect } from "react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
import { useAuth } from "./AuthContext";
const OrderContext = createContext({});
export const useOrderContext = () => useContext(OrderContext);
export const OrderContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [service, setService] = useState("");
  // const [urls, setUrls] = useState([]);
  // const [progress, setProgress] = useState(0);
  // const storage = getStorage();

  const handleInputChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = user.email + "IMG" + i;
      newImage["service"] = service;
      setImages((prevState) => [...prevState, newImage]);
    }
  };
  // const handleUpload = () => {
  //   images.map((image) => {
  //     const storageRef = ref(storage, user.email + "/" + image.name);
  //     const uploadTask = uploadBytesResumable(storageRef, image);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         setProgress(
  //           () => (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log([error]);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setUrls((prev) => [...prev, downloadURL]);
  //           //TODO per image progress
  //         });
  //       }
  //     );
  //   });
  // };
  return (
    <OrderContext.Provider value={{ handleInputChange, setService, images }}>
      {children}
    </OrderContext.Provider>
  );
};
