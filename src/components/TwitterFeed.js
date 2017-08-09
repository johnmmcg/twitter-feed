import React from 'react';
import Tweet from './Tweet'

const TwitterFeed = (props) => {
  let data = props.data;


  let tweets = data.map(post => {
    return(
      <Tweet key={post.id_str} text={post.text} user={post.user} retweetCount={post.retweet_count} favoriteCount={post.favorite_count}
      entities={post.entities} time={post.timestamp_ms} />
    );
  });

  return(
    <div className="row">
      <ul>
        {tweets}
      </ul>
    </div>
  )
}


export default TwitterFeed;
