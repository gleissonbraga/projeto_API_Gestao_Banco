
const { findUser } = require('./user_repository');

describe('findUser', () => {
  let listUser;

  beforeEach(() => {
    listUser = [
      { id: 1, name: 'Gleisson', cpf: '85907219068' },
      { id: 2, name: 'José', cpf: '09876543211' }
    ];
  });

  it('deve retornar o usuário correto quando o ID existe', () => {
    const result = findUser(1, listUser);
    expect(result).toEqual({ id: 1, name: 'Gleisson', cpf: '85907219068' });
  });

  it('deve retornar undefined quando o ID não existe', () => {
    const result = findUser(3, listUser);
    expect(result).toBeUndefined();
  });

  it('deve funcionar corretamente com ID como string', () => {
    const result = findUser("1", listUser);
    expect(result).toEqual({ id: 1, name: 'Gleisson', cpf: '85907219068' });
  });
});


