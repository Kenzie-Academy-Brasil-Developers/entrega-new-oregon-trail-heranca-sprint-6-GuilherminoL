# language: pt

Funcionalidade: Hunter
    Como doctor posso curar um passageiro

    Contexto: 
    Dado um doctor de nome "Guilhermino"
    Dado um Traveler de nome "João"

    Cenário: Um passageiro está doente e será curado
    Quando o Traveler estiver doente
    Então o médico curará ele
    E o Traveler não ficará doente

    Cenário: Um passageiro não está doente e será curado
    Quando o Traveler não estiver doente
    Então o médico curará ele
    E o Traveler não ficará doente

