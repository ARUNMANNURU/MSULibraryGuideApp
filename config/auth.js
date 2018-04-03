module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '713762224412-cbruk23k1fdh208r7tv4d1347r0mfp8d.apps.googleusercontent.com',
        'clientSecret'  : 'VcVbIICkdDt_6DOzQ0-Ac-CT',
        'callbackURL'   : 'http://localhost:8000/auth/google/redirect'
    }

};