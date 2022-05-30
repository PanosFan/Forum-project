import handleLogin from "../functions/auth/handleLogin";

const Login = ({ setUser }) => {
  return (
    <div className="container-lg">
      <div className="row pt-5">
        <div className="col-sm-5 mx-auto pt-5">
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              onClick={() => handleLogin(setUser)}
              type="button"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
