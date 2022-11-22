import React, { useState } from "react";
import { useOrderContext } from "../../../../contexts/OrderContext";
import Button from "../../../Button/Button";
import styles from "./SSSInterface.module.css";
const DragnDrop = ({ imageCount }) => {
  const [dragOver, setDragOver] = useState(false);
  const { handleDrop } = useOrderContext();
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };
  return (
    <div
      className={styles.dragndrop + " " + (imageCount!="" ? styles.hidden : "")}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {!dragOver ? <span>Drag and Drop</span> : <span>Drop</span>}
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.6221 21.5996C32.1132 21.5996 31.6251 21.8032 31.2652 22.1658C30.9053 22.5284 30.7032 23.0202 30.7032 23.5329V24.2676L27.8631 21.4062C26.8603 20.4038 25.505 19.8414 24.0924 19.8414C22.6798 19.8414 21.3245 20.4038 20.3217 21.4062L18.9784 22.7596L14.2194 17.9648C13.2026 16.9896 11.8525 16.4457 10.4487 16.4457C9.04484 16.4457 7.69476 16.9896 6.67794 17.9648L3.8379 20.8262V9.99926C3.8379 9.48649 4.04007 8.99473 4.39994 8.63215C4.75982 8.26957 5.24791 8.06587 5.75684 8.06587H19.1895C19.6984 8.06587 20.1865 7.86218 20.5464 7.4996C20.9063 7.13702 21.1084 6.64526 21.1084 6.13249C21.1084 5.61973 20.9063 5.12796 20.5464 4.76539C20.1865 4.40281 19.6984 4.19911 19.1895 4.19911H5.75684C4.23003 4.19911 2.76576 4.81019 1.68614 5.89793C0.606523 6.98567 0 8.46096 0 9.99926V33.1999C0 34.7381 0.606523 36.2134 1.68614 37.3012C2.76576 38.3889 4.23003 39 5.75684 39H28.7842C30.311 39 31.7753 38.3889 32.8549 37.3012C33.9345 36.2134 34.5411 34.7381 34.5411 33.1999V23.5329C34.5411 23.0202 34.3389 22.5284 33.979 22.1658C33.6191 21.8032 33.1311 21.5996 32.6221 21.5996ZM5.75684 35.1332C5.24791 35.1332 4.75982 34.9295 4.39994 34.567C4.04007 34.2044 3.8379 33.7126 3.8379 33.1999V26.2977L9.40285 20.6909C9.68476 20.4202 10.0592 20.2692 10.4487 20.2692C10.8381 20.2692 11.2126 20.4202 11.4945 20.6909L25.829 35.1332H5.75684ZM30.7032 33.1999C30.7004 33.57 30.5793 33.9293 30.3578 34.2245L21.7033 25.4663L23.0466 24.113C23.1841 23.9715 23.3484 23.8591 23.5296 23.7824C23.7108 23.7056 23.9054 23.6661 24.102 23.6661C24.2986 23.6661 24.4932 23.7056 24.6744 23.7824C24.8556 23.8591 25.0198 23.9715 25.1574 24.113L30.7032 29.7391V33.1999Z"
          fill="var(--gray)"
        />
        <path
          d="M32.6755 0.55104L38.4324 6.35119C38.6122 6.53092 38.755 6.74476 38.8524 6.98036C38.9498 7.21596 39 7.46866 39 7.72389C39 7.97912 38.9498 8.23182 38.8524 8.46742C38.755 8.70302 38.6122 8.91686 38.4324 9.09659C38.254 9.2778 38.0418 9.42164 37.8079 9.51979C37.5741 9.61795 37.3232 9.66848 37.0699 9.66848C36.8166 9.66848 36.5658 9.61795 36.3319 9.51979C36.0981 9.42164 35.8859 9.2778 35.7075 9.09659L33.232 6.58319V17.3908C33.232 17.9036 33.0299 18.3953 32.67 18.7579C32.3101 19.1205 31.822 19.3242 31.3131 19.3242C30.8041 19.3242 30.3161 19.1205 29.9562 18.7579C29.5963 18.3953 29.3941 17.9036 29.3941 17.3908V6.58319L26.9187 9.09659C26.5573 9.46066 26.0673 9.66518 25.5562 9.66518C25.0452 9.66518 24.5551 9.46066 24.1938 9.09659C23.8324 8.73253 23.6294 8.23875 23.6294 7.72389C23.6294 7.46896 23.6793 7.21652 23.7761 6.98099C23.8729 6.74546 24.0149 6.53145 24.1938 6.35119L29.9506 0.55104C30.1331 0.375024 30.3483 0.237048 30.5839 0.14503C31.0511 -0.0483433 31.5751 -0.0483433 32.0423 0.14503C32.2778 0.237048 32.493 0.375024 32.6755 0.55104Z"
          fill="var(--gray)"
        />
      </svg>
    </div>
  );
};

export default DragnDrop;