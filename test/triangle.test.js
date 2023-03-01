const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Render Method', () => {
    it('should return triangle string', () => {
      const triangle = new Triangle({
        logoName: 'SVG',
        textColour: 'purple',
        bgColour: 'lightgrey',
        logoShape: 'triangle',
      });
      expect(triangle.render()).toEqual(
        `<polygon points="100 0, 0 ,0 50, 100" fill="lightgrey" />`
      );
    });
  });
});