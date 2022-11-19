import { useRouter } from "next/router";
import NewOrder from "../../components/DashboardComponents/Orders/NewOrder";
import { OrderContextProvider } from "../../contexts/OrderContext";

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
        const a = 0;
        return (
          <OrderContextProvider>
            <NewOrder />
          </OrderContextProvider>
        );
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
