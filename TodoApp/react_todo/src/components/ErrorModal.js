import { useSelector, useDispatch } from "react-redux";
import { closeErrorModal } from "../actions";
import "../styles/components/error-modal.css";

const ErrorModal = () => {
   const dispatch = useDispatch();
   const { error, message } = useSelector((state) => state.error);
   console.log(error, message);
   if (!error) {
      return null; // no error message
   }

   return (
      <div className='error-modal'>
         <div>{message}</div>
         <button onClick={() => closeErrorModal(dispatch)()}>Close</button>
      </div>
   );
};

export default ErrorModal;
