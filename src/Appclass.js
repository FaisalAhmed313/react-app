// import React, { useState } from 'react';
import axios from "axios";
import { useState } from "react";
import "./App.scss";
import { ShoppingList } from "./ShoppingList";
// import axios from 'axios'

// const testData = [
//   {                                                      
//     name: "Dan Abramov",
//     avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
//     company: "@facebook",
//   },
//   {
//     name: "Sophie Alpert",
//     avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
//     company: "Humu",
//   },
//   {
//     name: "Sebastian Markbåge",
//     avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
//     company: "Facebook",
//   },
// ];
const Card = (props) => {
  return (
    <div>
      
      <div style={{ margin: "1rem" }}>
        <img src={props.profile.avatar_url} style={{ width: "75px" }} />
        <div style={{ display: "inline-block", marginLeft: "12px" }}>
          <div style={{ fontSize: "125%" }}>{props.profile.name}</div>
          <div>{props.profile.company}</div>
        </div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  console.log("profiles", props.profile);
  return (
    <>
      {props.profiles.map((item) => {
        return <Card profile={item} />;
      })}
    </>
  );
};


const Form = (props) => {
  const [userName,SetUsername]=useState("")
  const handleInputChange=(event)=>{
    SetUsername(event.target.value)
  }
  const handleOnSubmit=async(event)=>{
   event.preventDefault();
   const response=await axios.get("https://api.github.com/users/${userName}")
   props.addNewprofile(response.data)

  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type={"text"} placeholder="Enter github username" value={userName}onChange={handleInputChange}
        required
      />
      <button> Add Profile Card</button>
    </form>
  );
};

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const addNewprofile=(newProfile)=>{
    console.log("from api data",newProfile);
  }
  return (
    <div>
      <div>The Github App</div>
      <div>
        <Form adNewprofile={addNewprofile}/>
        <CardList profiles={profiles} />
        <ShoppingList/>
      </div>
    </div>
  );
};

export default App;
