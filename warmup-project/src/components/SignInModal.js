// reference: https://react-bootstrap.github.io/components/modal/
// reference: https://getbootstrap.com/docs/5.3/components/buttons/
// 3. https://mdbootstrap.com/docs/react/utilities/spacing/
// 4. https://react-bootstrap-v3.netlify.app/components/forms/

import { useState } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import "../styles/modal.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInModal = ({ isShow, setIsShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setIsShow(false);

  let data = { email: email, password: password };

  const handleSignIn = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      console.log(data);
      setEmail("");
      setPassword("");
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const isValidEmail = (emailAddress) => {
    if (emailAddress.length === 0) {
      return true;
    }
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handlePassword = () => {
    setRevealed(!revealed);
  };

  return (
    <Modal
      dialogClassName={"my-modal"}
      //centered
      show={isShow}
      onHide={handleClose}
      className="modal"
    >
      <Modal.Header className="px-4" closeButton>
        <Modal.Title className="ms-auto">
          <b>Sign in to your account</b>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form
          id="modal-form"
          noValidate // replace the default feedback
          validated={validated}
          onSubmit={handleSignIn}
        >
          <Form.Group id="email-signUp">
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@example.com"
              autoFocus
              value={email}
              // isInvalid={!isValidEmail(email)}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please input a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group id="password-signUp">
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type={revealed ? "text" : "password"}
                value={password}
                placeholder="password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button variant="outline-secondary" onClick={handlePassword}>
                {revealed ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputGroup>
          </Form.Group>

          <Button
            id="modal-button"
            type="submit"
            //onChange={handleSignIn}
          >
            Sign In
          </Button>
        </Form>
      </Modal.Body>

      <div id="modal-footer-container">
        <p>
          Dont' have an account?<a href=""> Sign Up</a>
        </p>
        <a href="">Forget password?</a>
      </div>
    </Modal>
  );
};

export default SignInModal;
