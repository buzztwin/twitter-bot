const T = require("./Twit.js");
const sampleClient = require('./sampleclient');

const {google} = require('googleapis');
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min
const timeout2 = 1000 * 5;
const timeout3 = 1000 * 15;

const youtube = google.youtube({
   version: 'v3',
   //auth: process.env.YOUTUBE_KEY
   auth: sampleClient.oAuth2Client 
});

//var google = require('googleapis');
//var youtube = google.youtube({
 //  version: 'v3',
 //  auth: process.env.YOUTUBE_KEY
//});

async function runSample () {
  const res = await youtube.search.list({
    part: 'id,snippet',
    q: 'Node.js on Google Cloud'
  });
  console.log(res.data);
}

const AutoDM = () => {
  //const stream = T.stream('statuses/sample');
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀" + my_user_name);
  stream.on("follow", SendMessage);
 
 
 
runSample();


 youtube.subscriptions.insert({
  part : 'snippet',
  resource:  {
                kind: 'youtube#channel',
                channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
            }
 }, function (err, data) {
    if (err) {
      console.log('The API Sub Insert returned an error: ' + err);
    }
      //console.log(data);
  });
  
  
  stream.on('tweet', function (tweet) {
    if (tweet.user.screen_name == 'dailytxtmsg')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    }
    
    if (tweet.user.screen_name == 'TheseRealWords')
    {
              T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
      
    }

    if (tweet.user.screen_name == 'Relationsmentor')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
      
    }
   
    if (tweet.user.screen_name == 'RichWisdom')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    }

   
    if (tweet.user.screen_name == 'TextsBook')
    {
              T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    }

   
    if (tweet.user.screen_name == 'myunwrittensoul')
    {
              T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    }
   
      if (tweet.user.screen_name == 'SweetLovePost')
    {
              T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    }
   
   
      if (tweet.user.screen_name == 'TheIifePost')
    {
              T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });
     
               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    }
    
    
    
  });
 
};

const SendMessage = user => {
  const { screen_name, name } = user.source;
  
  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };

  
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    const handle = screen_name;
  
 
    /*T.get('statuses/home_timeline', {
    count: 1
    }, (err, data, response) => {
      data.forEach(t => {
           T.post('favorites/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${data.text} from HomeTimeline tweet liked!`);
            });

             T.post('statuses/retweet/:id', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${data.text} from Home Timeline tweet RT!`);
            });
        });
    });*/
    
    /*T.post('friendships/create', {
      screen_name: handle
    }, (err, data, response) => {
        console.log(`${screen_name} followed back!`);
    });*/
    
    /*T.get('statuses/user_timeline', {
    screen_name: handle,
      count: 1
    }, (err, data, response) => {
       data.forEach(t => {
         T.post('favorites/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${data.text} tweet liked!`);
          });
         
           T.post('statuses/retweet/:id', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${data.text} tweet RT!`);
          });
      });
    });*/
    
    
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  const channelName = "https://buzztwin.com";
  //return `Hi ${name} Thanks for .... \n Happy ${dayName} 😊😊 `; // your message
  // My message   
  return `Hi ${name} Thanks for being a part of my social media network. \n If you want to check out my blog about life and relationships -> ${channelName} \n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
