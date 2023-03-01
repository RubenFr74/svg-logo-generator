const Square = require('../lib/square');

describe('Square', () => {
  describe('Render Method', () => {
    it('should render square string', () => {
      const square = new Square({
        logoName: 'SVG',
        textColour: 'green',
        bgColour: 'orange',
        logoShape: 'square',
      });
      expect(square.render()).toEqual(
        `<rect width="100" height="100" rx="15" fill="orange" />`
      );
    });
  });
});