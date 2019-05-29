/*For a well-encapsulated Firebase module, 
we’ll define a index.js file in our Firebase folder that exports all necessary functionalities
 (Firebase class, Firebase context for Consumer and Provider components): */

import FirebaseContext from "./context";
import Firebase from "./firebase";

export default Firebase;
export { FirebaseContext };

/* The Firebase Context from the Firebase module (folder) is used to provide a Firebase instance to your entire application in the src/index.js file.
 You only need to create the Firebase instance with the Firebase class and pass it as value prop to the React’s Context
 he Firebase Context from the Firebase module (folder) is used to provide a Firebase instance to your entire application in the src/index.js file. 
 You only need to create the Firebase instance with the Firebase class and pass it as value prop to the React’s Context: */
