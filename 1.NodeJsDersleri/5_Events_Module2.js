// todo:       https://www.youtube.com/watch?v=gafliexXARE&list=PL_WK6W0Gn1I6Z5UbiXgsK7j7oiKCV7vg6&index=14

const EventEmitter = require("events");

class MyLogger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit("hello world", {
            id:1
        })
    }
} /// videoda surasi export ediliyordu module.exports = MyLogger


// burasida import edildi const MyLogger = require('./5_Events_Module2.js') videoda
const logg = new MyLogger();
logg.on("hello world", (args)=>{
    console.log(args.id);
})

logg.log('message231');


// ! ------------ bu ornegi daha seviyorum ----------
const EventEmitter1 = require("events");
class MyEmitter extends EventEmitter1 {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
// Prints:
//   B
//   A