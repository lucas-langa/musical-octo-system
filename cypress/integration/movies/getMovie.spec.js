const { expect } = require("chai");
const { describe } = require("mocha");

describe('OMDB api', () => {
    context('Get /title', () => {
        it('Should return data of the movie batman', () => {
            cy.request(({
                method: 'GET',
                url: `${Cypress.env('APP_URL')}?apikey=${Cypress.env('API_KEY')}`,
                qs : {
                    title:'batman'
                }
            })).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.Response).to.eq("True");
                expect(response.body.Title).to.eq("Batman");
                // cy.log(JSON.stringify(response.body));
            });
        })
    })
})