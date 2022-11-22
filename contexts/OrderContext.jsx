import { createContext, useContext, useState, useEffect } from "react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
import services from "../shared/Data/services.json";
import { formatBytes } from "../shared/Functions/formatBytes";
import { useAuth } from "./AuthContext";
const OrderContext = createContext({});
export const useOrderContext = () => useContext(OrderContext);
export const OrderContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [activeService, setActiveService] = useState([]);
  // const [urls, setUrls] = useState([]);
  // const [progress, setProgress] = useState(0);
  // const storage = getStorage();
  const [invoice, setInvoice] = useState({});
  useEffect(() => {
    handleCartChange(cart);
  }, [cart]);

  const handleInputChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newItem = e.target.files[i];
      newItem["id"] = user.email + "IMG" + i;
      newItem["service"] = activeService[0];
      newItem["price"] = activeService[1];
      setCart((prevState) => [...prevState, newItem]);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const newItem = e.dataTransfer.files[i];
      newItem["id"] = user.email + "IMG" + i;
      newItem["service"] = activeService[0];
      newItem["price"] = activeService[1];
      setCart((prevState) => [...prevState, newItem]);
    }
  };
  const handleClearService = (service) => {
    setCart((current) =>
      current.filter((item) => {
        return item.service !== service;
      })
    );
  };
  const handleCartChange = (cart) => {
    const ordersize = 0;
    const serviceHolder = [];
    let servicePrice;
    //Build service arrray and count order size in bytes
    cart.forEach((element) => {
      serviceHolder.push(element.service);
      ordersize = ordersize + element.size;
    });
    //Count the number of service in service array
    let countService = serviceHolder.reduce(
      (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
      {}
    );
    let pricetable = Object.entries(countService);
    let totalAmount = 0;
    //Create price table
    pricetable.forEach((element) => {
      servicePrice = services.find((item) => item.ID === element[0]);
      element.push(element[1] * servicePrice.Price);
      totalAmount = totalAmount + element[2];
    });
    //Set the state for invoice
    setInvoice({
      OrderLength: cart.length,
      OrderSize: formatBytes(ordersize),
      PriceTable: pricetable,
      TotalAmount: totalAmount,
    });
  };
  // const getServiceImages = (service) => {
  //   const extractUrl = cart.filter((item) => item.service === service.ID);
  //   let displayimages = null;
  //   extractUrl.forEach((element) => {
  //     const objectUrl = URL.createObjectURL(element);
  //     displayimages = (prev) => [...prev, objectUrl];
  //   });
  //   return displayimages;
  // };
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
    <OrderContext.Provider
      value={{
        handleInputChange,
        setActiveService,
        handleClearService,
        handleDrop,
        cart,
        invoice,
        activeService,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
