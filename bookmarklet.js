// Grab the like button
var likeButton = document.querySelector('a.-cx-PRIVATE-PostInfo__likeButton');

// Grab the next button
var nextButton = document.querySelector('a.-cx-PRIVATE-PostModalConsumer__rightArrow');

// A counter
var likeCounter = 0;

// Start rolling likes
likeRoller();

// A function to slowly like, next, and then repeat
function likeRoller() {
    // Pick a random number for milliseconds
    var randomLikeSeconds = Math.floor(Math.random()*500 + 1);
    var randomNextSeconds = Math.floor(Math.random()*2500 + randomLikeSeconds);

    // In a few milliseconds, click the like button
    setTimeout("likeButton.click()", randomLikeSeconds);

    // Increment the counter
    likeCounter++;
    console.log("Likes: " + likeCounter);

    // A few more milliseconds later, click the next button
    setTimeout("nextButton.click()", randomNextSeconds);

    // Do it again soon
    setTimeout("likeRoller()", randomNextSeconds + 500);
};