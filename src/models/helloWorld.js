
class HelloWorld { 
    constructor(){
        this.foo = "Hello";
        this.bar = "World!";
    }

    concat() {
        return this.foo + " " +this.bar;
    }
}

module.exports = HelloWorld;