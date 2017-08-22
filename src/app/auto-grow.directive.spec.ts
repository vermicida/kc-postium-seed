import { AutoGrowDirective } from './auto-grow.directive';

describe('AutoGrowDirective', () => {

  it('Debería instanciarse', () => {
    const directive = new AutoGrowDirective(null);
    expect(directive).toBeTruthy();
  });

});
