import React from "react";
import useFirebase from "../../../Hooks/useFirebase";

const Login = () => {
  const { user, singInUsingGoogle, logOut } = useFirebase();
  return (
    <>
      {user?.email ? (
        <button
          onClick={logOut}
          type="button"
          className="btn btn-outline-primary me-2"
          >
          <span className="fa fa-sign-in me-1"></span> Logout {user.displayName}
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          data-bs-toggle="modal"
          data-bs-target="#loginModal">
          <span className="fa fa-sign-in me-1"></span> Login
        </button>
      )}

      <div
        class="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto" id="loginModalLabel">
                Log In
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <button
                onClick={()=>singInUsingGoogle()}
                className="btn btn-primary w-100 mb-4">
                <span className="fab fa-google me-2"></span> Sign in with Google
              </button>
              <form>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    defaultValue='Sorry! only google sign in available'
                    disabled
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label htmlFor="exampleInputPassword1" class="form-label" >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    disabled
                  />
                </div>
                
                <button type="submit" class="btn btn-outline-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
