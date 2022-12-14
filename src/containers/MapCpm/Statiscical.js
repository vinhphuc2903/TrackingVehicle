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
  calculateDistance(lattitude1, longittude1,lattitude2,longittude2)
  {
    const toRadian = n => (n * Math.PI) / 180
    let lat2 = lattitude2
    let lon2 = longittude2
    let lat1 = lattitude1
    let lon1 = longittude1
    console.log(lat1, lon1+"==="+lat2, lon2)
    let R = 6371  // km
    let x1 = lat2 - lat1
    let dLat = toRadian(x1)
    let x2 = lon2 - lon1
    let dLon = toRadian(x2)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    return d 
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
                      <th>Đoạn đường di chuyển so với vị trí trước(Km)</th>
                      <th>Vĩ độ</th>
                      <th>Kinh độ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      dailyReportArr?.road?.map((item, index) => {
                        return (
                          <tr className="table-info" key={index}>
                            <td>{index === 0 ? 0 : this.calculateDistance(item[0], item[1], dailyReportArr?.road[index - 1][0], dailyReportArr?.road[index - 1][1])}</td>
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
