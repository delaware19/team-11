import React from 'react';
import ***REMOVED***connect***REMOVED*** from 'react-redux'

class DashboardPage extends React.Component***REMOVED*** 

    pStyle = ***REMOVED***
        marginLeft: "300px"
***REMOVED***;
    
    constructor(props) ***REMOVED***
        super(props);

        this.state =***REMOVED***
            uid: props.auth.uid,
    ***REMOVED***;
***REMOVED***


    render()***REMOVED***

        return(

            <div>
            <header className ="page-header" type="header"> ADD A STORY</header>

            <div class = "topnav"></div>

            <header type ="header"> ADD A SPECIFIC STORY</header>



            <br></br>

            <button className ="button" type="button" onclick = "#">Getting an EEG</button>
            <button className ="button" type="button" onclick = "#">A Broken Bone</button>
            <button className ="button" type="button" onclick = "#">My First Shot</button>
            <button className ="button" type="button" onclick = "#">A Visit to the Doctor</button>
            <button className ="button" type="button" onclick = "#">First Time at the Hostpital</button>

            <br></br>
            <br></br>

            <button className ="button" type="button" onclick = "#">Getting an MRI</button>
            <button className ="button" type="button" onclick = "#">Nurses Care for me</button>
            <button className ="button" type="button" onclick = "#">The Waiting Room</button>
            <button className ="button" type="button" onclick = "#">A Visit to the Doctor</button>
            <button className ="button" type="button" onclick = "#">My Yearly Checkup</button>
            <button className ="button" type="button" onclick = "#">Other</button>

            ***REMOVED***(this.state.uid === (""))&&
                <button className ="adminButton" style=***REMOVED***this.pStyle***REMOVED*** type ="button"> Edit Templates</button>***REMOVED***

            </div>
        
    );
***REMOVED***
***REMOVED***;

const mapStateToProps = (state) => ***REMOVED***
  return ***REMOVED***
    auth: state.auth
  ***REMOVED***;
***REMOVED***;

export default connect(mapStateToProps)(DashboardPage);
