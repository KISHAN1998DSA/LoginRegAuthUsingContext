import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Routing from "./component/Routing";
import { AuthProvider } from "./component/UserAuth/Auth";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routing />
      <Footer />
    </AuthProvider>
  );
}

export default App;
