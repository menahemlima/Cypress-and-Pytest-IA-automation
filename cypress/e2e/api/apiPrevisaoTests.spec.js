import data from '../../data/data.json';

describe('Validacao das previsoes TextBlob - Api', () => {

  it('Cenario 01: Validar previsao - Muito positivo', () => {
    cy.postPrevisao(data.valores.muitoPos).then((response) => {
      expect(response.status).to.equal(200);
      const responseText = JSON.stringify(response.body);
      expect(responseText).to.include(data.apiValidacoes.MPositivo);
    });
  });

it('Cenario 02: Validar previsao - Levemente positivo', () => {
  cy.postPrevisao(data.valores.levemPos).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.LPositivo);
  });
});

it('Cenario 03: Validar previsao - Neutro', () => {
  cy.postPrevisao(data.valores.neutro).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.Neutro);
  });
});

it('Cenario 04: Validar previsao - Levemente Negativo', () => {
  cy.postPrevisao(data.valores.levemNeg).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.LNegativo);
  });
});

it('Cenario 05: Validar previsao - Muito Negativo', () => {
  cy.postPrevisao(data.valores.muitoNeg).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.MNegativo);
  });
});

it('Cenario 06: Validar previsao - Com dados invalidos', () => {
  cy.postPrevisao(data.valores.invalido).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.Invalido);
  });
});

it('Cenario 07: Validar previsao - Com espacos vazios', () => {
  cy.postPrevisao("   ").then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.Invalido);
  });
});

it('Cenario 08: Validar previsao - limite (0,6) - Muito Positivo', () => {
  cy.postPrevisao(data.limites.Pos06).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.MPositivo);
  });
});

it('Cenario 09: Validar previsao - limite (0,5) - Levemente Positivo', () => {
  cy.postPrevisao(data.limites.Pos05).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.LPositivo);
  });
});

it('Cenario 10: Validar previsao - limite (0,4) - Levemente Positivo', () => {
  cy.postPrevisao(data.limites.Pos04).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.LPositivo);
  });
});

it('Cenario 11: Validar previsao - limite (-0,6) - Muito Negativo', () => {
  cy.postPrevisao(data.limites.Neg06).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.MNegativo);
  });
});

it('Cenario 12: Validar previsao - limite (-0,5) - Levemente Negativo', () => {
  cy.postPrevisao(data.limites.Neg05).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.LNegativo);
  });
});

it('Cenario 13: Validar previsao - limite (-0,4) - Levemente Negativo', () => {
  cy.postPrevisao(data.limites.Neg04).then((response) => {
    expect(response.status).to.equal(200);
    const responseText = JSON.stringify(response.body);
    expect(responseText).to.include(data.apiValidacoes.LNegativo);
  });
});

});