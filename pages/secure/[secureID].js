import { useRouter } from "next/router";
import NewOrder from "../../components/DashboardComponents/Orders/NewOrder";
import OrdersResult from "../../components/DashboardComponents/Orders/OrdersResult";
import { OrderContextProvider } from "../../contexts/OrderContext";
import OrderUpload from "../../components/DashboardComponents/Orders/OrderUpload";
function Secure({ pageName }) {
  console.log(pageName.secureID);
  const router = useRouter();
  switch (pageName.secureID) {
    case "orders":
      return <div>Order Page</div>;
      break;
    case "order":
      return <div>order</div>;
      break;
    case "new_order":
      {
        const { selection, upload } = router.query;
        let comp2render = <NewOrder />;
        if (selection == "success") {
          comp2render = <OrdersResult />;
        }
        if (upload == "success") {
          comp2render = <OrderUpload />;
        }
        return <OrderContextProvider>{comp2render}</OrderContextProvider>;
      }
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
