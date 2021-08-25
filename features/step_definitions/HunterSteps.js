const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { cacador } = require("./../../app");

Given('um hunter de nome {string}', function (string) {
    cacador.name = string;
});

Given('o hunter sempre começa com {int} comidas', function (int) {
    cacador.food = int
});

Given('o hunter sempre começa saudável', function () {
      cacador.isHealthy = true
});

When('o hunter sair pra caçar {int} vezes', function (int) {
    for(let i = 0; i < int; i++) {
      cacador.hunt()
    }
});
When('o hunter comer {int} vezes', function (int) {
  for(let i = 0; i < int; i++) {
    cacador.eat()
  }
});

Then('a quantidade de comida deve ser {int}', function (int) {
  assert.strictEqual(cacador.food,int)
});

Then('o hunter ficará doente', function () {
  assert.strictEqual(cacador.isHealthy,false)
});

Then('o hunter não ficará doente', function () {
  assert.strictEqual(cacador.isHealthy,true) 
});