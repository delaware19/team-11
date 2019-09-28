import React from 'react';
import ***REMOVED***firebase, database***REMOVED*** from "../firebase/firebase.js"
import ***REMOVED***connect***REMOVED*** from 'react-redux'

class userProfile extends React.Component ***REMOVED***
  constructor(props)***REMOVED***
    super(props);
    //figure out why props.profile is not displaying
    this.state=***REMOVED***
      first_name: '',
      uid: props.auth.uid,
      last_name: '',
      age: '',
      gender: '',
      care_giver:'',
      favorite_toy: ''
***REMOVED***;
  ***REMOVED***

  onNameChange = (e) => ***REMOVED***
    console.log(e.target.value,this.state)
    const first_name = e.target.value;
    this.setState(() => (***REMOVED***first_name***REMOVED***));
  ***REMOVED***;

  onLastNameChange = (e) => ***REMOVED***
    const last_name = e.target.value;
    this.setState(() => (***REMOVED***last_name***REMOVED***));
  ***REMOVED***;

  onToyChange = (e) => ***REMOVED***
    const favorite_toy = e.target.value;
      this.setState(() => (***REMOVED***favorite_toy***REMOVED***));
  ***REMOVED***;

  onGenderChange = (e) => ***REMOVED***
    const gender = e.target.value;
      this.setState(() => (***REMOVED***gender***REMOVED***));
  ***REMOVED***;

  onAgeChange = (e) => ***REMOVED***
    const age = e.target.value;
    this.setState(() => (***REMOVED***age***REMOVED***));
  ***REMOVED***;

  onCareGiverChange = (e) => ***REMOVED***
    const care_giver = e.target.value;
      this.setState(() => (***REMOVED***care_giver***REMOVED***));
  ***REMOVED***;

  onSubmit = (e) => ***REMOVED***
    e.preventDefault();
    database.ref(`user/$***REMOVED***this.state.uid***REMOVED***`).update(this.state)
  ***REMOVED***;

  render()***REMOVED***

    return (
      <form className="form" onSubmit=***REMOVED***this.onSubmit***REMOVED***>
        <h1> User Profile Setup</h1>

        Please answer a few questions so we can help customize your user experience! 
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Patient's First Name"
          autoFocus
          className="text-input"
          value=***REMOVED***this.state.username***REMOVED***
          onChange=***REMOVED***this.onNameChange***REMOVED***
          required
        />
        <input
          type="text"
          placeholder="Patient's Last Name"
          autoFocus
          className="text-input"
          value=***REMOVED***this.state.last_name***REMOVED***
          onChange=***REMOVED***this.onLastNameChange***REMOVED***
          required
        /> 
        <input
          type="text"
          placeholder="Patient's Age"
          autoFocus
          className="text-input"
          value=***REMOVED***this.state.age***REMOVED***
          onChange=***REMOVED***this.onAgeChange***REMOVED***
          required
        />
        <input
          type="text"
          placeholder="Patient's Gender Identification"
          autoFocus
          className="text-input"
          value=***REMOVED***this.state.gender***REMOVED***
          onChange=***REMOVED***this.onGenderChange***REMOVED***
          required
        />
         <input
          type="text"
          placeholder="Care Giver Name"
          autoFocus
          className="text-input"
          value=***REMOVED***this.state.care_giver***REMOVED***
          onChange=***REMOVED***this.onCareGiverChange***REMOVED***
          required
        />
        <input
          type="text"
          placeholder="Patient's Favorite Toy"
          autoFocus
          className="text-input"
          value=***REMOVED***this.state.favorite_toy***REMOVED***
          onChange=***REMOVED***this.onToyChange***REMOVED***
          required
        />

        
        <div>
          <button className="button">Submit</button>
        </div>
      </form>
    );
  ***REMOVED***
***REMOVED***

const mapStateToProps = (state) => ***REMOVED***
  return ***REMOVED***
    auth: state.auth
  ***REMOVED***;
***REMOVED***;

export default connect(mapStateToProps)(userProfile);

// const userProfile = () => (
//   <div>
//     User Profile Setup!
//     <form>
//       <br></br>
//       <br></br>
//       Please answer a few questions so we can help customize your user experience! 
//       <br></br>
//       <br></br>
//       Patient's Name: <br></br> 
//       <input type="text" id="pat_name" name="name" required/>
//       <br></br>
//       Patient's Gender: <br></br> 
//       <input type ="text" id="pat_gender" name="gender" required/>
//       <br></br> 
//       Patient's Primary Caregiver: <br></br> 
//       <input type ="text" id="pat_caregiver" name="caregiver" required/>
//       <br></br> 
//       Patient's Age: <br></br> 
//       <input type ="text" id="pat_age" name="age" required/>
//       <br></br> 
//       Patient's Favorite Toy: <br></br> 
//       <input type ="text" id="pat_toy" name="toy" required/>
//     </form>
//     <br></br>
//     <button id= "save_button"> </button>
//   </div>
// );