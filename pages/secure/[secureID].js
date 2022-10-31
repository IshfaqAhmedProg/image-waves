import NewOrder from "../../components/DashboardComponents/Orders/NewOrder";

function Secure({ pageName }) {
  console.log(pageName.secureID);
  switch (pageName.secureID) {
    case "orders":
      return <div>Order Page</div>;
      break;
    case "order":
      return <div>order</div>;
      break;
    case "new_order":
      return <NewOrder />;
      break;
    default:
      return <div>error:404</div>;
      break;
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { secureID: "orders" } },
      { params: { secureID: "order" } },
      { params: { secureID: "new_order" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { pageName: params },
  };
}
export default Secure;
