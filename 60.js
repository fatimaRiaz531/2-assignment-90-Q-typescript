// 60. Self-Running User Profile: Create a quick, self-setup profile for a user that can 
// tell you the user's name and age.
// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user 
// profile by itself and can tell you about the user.
// solution:
let userProfile = (function () {
    let name = "Fatima";
    let age = 24;
    //  this part shares the user details
    return {
        displayInfo: function () {
            console.log(`Name:${name}, Age: ${age}`);
        }
    };
})();
//  asking about the profile to tell us about the user
userProfile.displayInfo();
export {};
