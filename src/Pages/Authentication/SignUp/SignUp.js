import React from "react";

const SignUp = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-outline-primary me-4 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
          <span className='fa fa-user-plus me-1'></span>
        Register
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto" id="exampleModalLabel">
                
                Register
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <button className="btn btn-primary w-100 mb-2">
                <span><i class="fab fa-google me-2"></i></span>
                Sign in with Google
              </button>
              <form>
                <div class="mb-3">
                  <label htmlFor="exampleInput" class="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInput"
                  
                  />
                </div>
                <div class="mb-3">
                  <label htmlFor="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label htmlFor="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn btn-outline-primary w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

