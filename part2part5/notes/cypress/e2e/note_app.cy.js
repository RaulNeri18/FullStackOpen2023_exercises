describe('Note app', function() {
  beforeEach(function() {
    //Empty DB:
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    //Create new User:
    const user = {
      name: 'Raul Neri',
      username: 'rnerip',
      password: '987654321'
    }

    cy.request('POST', `${Cypress.env('BACKEND')}/users`, user)
    //End

    cy.visit('')
  })

  it('then example', function() {
    cy.get('button').then( buttons => {
      console.log('number of buttons', buttons.length)
      cy.wrap(buttons[0]).click()
    })
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2023')
  })

  it('login form can be opened', function() {
    cy.contains('log in').click()
  })

  it('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('rnerip')
    cy.get('#password').type('123456789')
    cy.get('#login-button').click()

    //cy.get('.error').contains('wrong credentials')
    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Raul Neri logged in')
    //cy.contains('Raul Neri logged in').should('not.exist')
  })

  it('user can log in', function() {
    cy.contains('log in').click()
    cy.get('#username').type('rnerip')
    cy.get('#password').type('987654321')
    cy.get('#login-button').click()

    cy.contains('Raul Neri logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      /*
      cy.contains('log in').click()
      cy.get('input:first').type('rnerip')
      cy.get('input:last').type('987654321')
      cy.get('#login-button').click()
      */
      cy.login({ username: 'rnerip', password: '987654321' })
    })

    it('a new note can be created', function() {
      cy.contains('new note').click()
      cy.get('input').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('and several notes exist', function () {
      beforeEach(function () {
        //cy.login({ username: 'mluukkai', password: 'salainen' })
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })

      it('one of those can be made important', function () {
        /*
        cy.contains('second note').parent().find('button').click()
        cy.contains('second note').parent().find('button')
          .should('contain', 'make not important')
        */

        cy.contains('second note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
      })
    })

    describe('and a note exists', function () {
      beforeEach(function () {
        cy.createNote({ content: 'another note cypress', important: true })
      })

      it('it can be made not important', function () {
        cy.contains('another note cypress').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
        cy.get('@theButton').should('contain', 'make important')
      })
    })
  })
})