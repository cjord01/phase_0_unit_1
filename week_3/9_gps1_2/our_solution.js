// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Clayton Jordan
//  2. Steve Pikelny

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
        console.log("My client, " + this.name + " is " + this.age + '-years-old. Most known for the quote: "' + this.quote + '"')
    }
}

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
adamSandler.showQuote();

var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new Client ("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

console.log("My client, " + adamSandler.name + " is " + adamSandler.age + "-years-old. He's known for the quote: " +'"'+adamSandler.quote+'"')
console.log("My client, " + kristenBell.name + " is " + kristenBell.age + "-years-old. She's known for the quote: " +'"'+kristenBell.quote+'"')
console.log("My client, " + jimCarrey.name + " is " + jimCarrey.age + "-years-old. He's known for the quote: " +'"'+jimCarrey.quote+'"')

adamSandler.showQuote()

//  6.  Your Reflection:
// Johnny said that we did better than any of his other groups but I felt a bit like Steve carried be a little through this session. He seemed to be 
// ahead of me with this stuff. This is a little frustrating because I'm nearly done with my challenges this week so it seems like I should know this stuff
// better than most. JS feels a bit over my head. I am curious to see how it's going to tie in with HTML and CSS. 