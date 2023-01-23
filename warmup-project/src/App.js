import { useState } from "react";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [isShow, setIsShow] = useState(true); // show the modal
  return (
    <div>
      <Header setIsShow={setIsShow} />
      <SignUpModal isShow={isShow} setIsShow={setIsShow} />
      <Footer />
    </div>
  );
}

export default App;
