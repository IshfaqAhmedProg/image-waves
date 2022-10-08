import React, { useState } from "react";
import Button from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const Dashboard = () => {
  const { user } = useAuth();
  const [image, setImage] = useState();
  const [progress, setProgress] = useState(0);
  const storage = getStorage();

  const handleInputChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const storageRef = ref(storage, user.email + "/" + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Dashboard</h1>
      <h3>{user.uid}</h3>
      <h3>{user.email}</h3>
      <h3>{user.verified ? "verified" : "not-verified"}</h3>
      <input multiple type="file" onChange={handleInputChange} />
      <Button variant="primary" onClick={handleUpload}>
        Confirm
      </Button>
      <progress value={progress} max="100" />
    </div>
  );
};

export default Dashboard;
