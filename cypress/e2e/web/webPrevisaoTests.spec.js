/// <reference types="cypress" />

import { HomeLocators } from './locators/home';
import data from '../../data/data.json';

describe('Validacao das previsoes TextBlob - Web', () => {
  const homeLocators = new HomeLocators();

  beforeEach('', () => {
    cy.visit(Cypress.env('baseUrl'));
  })

  it('Cenario 01: Validar previsao - Muito positivo', () => {
    cy.get(homeLocators.inserirTexto).type(data.valores.muitoPos);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.MPositivo);
  });

  it('Cenario 02: Validar previsao - Levemente positivo', () => {
    cy.get(homeLocators.inserirTexto).type(data.valores.levemPos);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.LPositivo);
  });

  it('Cenario 03: Validar previsao - Neutro', () => {
    cy.get(homeLocators.inserirTexto).type(data.valores.neutro);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.Neutro);
  });

  it('Cenario 04: Validar previsao - Levemente Negativo', () => {
    cy.get(homeLocators.inserirTexto).type(data.valores.levemNeg);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.LNegativo);
  });

  it('Cenario 05: Validar previsao - Muito Negativo', () => {
    cy.get(homeLocators.inserirTexto).type(data.valores.muitoNeg);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.MNegativo);
  });

  it('Cenario 06: Validar previsao - Com dados invalidos', () => {
    cy.get(homeLocators.inserirTexto).type(data.valores.invalido);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.Invalido);
  });

  it('Cenario 07: Validar previsao - Com espacos vazios', () => {
    cy.get(homeLocators.inserirTexto).type("     ");
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.Invalido);
  });

  it('Cenario 08: Validar previsao - limite (0,6) - Muito Positivo', () => {
    cy.get(homeLocators.inserirTexto).type(data.limites.Pos06);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.MPositivo);
  });

  it('Cenario 09: Validar previsao - limite (0,5) - Levemente Positivo', () => {
    cy.get(homeLocators.inserirTexto).type(data.limites.Pos05);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.LPositivo);
  });

  it('Cenario 10: Validar previsao - limite (0,4) - Levemente Positivo', () => {
    cy.get(homeLocators.inserirTexto).type(data.limites.Pos04);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.LPositivo);
  });

  it('Cenario 11: Validar previsao - limite (-0,6) - Muito Negativo', () => {
    cy.get(homeLocators.inserirTexto).type(data.limites.Neg06);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.MNegativo);
  });

  it('Cenario 12: Validar previsao - limite (-0,5) - Levemente Negativo', () => {
    cy.get(homeLocators.inserirTexto).type(data.limites.Neg05);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.LNegativo);
  });

  it('Cenario 13: Validar previsao - limite (-0,4) - Levemente Negativo', () => {
    cy.get(homeLocators.inserirTexto).type(data.limites.Neg04);
    cy.get(homeLocators.botaoPrevisao).click();
    cy.contains('a', data.validacoes.LNegativo);
  });
});
