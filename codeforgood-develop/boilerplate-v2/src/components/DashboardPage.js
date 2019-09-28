import React from 'react';
import ***REMOVED***firebase, database***REMOVED*** from "../firebase/firebase.js"
import ***REMOVED***connect***REMOVED*** from 'react-redux'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom';
class DashboardPage extends React.Component ***REMOVED***
  constructor(props)***REMOVED***
  	super(props)
  	this.state = ***REMOVED***
  		template :[]
  	***REMOVED***
  ***REMOVED***
  componentWillMount()***REMOVED***
  	database.ref("/template").once("value",snapShot=>***REMOVED***
  		console.log(snapShot.val())
  		this.setState(***REMOVED***template:snapShot.val()***REMOVED***)
  	***REMOVED***)
  ***REMOVED***



  render()***REMOVED***

    return (<div>
		<header className ="page-header" type="header"> ADD A STORY</header>

		<div class = "topnav"></div>

		<header type ="header"> ADD A SPECIFIC STORY</header>
	
		<br></br>
		
		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">Getting an EEG</button>
		</Link>
		
		<Link to ="socialstory">
		<button className ="button" type="button" onclick = "#">A Broken Bone</button>
		</Link>
		
		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">My First Shot</button>
		</Link>
		
		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">A Visit to the Doctor</button>
		</Link>
		
		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">First Time at the Hostpital</button>
		</Link>

		<br></br>
		<br></br>

		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">Getting an MRI</button>
		</Link>
		
		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">Nurses Care for me</button>
		</Link>
		
		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">The Waiting Room</button>
		</Link>
		
        <Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">A Visit to the Doctor</button>
		</Link>

		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">My Yearly Checkup</button>
		</Link>

		<Link to = "socialstory"> 
		<button className ="button" type="button" onclick = "#">Other</button>
		</Link>


</div>)***REMOVED***

***REMOVED***;


export default DashboardPage;



















