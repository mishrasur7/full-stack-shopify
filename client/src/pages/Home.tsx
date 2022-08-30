import { useAppSelector } from "../redux/hooks/customAppHooks";

function Home() {
  const products = useAppSelector((state) => state.productReducer);

  console.log("products", products);

  return <div>Home page for products</div>;
}

export default Home;
