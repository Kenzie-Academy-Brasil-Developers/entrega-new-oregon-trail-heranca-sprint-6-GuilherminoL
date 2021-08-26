const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const { doutor } = require("./../../app");
const { viajante } = require("./../../app");

Given('um doctor de nome {string}', function (string) {
    doutor.name = string
});

When('o Traveler estiver doente', function () {
    viajante.isHealthy = false
});

When('o Traveler não estiver doente', function () {
    viajante.isHealthy = true
  });

Then('o médico curará ele', function () {
    doutor.heal(viajante)
});