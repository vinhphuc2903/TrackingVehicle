import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
import "./infoWindow.scss";
import moment from "moment/moment";
const { compose, withProps, withStateHandlers } = require("recompose");

// import { FaAnchor } from "react-icons"

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  TrafficLayer,
  Polyline,
  Polygon,
  StreetViewPanorama,
  OverlayView,
} = require("react-google-maps");

// const { MarkerWithLabel } = require("react-google-maps/lib/components/");

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen:
        ({ isOpen }) =>
        () => ({
          isOpen: !isOpen,
        }),
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 16.065875475908143, lng: 108.19113976479787 }}
  >
    <Marker
      position={props?.dataInput}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Bắt đầu: ( Kinh độ: {props?.dataInput?.lat} , vĩ độ: {props?.dataInput?.lng} )</div>
        </InfoWindow>
      )}
    </Marker>
    {/* <Marker
      position={{ lat: data[data.length - 10][0], lng: data[data.length - 10][1] }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Kết thúc: ( Vĩ độ: {data[data.length - 10][0]} , Kinh độ: {data[data.length - 10][1]} )</div>
        </InfoWindow>
      )}
    </Marker> */}
    <Polyline
      path={props?.dataPolyline}
      geodesic={true}
      onRightClick={props.onToggleOpen}
      options={{
        strokeColor: "#ff2527",
        strokeOpacity: 0.75,
        strokeWeight: 10,
        icons: [
          {
            icon: "hello",
            offset: "0",
            repeat: "20px",
          },
        ],
      }}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>data[0][0]</div>
        </InfoWindow>
      )}
    </Polyline>
  </GoogleMap>
));


class DemoApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      inforUser: {},
      dailyReportArr: [],
    };
  }
  componentWillMount() {
    this.setState({ markers: [] });

    // this.props.dailyReportRedux(date);
  }

  componentDidMount() {
    this.props.dailyReportRedux(moment().format("YYYY/MM/DD"));
    this.props.fetchUserRedux();
    const url = [
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,
    ].join("");

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ markers: data.photos });
      });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userObj !== this.props.userObj) {
      // this.props.fetchUserRedux();
      this.setState({
        inforUser: this.props.userObj,
      });
    }
    if (prevProps.dailyReport !== this.props.dailyReport) {
      this.setState({
        dailyReportArr: this.props.dailyReport,
      });
    }
  }
  handleOnChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  SubmitDate = () => {
    if (this.props.history) {
      this.props.history.push("/statiscical", { date: this.state.date });
    }
  };
  render() {
    let { date, inforUser, dailyReportArr } = this.state;

    console.log("check state", dailyReportArr);
    const pathCoordinates = dailyReportArr?.road?.map((item) => {
      return {
        lat: item[0],
        lng: item[1]
      }
    })
    console.log(typeof pathCoordinates !== 'undefined' ? pathCoordinates[0] : 1)
    return (
      <>
        <div className="name-user">
          User : <span className="name">{inforUser.username}</span>
        </div>
        <div className="daily-report">
          <input
            type="text"
            placeholder="Nhập ngày..."
            value={date}
            onChange={(e) => this.handleOnChangeDate(e)}
          />
          <button className="btn btn-primary" onClick={() => this.SubmitDate()}>
            Submit
          </button>
        </div>
        <MapWithAMakredInfoWindow
          dataPolyline={pathCoordinates}
          dataInput={typeof pathCoordinates !== 'undefined' ? pathCoordinates[0] : { lat: 16.065875475908143, lng: 108.19113976479787 }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzo9Xzk5QwuAixqF8Kxdxp1zgMfL2DtKA&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `650px` }} />}
          containerElement={
            <div style={{ height: `650px`, marginTop: "20px" }} />
          }
          mapElement={<div style={{ height: `650px` }} />}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            fontSize: '20px',
            color: '#aa7070'
          }}
        >
            Lịch sử di chuyển ngày {moment().format("DD/MM/YYYY")} của {inforUser.username}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userObj: state.user.userObj,
    dailyReport: state.user.dailyReport,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchUserService()),
    dailyReportRedux: (date) => dispatch(actions.dailyReportService(date)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DemoApp)
);

