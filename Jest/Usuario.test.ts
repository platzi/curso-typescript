import { Usuario } from './Usuario';

describe('Usuario Class', () => {
    let usuario: Usuario;

    beforeEach(() => {
        usuario = new Usuario('Amin', 'amin@example.com', 'Developer', 10, true);
      });
    
      test('should return the correct name', () => {
        expect(usuario.getName()).toBe('Amin');
      });
    
      test('should return the correct profile', () => {
        const expectedProfile = 'El usuario es Amin, se dedica a Developer y tiene 10 años de experiencia.';
        expect(usuario.getProfile()).toBe(expectedProfile);
      });
    
      test('should return the correct active status', () => {
        expect(usuario.isStillActive()).toBe(true);
      });
    
      test('should return false for inactive user', () => {
        usuario = new Usuario('Amin', 'amin@example.com', 'Developer', 10, false);
        expect(usuario.isStillActive()).toBe(false);
      });
});