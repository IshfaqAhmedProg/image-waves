export const getRefinedFirebaseError = (errorMesssage) => {
  const stringified = errorMesssage.toString();
  const trimmed = stringified.match(/(\/)[^)]*/g).toString();
  const finalformat = trimmed.replace("/", "");
  console.log("stringified",stringified);
  console.log("trimmed",trimmed);
  console.log("final",finalformat);
  let refinedMssg = "";
  switch (finalformat) {
    case "wrong-password":
      refinedMssg = "Correct credentials needed.";
      break;
    case "user-not-found":
      refinedMssg = "Please Sign up to have your own account!";
      break;
    case "too-many-requests":
      refinedMssg =
        "Access to this account has been temporarily disabled due to many failed login attempts.";
      break;
    default:
      refinedMssg = "Please check your Internet!";
      break;
  }

  return refinedMssg;
};
