import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
// dùng cho redux
import * as actions from "../../store/actions";
import "./Login.scss";
import { withRouter } from "react-router";
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      errMessage: "",
    };
  }
  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  handleLogin = async () => {
    //trước mỗi lần login thì clear mã lỗi đi
    this.setState({
      errMessage: "",
    });
    try {
      // gọi được thành công nhưng bị lỗi khác
      let data = await handleLoginApi(this.state.userName, this.state.passWord);
      //   console.log("check data", data.result.results);
      if (
        data &&
        data.result &&
        data.result.results &&
        data.result.results.Success !== true
      ) {
        this.setState({
          errMessage: "lỗi",
        });
      }
      if (
        data &&
        data.result &&
        data.result.results &&
        data.result.results.Success === true
      ) {
        this.props.userLoginSucces(data.result.results.Token);
        console.log("login success");
        if (this.props.history) {
          this.props.history.push("/home");
        }
      }
      //
    } catch (e) {
      console.log(e);
    }
  };
  handleRegister = () => {
    if (this.props.history) {
      this.props.history.push("/register");
    }
  };
  render() {
    let { userName, passWord } = this.state;
    return (
      <>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1 item"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1 item"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1 item"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4 ">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">
                      UserName
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid UserName"
                      value={userName}
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "userName")
                      }
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      value={passWord}
                      placeholder="Enter password"
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "passWord")
                      }
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <span className="text-body">Forgot password?</span>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2 ">
                    <div
                      className="btn btn-primary btn-lg px-5"
                      onClick={() => this.handleLogin()}
                    >
                      Login
                    </div>
                    <div className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?
                      <span
                        className="link-danger"
                        onClick={() => this.handleRegister()}
                      >
                        Register
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginSucces: (userInfo) => dispatch(actions.userLoginSucces(userInfo)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
