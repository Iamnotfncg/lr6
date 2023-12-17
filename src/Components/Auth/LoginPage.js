import "./LoginPage.css"
import { useNavigate } from "react-router-dom"

function Login() {
    const history = useNavigate();
    const submit = async (e) => {
    history('../');
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <form onSubmit={submit}>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
