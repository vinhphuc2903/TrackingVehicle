/* eslint-disable jsx-a11y/no-access-key */
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./HomePage.scss";
import { withRouter } from "react-router";
import Map4dMap from "./Map4dMap";

// const onMapReady = (map, id) => {

//   let centerMap = map.getCamera().getTarget();
//   let marker = new window.map4d.Marker({
//     position: centerMap,
//     anchor: [0.5, 1.0],
//     label: new window.map4d.MarkerLabel({
//       text: "Demo Marker",
//       color: "FF00FF",
//       fontSize: 12,
//     }),
//   });
  
  
//   marker.setMap(map);
// };

let data = [
  [
    108.19113976479787,
    16.065875475908143
  ],
  [
    108.19863920455788,
    16.065875475908143
  ],
  [
    108.20245039525525,
    16.06563919567793
  ],
  [
    108.20380275324351,
    16.063276377939516
  ]
]


// function initMap() {
//   let options = {
//     center: { lat: 10.773201, lng: 106.700147 },
//     zoom: 17,
//     controls: true
//   }
//   let map = new map4d.Map(document.getElementById("map"), options)
  
//   let polyline = new map4d.Polyline({
//     path: [
//         [106.699380, 10.772431],
//         [106.700147, 10.773201],
//         [106.700763, 10.771783],
//         [106.701901, 10.772302],
//         [106.701493, 10.773267],
//         [106.702835, 10.773599]
//     ],
//     strokeColor: "#ff0000",
//     strokeOpacity: 1.0,
//     strokeWidth: 10})
//   // Thêm polyline vào bản đồ
//   polyline.setMap(map)
// }
// 
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        // center: { lat: 16.0721634, lng: 108.226905 },
        center: { lat: 10.773201, lng: 106.700147 },
        zoom: 15,
        controls: true,
      }
    };
  }
  onMapReadySet = (id, map) => {
    console.log("xxxx")
    this.setState({
      options: {
        center: { lat: 10.773201, lng: 106.700147 },
        zoom: 17,
        controls: true
      }
    })
    
    // let polyline = new window.map4d.Polygon({
    //   path: [
    //       [106.699380, 10.772431],
    //       [106.700147, 10.773201],
    //       [106.700763, 10.771783],
    //       [106.701901, 10.772302],
    //       [106.701493, 10.773267],
    //       [106.702835, 10.773599]
    //   ],
    //   strokeColor: "#ff0000",
    //   strokeOpacity: 1.0,
    //   draggable: true,
    //   strokeWidth: 10})
    
    // // Thêm polyline vào bản đồ'
    // polyline.setMap(map)
    let options = {
      center: { lat: 10.773201, lng: 106.700147 },
      zoom: 17,
      controls: true
    }
    let mapNew= new window.map4d.Map(document.getElementById("mainId"), options)
    let polyline = new window.map4d.Polyline({
      fillOpacity: 0.1,
      userInteractionEnabled: true,
      paths:[[
        {lat: 16.771749380684138, lng: 106.70001268386841},
        {lat: 16.768534727930506, lng: 106.70332789421082},
        {lat: 16.770684860129196, lng: 106.70641779899597},
        {lat: 16.77348844082262, lng: 106.70296311378479},
        {lat: 16.771749380684138, lng: 106.70001268386841}
      ]]
    })
    console.log(polyline)

  // Thêm Polygon vào bản đồ
    polyline.setMap(mapNew)
    console.log("xxxx")

  };
  onChangeMapReadySet = (id) => {
    // let options = {
    //   center: { lat: 10.773201, lng: 106.700147 },
    //   zoom: 17,
    //   controls: true
    // }
    // let map = new window.map4d.Map(document.getElementById("mainId"), options)
      this.setState({
        options: {
          center: { lat: 16.773201, lng: 106.700147 },
          zoom: 17,
          controls: true
        }
      })
      
      // let polyline = new window.map4d.Polygon({
      //   path: [
      //       [106.699380, 10.772431],
      //       [106.700147, 10.773201],
      //       [106.700763, 10.771783],
      //       [106.701901, 10.772302],
      //       [106.701493, 10.773267],
      //       [106.702835, 10.773599]
      //   ],
      //   strokeColor: "#ff0000",
      //   strokeOpacity: 1.0,
        // strokeWidth: 10})
      // Thêm polyline vào bản đồ
      // polyline.setMap(map)
  };
  render() {
    let { isLoggedIn } = this.props;
    // return (
    //   <div style={{ width: '80%', height: '400px' }}>
    //   <input placeholder='version' value={2.4} />
    //   <input placeholder='key' />
    //   <input placeholder='id' />
    //   <button onClick={(e) => {
    //       this.handleSetValue(e)
    //     }}
    //   >
    //     Thêm map
    //   </button>
    //   <button >Xóa map cuối</button>
    //   {
    //     this.state.maps.map(map => {
    //       return (
    //         <Map4dMap
    //           key={map.id}
    //           id={map.id}
    //           onMapReady={onMapReady}
    //           options={{
    //             center: { lat: 16.072163491469226, lng: 108.22690536081757 },
    //             zoom: 15,
    //             controls: true
    //           }}
    //           accessKey={map.key}
    //           version={map.version} />
    //       )
    //     })
    //   }
    // </div>  
    // )
    return (
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            // minWidth: '400px',
            minHeight: '200px'
          }}
        >
          <div style={{ width: '80%', height: '200px' }}>
            <input placeholder='version' value={2.4} />
            <input placeholder='key' />
            <input placeholder='id' />
            <button
              onClick={this.onChangeMapReadySet}
            >
              setData
            </button>
          </div>
        </div>
        {isLoggedIn === true && (
          <div id='map'>
            <Map4dMap
              onMapReady={this.onMapReadySet}
              id="mainId"
              key="mainId"
              options={this.state.options}
              accessKey="b79408e4def2b32c7549d97219e7ac68"
              version="2.4"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
