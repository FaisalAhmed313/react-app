import React from 'react';
import './App.scss';
import axios from 'axios'
import App from './Appclass';


// const CardList = (props) => {
//   return (
//     <div>

//       {
//         props.profiles.map((profile) => {
//           return <Card profile={profile} />
//         })
//       }
//     </div>
//   )
// }

// class Form extends React.Component {
//   state = {
//     userName: "",

//   }
//   handleInputChange = (event) => {
//     this.setState({ userName: event.target.value });
//   }
//   handleOnSubmit = async (event) => {
//     event.preventDefault();
//     console.log("state", this.state.userName);
//     const config = {
//       method: 'get',
//       url: `https://api.github.com/users/${this.state.userName}`,
//       headers: {}
//     };
//     try {
//       const response = await axios(config)
//       console.log(JSON.stringify(response.data));
//       this.props.onDataReciveddFromAPI(response.data)
//     } catch (error) {
//       console.log(error);
//       // });
//     }

//     // .then(function (response) {
//     //   console.log(JSON.stringify(response.data));
//     // })
//     // .catch(function (error) {
//     //   console.log(error);
//     // });

//   }
//   render() {
//     return (
//       <div>
        // <form onSubmit={this.handleOnSubmit}>
        //   <input
        //     type={"text"}
        //     placeholder="Enter github username"
        //     value={this.state.userName}
        //     onChange={this.handleInputChange}
        //     required
        //   />
        //   <button > Add Profile Card</button>
        // </form>
//       </div>
//     )
//   }
// }

// class Card extends React.Component {
//   render() {
//     const profile = this.props.profile
//     return (
//       <div style={{ margin: "1rem" }}>
//         <img src={profile.avatar_url} style={{ width: "75px" }} />
//         <div style={{ display: "inline-block", marginLeft: "12px" }}>
//           <div style={{ fontSize: "125%" }}>{profile.name}</div>
//           <div>{profile.company}</div>
//         </div>
//       </div>
//     )
//   }
// }
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     profiles: [],
//   //     searchText: ""
//   //   }
//   // }

//   state = {
//     profiles: []
//   }
  // addNewProfile = (profileData) => {
  //   console.log("Profile::", profileData);
  //   this.setState({ profiles: [...this.state.profiles, profileData] })
  // }
  // render() {
  //   return (
//       <div>
//         <div className='header'>
//           The Git Hub App
//         </div>
//         {/* <Form onDataReciveddFromAPI={this.addNewProfile} />
//         <CardList profiles={this.state.profiles} /> */}
      
//       </div>
//     );
//   }
// }



export default App;
