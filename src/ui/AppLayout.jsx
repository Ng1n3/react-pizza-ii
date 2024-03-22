import { useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout">
      {isLoading && <Loader/>}
      <Header />
      <main>
        <h1>Content</h1>
        <Outlet/>
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;