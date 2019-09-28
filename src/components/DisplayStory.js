import React from 'react';

import ***REMOVED***database***REMOVED*** from '../firebase/firebase';


class userStory extends React.Component***REMOVED***

  constructor(props)***REMOVED***

    super(props);

    this.state = ***REMOVED***
      userData: null,
      index :1
***REMOVED***;

  ***REMOVED***

  
  toPrevious = () =>***REMOVED***
    const index = this.state.index;
    if(index != 0) 
      this.setState(***REMOVED***index:index - 1***REMOVED***)
  ***REMOVED***

  toNext = () =>***REMOVED***

    const index = this.state.index;
    const length = this.state.userData.length;
    if(index < length-1)
      this.setState(***REMOVED***index:index + 1***REMOVED***)

  ***REMOVED***
  
  componentWillMount()***REMOVED***

      database.ref("template/123").once(`value`).then((snapshot) =>***REMOVED***
      this.setState (***REMOVED***userData:snapshot.val()***REMOVED***);
      
***REMOVED***)


  ***REMOVED***
  

  render()***REMOVED***

    return(

    <div className = "wholePanel">
    
      <div className = "Social Stories"> Social Stories</div>

        ***REMOVED***(this.state.userData)&&<div>***REMOVED***this.state.userData[this.state.index].description***REMOVED***</div>***REMOVED***

        ***REMOVED***(this.state.userData)&&<img src=***REMOVED***this.state.userData[this.state.index].image***REMOVED***></img>***REMOVED***

     

    <div className = "buttons">

      <button type = "button" name = "previous" onClick = ***REMOVED***this.toPrevious***REMOVED***>previous</button>
      <button type = "button" name = "next" onClick = ***REMOVED***this.toNext***REMOVED***>next</button>
      </div>
    </div>

    )

  ***REMOVED***
***REMOVED***



export default userStory;
