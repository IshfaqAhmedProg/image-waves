import { createContext, useContext, useState, useEffect } from "react";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import services from "../shared/Data/services.json";
import { formatBytes } from "../shared/Functions/formatBytes";
import { useAuth } from "./AuthContext";
import { v5 as uuidv5 } from "uuid";

const OrderContext = createContext({});
export const useOrderContext = () => useContext(OrderContext);
export const OrderContextProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [activeService, setActiveService] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
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
      newItem["variant"] = "Image";
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
      newItem["variant"] = "Image";
      setCart((prevState) => [...prevState, newItem]);
    }
  };
  const handlePasteLink = (e, pasteLink) => {
    e.preventDefault();
    const newItem = pasteLink;
    newItem["id"] = user.email + "Link";
    newItem["service"] = activeService[0];
    newItem["price"] = activeService[1];
    newItem["variant"] = "Link";
    setCart((prevState) => [...prevState, newItem]);
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
      switch (element.variant) {
        case "Image":
          {
            serviceHolder.push(element.service);
            ordersize = ordersize + element.size;
          }
          break;
        case "Link": {
          for (let i = 0; i < element.amount; i++) {
            serviceHolder.push(element.service);
          }
        }
        default:
          break;
      }
    });
    //Count the number of service in service array
    let countService = serviceHolder.reduce(
      (cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt),
      {}
    );
    let priceTable = Object.entries(countService);
    let totalAmount = 0;
    //Create price table
    priceTable.forEach((element) => {
      servicePrice = services.find((item) => item.ID === element[0]); //finding price from services.json
      element.push(element[1] * servicePrice.Price); //pushing the multiplied price inside pricetable eg.(SRV001, 5, 0.3554)
      element.push(servicePrice.ServiceName); //pushing the name inside pricetable eg.(SRV001, 5, 0.3554)
      totalAmount = totalAmount + element[2];
    });
    //Set the state for invoice
    setInvoice({
      OrderLength: serviceHolder.length,
      OrderSize: formatBytes(ordersize),
      PriceTable: priceTable,
      TotalAmount: totalAmount,
    });
  };
  const handleOrderConfirm = () => {
    //Upload the images to Storage
    const MY_NAMESPACE = process.env.NEXT_PUBLIC_UUID_NAMESPACE;
    const orderId = uuidv5(user.email, MY_NAMESPACE).slice(0, 8);
    
    const storage = getStorage();
    cart.map((item) => {
      if (item.variant == "Image") {
        const storageRef = ref(
          storage,
          user.email + "/" + orderId + "/" + item.name
        );
        const uploadTask = uploadBytesResumable(storageRef, item);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            setProgress(
              () => (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.log([error]);
          },
          () => {
            console.log("upload complete");
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUrls((prev) => [...prev, downloadURL]);
              //TODO per image progress
            });
          }
        );
      }
    });
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
    <OrderContext.Provider
      value={{
        handleInputChange,
        setActiveService,
        handleClearService,
        handleDrop,
        handlePasteLink,
        handleOrderConfirm,
        cart,
        invoice,
        activeService,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
