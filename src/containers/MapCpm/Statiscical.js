import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
// dùng cho redux
import * as actions from "../../store/actions";
import "./Statiscical.scss";
import { withRouter } from "react-router";

class Statiscical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyReportArr: [],
    };
  }
  componentDidMount() {
    let date = this.props.location.state.date;
    this.props.dailyReportRedux(date);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dailyReport !== this.props.dailyReport) {
      this.setState({
        dailyReportArr: this.props.dailyReport,
      });
    }
  }
  handleBackHome = () => {
    if (this.props.history) {
      this.props.history.push("/home");
    }
  };
  render() {
    let { dailyReportArr } = this.state;
    console.log(dailyReportArr);
    return (
      <>
        <div className="statiscial-container">
          <div className="statiscial-content">
            <div className="back-home" onClick={() => this.handleBackHome()}>
              Quay lại
            </div>
            <div className="table-main">
              <div className="table1">
                <table className="table table-striped w-auto">
                  <thead>
                    <tr>
                      <th>Tốc độ trung bình</th>
                      <th>Ngày thực hiện</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class="table-info">
                      <td>{dailyReportArr.averageSpeed}</td>
                      <td>{dailyReportArr.date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table2">
                <table className="table table-striped w-auto">
                  <thead>
                    <tr>
                      <th>Kinh độ</th>
                      <th>Vĩ độ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dailyReportArr &&
                      dailyReportArr.road &&
                      dailyReportArr.road.length > 0 &&
                      dailyReportArr.road.map((item, index) => {
                        return (
                          <tr className="table-info" key={index}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dailyReport: state.user.dailyReport,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dailyReportRedux: (date) => dispatch(actions.dailyReportService(date)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Statiscical)
);
