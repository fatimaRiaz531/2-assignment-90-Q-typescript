// DAY 16
// 46. laptop
let laptop = {
    make: "Dell",
    model: "I5  GEN 6",
    year: 2021,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}. `);
    }
};
laptop.describe();
export {};
