# language: pt

Funcionalidade: Hunter

    Contexto: 
        Dado um hunter de nome "Guilhermino"
        E o hunter sempre começa com 2 comidas
        E o hunter sempre começa saudável

    Cenário: Caçou para conseguir mais refeições
        Quando o hunter sair pra caçar 1 vezes
        Então a quantidade de comida deve ser 7

    Cenário: Comeu e ficou doente
        Quando o hunter comer 4 vezes
        Então a quantidade de comida deve ser 0
        E o hunter ficará doente

    Cenário: Comeu e não ficou doente
        Quando o hunter comer 1 vezes
        Então a quantidade de comida deve ser 0
        E o hunter não ficará doente
    
    Cenário: Caçou, comeu e ficou doentes
        Quando o hunter sair pra caçar 1 vezes
        E o hunter comer 1 vezes
        Então a quantidade de comida deve ser 5
        E o hunter não ficará doente