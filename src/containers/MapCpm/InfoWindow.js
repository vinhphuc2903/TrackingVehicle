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

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const pathCoordinates1 = [
  { lat: 16.065875475908143, lng: 108.19113976479787 },
  { lat: 16.065875475908143, lng: 108.19863920455788 },
  // { lat: 16.06563919567793, lng: 108.20245039525525 },
  // { lat: 16.063276377939516, lng: 108.20380275324351 },
];
const data = [
  [
      16.0736359,
      108.1473552
  ],
  [
      16.0736359,
      108.1473552
  ],
  [
      16.0736359,
      108.1473552
  ],
  [
      16.0736359,
      108.1473552
  ],
  [
      16.0736507,
      108.1472873
  ],
  [
      16.0736507,
      108.1472873
  ],
  [
      16.0736507,
      108.1472873
  ],
  [
      16.0736461,
      108.1473055
  ],
  [
      16.0736461,
      108.1473055
  ],
  [
      16.0736489,
      108.147284
  ],
  [
      16.0736489,
      108.147284
  ],
  [
      16.0736489,
      108.147284
  ],
  [
      16.0736489,
      108.147284
  ],
  [
      16.073639,
      108.1473267
  ],
  [
      16.073639,
      108.1473267
  ],
  [
      16.073651,
      108.1472832
  ],
  [
      16.073651,
      108.1472832
  ],
  [
      16.0736553,
      108.1472845
  ],
  [
      16.0736506,
      108.1473154
  ],
  [
      16.0736504,
      108.1473023
  ],
  [
      16.0736426,
      108.1473203
  ],
  [
      16.0736446,
      108.1473063
  ],
  [
      16.0736436,
      108.1473291
  ],
  [
      16.0736429,
      108.1473224
  ],
  [
      16.0736957,
      108.1473702
  ],
  [
      16.0737117,
      108.1474019
  ],
  [
      16.073803,
      108.1476249
  ],
  [
      16.0742396,
      108.1485861
  ],
  [
      16.0744989,
      108.1492094
  ],
  [
      16.0744989,
      108.1492094
  ],
  [
      16.0736076,
      108.1496482
  ],
  [
      16.073138,
      108.1498943
  ],
  [
      16.073138,
      108.1498943
  ],
  [
      16.0728129,
      108.149917
  ],
  [
      16.0728129,
      108.149917
  ],
  [
      16.0723109,
      108.1501065
  ],
  [
      16.0723109,
      108.1501065
  ],
  [
      16.0722151,
      108.1503192
  ],
  [
      16.0722151,
      108.1503192
  ],
  [
      16.0730783,
      108.1504623
  ],
  [
      16.0730783,
      108.1504623
  ],
  [
      16.0736899,
      108.1520843
  ],
  [
      16.0736899,
      108.1520843
  ],
  [
      16.0743414,
      108.1534846
  ],
  [
      16.0743414,
      108.1534846
  ],
  [
      16.0749435,
      108.1553165
  ],
  [
      16.0749435,
      108.1553165
  ],
  [
      16.075421,
      108.1566851
  ],
  [
      16.075421,
      108.1566851
  ],
  [
      16.0748236,
      108.1574186
  ],
  [
      16.0748236,
      108.1574186
  ],
  [
      16.0737777,
      108.1577411
  ],
  [
      16.0737777,
      108.1577411
  ],
  [
      16.0726216,
      108.1566983
  ],
  [
      16.0726216,
      108.1566983
  ],
  [
      16.0713255,
      108.1562872
  ],
  [
      16.0713255,
      108.1562872
  ],
  [
      16.071066,
      108.1550857
  ],
  [
      16.071066,
      108.1550857
  ],
  [
      16.0703729,
      108.1536451
  ],
  [
      16.0703729,
      108.1536451
  ],
  [
      16.0697904,
      108.1525143
  ],
  [
      16.0697904,
      108.1525143
  ],
  [
      16.0693692,
      108.1516663
  ],
  [
      16.0693692,
      108.1516663
  ],
  [
      16.070873,
      108.1509267
  ],
  [
      16.070873,
      108.1509267
  ],
  [
      16.0721267,
      108.1503331
  ],
  [
      16.0736493,
      108.1473646
  ],
  [
      16.0736498,
      108.1473744
  ],
  [
      16.0736448,
      108.1473673
  ],
  [
      16.0736449,
      108.1473397
  ],
  [
      16.0736457,
      108.1473397
  ],
  [
      16.0736434,
      108.1473508
  ],
  [
      16.0736456,
      108.147343
  ],
  [
      16.0736488,
      108.1473259
  ],
  [
      16.0736487,
      108.1473361
  ],
  [
      16.0736489,
      108.1473335
  ],
  [
      16.0736478,
      108.1473507
  ],
  [
      16.0736528,
      108.1473104
  ],
  [
      16.0736473,
      108.1473482
  ],
  [
      16.0736453,
      108.1473551
  ],
  [
      16.0736507,
      108.1473299
  ],
  [
      16.0736498,
      108.1473384
  ],
  [
      16.073646,
      108.1473206
  ],
  [
      16.0736393,
      108.1473496
  ],
  [
      16.073649,
      108.1473093
  ],
  [
      16.073649,
      108.1473093
  ],
  [
      16.0736454,
      108.147335
  ],
  [
      16.0736517,
      108.1473259
  ],
  [
      16.0736531,
      108.1473051
  ],
  [
      16.0736446,
      108.1473579
  ],
  [
      16.0736447,
      108.1473519
  ],
  [
      16.0736581,
      108.1473117
  ],
  [
      16.073656,
      108.1473161
  ],
  [
      16.0736527,
      108.1473409
  ],
  [
      16.0736456,
      108.1473504
  ],
  [
      16.0736536,
      108.1473101
  ],
  [
      16.0736484,
      108.1473585
  ],
  [
      16.0736453,
      108.1473189
  ],
  [
      16.0736493,
      108.1473469
  ],
  [
      16.0736435,
      108.1473446
  ],
  [
      16.0736485,
      108.147347
  ],
  [
      16.0736449,
      108.1473441
  ],
  [
      16.0736513,
      108.1472742
  ],
  [
      16.0736537,
      108.147322
  ],
  [
      16.0736539,
      108.1473634
  ],
  [
      16.0736554,
      108.1473159
  ],
  [
      16.0736489,
      108.1473569
  ],
  [
      16.0736442,
      108.1473462
  ],
  [
      16.0736488,
      108.1472847
  ],
  [
      16.0736452,
      108.1473118
  ],
  [
      16.0736519,
      108.147327
  ],
  [
      16.0736398,
      108.147358
  ],
  [
      16.0736467,
      108.1473622
  ],
  [
      16.0736416,
      108.1473643
  ],
  [
      16.0736454,
      108.1473521
  ],
  [
      16.0736378,
      108.1473541
  ],
  [
      16.0736443,
      108.1473449
  ],
  [
      16.0736516,
      108.147333
  ],
  [
      16.0736489,
      108.1473172
  ],
  [
      16.0736476,
      108.1473071
  ],
  [
      16.0736353,
      108.1473484
  ],
  [
      16.0736369,
      108.1473541
  ],
  [
      16.0736465,
      108.1473366
  ],
  [
      16.0736525,
      108.1473536
  ],
  [
      16.0736459,
      108.1473546
  ],
  [
      16.073648,
      108.1473613
  ],
  [
      16.073648,
      108.1473613
  ],
  [
      16.07365,
      108.1473393
  ],
  [
      16.0736491,
      108.1473581
  ],
  [
      16.0736511,
      108.147313
  ],
  [
      16.0736589,
      108.147312
  ],
  [
      16.0736479,
      108.1473266
  ],
  [
      16.0736479,
      108.1473266
  ],
  [
      16.0736491,
      108.1473039
  ],
  [
      16.0736492,
      108.1473245
  ],
  [
      16.0736492,
      108.1473494
  ],
  [
      16.0736453,
      108.1473486
  ],
  [
      16.0736438,
      108.1473545
  ],
  [
      16.0736471,
      108.1473402
  ],
  [
      16.0736537,
      108.1473031
  ],
  [
      16.0736464,
      108.1473631
  ],
  [
      16.0736401,
      108.1473557
  ],
  [
      16.0736541,
      108.1473337
  ],
  [
      16.0736423,
      108.1473213
  ],
  [
      16.0736543,
      108.147276
  ],
  [
      16.0736534,
      108.1473298
  ],
  [
      16.0736564,
      108.1473205
  ],
  [
      16.0736481,
      108.1472907
  ],
  [
      16.0736518,
      108.1472873
  ],
  [
      16.0736551,
      108.1472735
  ],
  [
      16.0736481,
      108.1473592
  ],
  [
      16.073642,
      108.1473623
  ],
  [
      16.0736411,
      108.1473435
  ],
  [
      16.0736475,
      108.1473154
  ],
  [
      16.0736502,
      108.1472873
  ],
  [
      16.0736496,
      108.1472929
  ],
  [
      16.0736458,
      108.1473305
  ],
  [
      16.0736331,
      108.1473465
  ],
  [
      16.0736573,
      108.147313
  ],
  [
      16.073656,
      108.1473237
  ],
  [
      16.0736483,
      108.14733
  ],
  [
      16.0736437,
      108.147347
  ],
  [
      16.0736505,
      108.1472983
  ],
  [
      16.0736552,
      108.1473256
  ],
  [
      16.0736573,
      108.1472724
  ],
  [
      16.0736497,
      108.1473743
  ],
  [
      16.0736511,
      108.1473479
  ],
  [
      16.0736389,
      108.1473475
  ],
  [
      16.0736383,
      108.147364
  ],
  [
      16.0736411,
      108.1473226
  ],
  [
      16.0736471,
      108.1473415
  ],
  [
      16.0736465,
      108.1473524
  ],
  [
      16.0736476,
      108.1473168
  ],
  [
      16.0736486,
      108.1473207
  ],
  [
      16.0736481,
      108.1473655
  ],
  [
      16.0736488,
      108.1473614
  ],
  [
      16.0736253,
      108.1473711
  ],
  [
      16.0736545,
      108.1473292
  ],
  [
      16.0736545,
      108.1473292
  ],
  [
      16.0736408,
      108.1473506
  ],
  [
      16.0736438,
      108.1473378
  ],
  [
      16.0736491,
      108.1472992
  ],
  [
      16.0736578,
      108.1472833
  ],
  [
      16.0736578,
      108.1472833
  ],
  [
      16.0736442,
      108.1473672
  ],
  [
      16.0736472,
      108.1473589
  ],
  [
      16.0736248,
      108.1473844
  ],
  [
      16.0736416,
      108.1473186
  ],
  [
      16.0736488,
      108.1473412
  ],
  [
      16.0736458,
      108.1473465
  ],
  [
      16.0736214,
      108.1473685
  ],
  [
      16.073634,
      108.1473536
  ],
  [
      16.0736384,
      108.1473649
  ],
  [
      16.0736315,
      108.1473685
  ],
  [
      16.0736404,
      108.1473525
  ]
]

const pathCoordinates2 = data.map((item) => {
    return {
      lat: item[0],
      lng: item[1]
    }
})
// const pathCoordinates2 = [
//   // { lat: 16.065875475908143, lng: 108.19113976479787 },
//   // { lat: 16.065875475908143, lng: 108.19863920455788 },
//   { lat: 16.06563919567793, lng: 108.20245039525525 },
//   { lat: 16.063276377939516, lng: 108.20380275324351 },
// ];
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
    {/* <Marker
      position={{ lat: data[0][0], lng: data[0][1] }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Bắt đầu: ( Kinh độ: {data[0][0]} , vĩ độ: {data[0][1]} )</div>
        </InfoWindow>
      )}
    </Marker> */}
    <Marker
      position={{ lat: data[data.length - 10][0], lng: data[data.length - 10][1] }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && (
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Kết thúc: ( Vĩ độ: {data[data.length - 10][0]} , Kinh độ: {data[data.length - 10][1]} )</div>
        </InfoWindow>
      )}
    </Marker>
    <Polyline
      path={pathCoordinates2}
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
    // let date = new Date();
    // let changeDate = moment(date).format("YYYY-MM-DD");
    this.props.dailyReportRedux("2022-13-12");
    this.props.fetchUserRedux();
    const url = [
      // Length issue
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

    console.log("check state", this.state);
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
            Lịch sử di chuyển ngày '13/12/2022' của {inforUser.username}
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

{
  /* <Marker
      position={{ lat: 10.773201, lng: 106.700147 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
</Marker> */
}
