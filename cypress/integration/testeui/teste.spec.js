/// <reference types="cypress" />

describe ("Dev Dota2", () => {
    
    it
    ("cadastro de usuário com erro", () => {

        let hours = new Date().getHours().toString()
        let minutes = new Date().getMinutes().toString()
        let sec = new Date().getSeconds().toString()
        let userId = hours + minutes + sec + '_userId'
        let userPass = hours + minutes + sec + '_userPass'
        let userInfo = [userId, userPass]

        cy.visit('https://dev.dota2.com/register')
        cy.get('#regDataUsername').type(userId)
        cy.get('#regDataPassword').type(userPass)
        cy.get('#regDataConfirmpassword').type(userPass)
        cy.get('#regDataEmail').type(userId+"@gmail.com")
        cy.get('#regDataEmailConfirm').type(userId+"@gmail.com")
        cy.get('#regDataEmailConfirm').clear()
        cy.get('#cbApproveTerms').click()
        cy.get('#regBtnSubmit').click()
        cy.get('#ui-id-2').should("have.text","Error")
    }
    )

    it
    ("cadastro de usuário", () => {
        createUser()
    })

    it
    ("visitar GamePlay Bugs", () => {
        
        cy.get('#forum31 > .cell-forum > .forum-wrapper > .forum-info > :nth-child(2)').click()
        cy.get('#widget_12 > .widget-header > .module-title > .main-title').should("have.text", "Gameplay Bugs")
        
    })
    

    it("voltar a home", ()=> {

        cy.visit("https://dev.dota2.com/")
        cy.get('#widget_2 > .widget-header > .module-title > .main-title').should("contain.text", "Forums")
    })


    it
    ("visitar Ability Draft Bugs", () => {
        
        cy.get('#forum83 > .cell-forum > .forum-wrapper > .forum-info > .forum-title').click()
        cy.get('#widget_12 > .widget-header > .module-title > .main-title').should("contain.text", "Ability Draft Bugs")
        
    })

    
    it
    ("acessar o menu de contato", () => {
        
        cy.get('.nav-list > :nth-child(2) > a').click()
        cy.get('#widget_33 > .widget-header > .module-title > .main-title').should("contain.text", "Contact Us")
        
    })

    

});

function createUser() {

    let hours = new Date().getHours().toString()
    let minutes = new Date().getMinutes().toString()
    let sec = new Date().getSeconds().toString()
    let userId = hours + minutes + sec + '_userId'
    let userPass = hours + minutes + sec + '_userPass'
    let userInfo = [userId, userPass]


    cy.visit('https://dev.dota2.com/register')
    cy.get('#regDataUsername').type(userId)
    cy.get('#regDataPassword').type(userPass)
    cy.get('#regDataConfirmpassword').type(userPass)
    cy.get('#regDataEmail').type(userId+"@gmail.com")
    cy.get('#regDataEmailConfirm').type(userId+"@gmail.com")
    cy.get('#cbApproveTerms').click()
    cy.get('#regBtnSubmit').click()
    cy.wait(10000)
    cy.get('#btnAlertDialogOK').click()

    return userInfo;
}


