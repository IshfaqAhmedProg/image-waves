import ResetPassword from "../../components/ResetPassword/ResetPassword";
function Interface({ pageName }) {
  console.log(pageName.interface);
  switch (pageName.interface) {
    case "reset_password":
      return <ResetPassword />;
      break;
    case "terms_and_conditions":
      return <div>termsAndConditions</div>;
      break;
    case "pricing":
      return <div>Pricing</div>;
      break;
    case "services":
      return <div>Services</div>;
      break;
    default:
      return <div>error:404</div>;
      break;
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { interface: "reset_password" } },
      { params: { interface: "terms_and_conditions" } },
    ],
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { pageName: params },
  };
}
export default Interface;
