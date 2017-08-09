import React from 'react';

const Tweet = (props) => {
  let name = props.user.name;
  let handle = props.user.screen_name;
  let userImg = props.user.profile_image_url;
  let entities = props.entities;
  let tweetMedia = null;
  let displayURL = null;
  let tweetDate = new Date(Number(props.time));
  let tweetDay= tweetDate.getDate();
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  let tweetMonth = monthNames[tweetDate.getUTCMonth()]



  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  if (isEmpty(props.entities)) {
    tweetMedia = null
  } else {
    tweetMedia = props.entities.media[0].media_url;
    displayURL = props.entities.media[0].display_url;
  }

  let text = props.text;

if (text.includes(displayURL)) {
  text = text.replace(displayURL, '');
  debugger;
}

  // debugger;

  let replyAlert = (event) => {
    alert('Reply');
  }

  let retweetAlert = (event) => {
    alert('Retweet');
    event.target.style.color = '#19CF86';
  }

  let likeAlert = (event) => {
    alert('Like');
    event.target.style.color = '#E2264D';
  }

  let favoriteAlert = (event) => {
    alert('favorite');

  };



  return(
    <div className="tweet">
        <div className="small-2 column">
          <img className="userImg" src={userImg} />
        </div>


      <div className="tweetInfo row">
        <div className="tweetHeader medium-8 column">

          <h3> {name} | @{handle} | {tweetMonth} {tweetDay} </h3>

          <p>{text}</p>
          <img className="tweetMedia" src={tweetMedia} />

        </div>

        <div className="tweetActions small-10 column">
          <i className="fa fa-reply" aria-hidden="true" onClick={replyAlert}> </i>
          <i className="fa fa-retweet" aria-hidden="true" onClick={retweetAlert} >{props.retweetCount}</i>
          <i className="fa fa-heart" aria-hidden="true" onClick={likeAlert}>{props.favoriteCount}</i>
          <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={favoriteAlert}></i>
        </div>
      </div>
    </div>
  )

};


export default Tweet;
