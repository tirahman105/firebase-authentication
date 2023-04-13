/**
 * ------------------------
 *      *INITIAL INSTALLATION
 * ------------------------
 * 1. visit console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register ap (create config)
 * 4. Install firebase: npm install firebase
 * 5. add config file to your project 
 * 6. DANGER: do not publish or make firebase config to public by pushing those to github
 * 
 * ---------------------------
 *      *INTEGRATION
 * ---------------------------
 * 7. go to docs> build> authentication > web > get started
 * 8. Export app from firebase.config.js file
 * 9. Login.jsx : import { getAuth } from "firebase/auth";
 * 10. create const auth = getAuth(app);
 * 
 *  ---------------------------
 *      *Provider setup
 * ---------------------------
 * 
 * 11. import google auth provider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sign in method (eg: google, facebook, github etc)
 * 
 */