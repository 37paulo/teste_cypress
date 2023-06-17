///<reference types= "cypress"/>

describe('empty spec', () => {

  beforeEach(() => {
    cy.visit('https://www.livelo.com.br/')

  })

  it('passes', () => {
    cy.title().should('eq', 'Livelo | Programa de pontos que você troca por recompensas')

  })

  

})