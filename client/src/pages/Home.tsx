import { useAppSelector } from "../redux/hooks/customAppHooks";

function Home() {
  const products = useAppSelector((state) => state.productReducer);

  console.log("products", products);

  return (
    <div>
      {products.map((value, key) => {
        return <div>{value.title}</div>;
      })}
    </div>
  );
}

export default Home;
