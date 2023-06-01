import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>About Not Your Grandma's Recipes</h2>
        <p>This project was created by Sam Gossie for Prime Digital Academy</p>
        <p>Some of the technologies used in this project are React.js,
						Redux, Node.js, Express, Material UI, and PostgresSQL.
            
            For more information about this project, and others that I have worked on, it is available on</p> 
            <a href="https://github.com/sjg3609/not-your-grandmas-recipes">Github</a>
            
            <p>A huge thank you to our instructor for the Tanzanite cohort, Chris Black! As well as Marc McCarthy for all the help along the way!</p>
            <p>As well as all the rest of my cohort mates, it's been a wild ride! Thank you for all the help too!</p>
      </div>
    </div>
  );
}

export default AboutPage;
