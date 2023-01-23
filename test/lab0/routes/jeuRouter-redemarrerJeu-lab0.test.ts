// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';

describe('redemarrerJeu.test.ts', () => {

  let j1,j2;

  beforeAll(async () => {
    j1 = {nom: "F"}
    j2 = {nom: "A"}
  });
  describe('GET /api/v1/jeu/redemarrerJeu', () => {
    test('returns status 200', async () => {
      //const response = await axios.get('/api/v1/jeu/redemarrerJeu');
      //expect(response.status).toBe(200);
    });
  });

  it("should implement test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});
