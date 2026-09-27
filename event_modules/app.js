// Node.js provides a built-in module called events. It allows your application to create and handle events.
// EventEmitter is a class provided by Node.js that allows objects to communicate through events.
const EventEmitter = require("events");

const emitter = new EventEmitter();

const userCreatedHandler = (name) => {
    console.log(`User created: ${name}`);
};

emitter.on("userCreated",userCreatedHandler);

emitter.emit("userCreated", "Harsh");
emitter.emit("userCreated", "Harsh");

// listens only once 
emitter.once("login", () => {
    console.log("First login!");
});
emitter.emit("login");
emitter.emit("login");
emitter.emit("login");

// turn off emitter
emitter.off("userCreated",userCreatedHandler);
emitter.emit("userCreated", "Harsh");