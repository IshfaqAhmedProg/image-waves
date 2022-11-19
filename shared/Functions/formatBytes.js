import React from "react";

export function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const number = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  const unit = sizes[i];
  console.log(unit);
  return (
    <>
      {number}
      <i>{unit}</i>
    </>
  );
}
