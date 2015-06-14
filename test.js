var expect = require('chai').expect;

var rebounds = require('./index');

describe('rebounds', function() {
  var a = {width: 100, height: 100};
  var b = {width: 200, height: 50};
  var c = {width: 25,  height: 50};
  var d = {width: 400, height: 200};

  describe('fit()', function() {
    it('should fit rectangle into area', function() {
      var r;
      r = rebounds.fit(a, b);
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(25);

      r = rebounds.fit(a, c);
      expect(r.width ).to.equal(50);
      expect(r.height).to.equal(100);

      r = rebounds.fit(a, a);
      expect(r.width ).to.equal(a.width);
      expect(r.height).to.equal(a.height);
    });

    it('should not fit rectangle by reducing its size if option.reduce is false', function() {
      var r = rebounds.fit(a, b, {reduce: false});
      expect(r.width ).to.equal(200);
      expect(r.height).to.equal(50);
    });

    it('should not fit rectangle by expanding its size if option.expand is false', function() {
      var r = rebounds.fit(a, c, {expand: false});
      expect(r.width ).to.equal(25);
      expect(r.height).to.equal(50);
    });

    it('should be an alias of showAll()', function() {
      expect(rebounds.fit).to.equal(rebounds.showAll);
    });

    it('should shrink rectangle sides to zero if any side of area is zero', function() {
      var r;
      r = rebounds.fit({width: 0, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);

      r = rebounds.fit({width: 0, height: 100}, {width: 50, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);

      r = rebounds.fit({width: 100, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });

    it('should not expand rectangle side if it is zero', function() {
      var r;
      r = rebounds.fit({width: 100, height: 100}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);

      r = rebounds.fit({width: 100, height: 100}, {width: 0, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(100);

      r = rebounds.fit({width: 100, height: 100}, {width: 50, height: 0});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(0);
    });

    it('should remain rectangle if every side of rectangle and area is zero', function() {
      var r = rebounds.fit({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('fill()', function() {
    it('should fill area with rectangle', function() {
      var r;
      r = rebounds.fill(a, b);
      expect(r.width ).to.equal(400);
      expect(r.height).to.equal(100);

      r = rebounds.fill(a, c);
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(200);

      r = rebounds.fill(a, d);
      expect(r.width ).to.equal(200);
      expect(r.height).to.equal(100);

      r = rebounds.fill(a, a);
      expect(r.width ).to.equal(a.width);
      expect(r.height).to.equal(a.height);
    });

    it('should not fill area with rectangle by reducing its size if option.reduce is false', function() {
      var r = rebounds.fill(a, d, {reduce: false});
      expect(r.width ).to.equal(400);
      expect(r.height).to.equal(200);
    });

    it('should not fill area with rectangle by expanding its size if option.expand is false', function() {
      var r = rebounds.fill(a, c, {expand: false});
      expect(r.width ).to.equal(25);
      expect(r.height).to.equal(50);
    });

    it('should be an alias of noBorder()', function() {
      expect(rebounds.fill).to.equal(rebounds.noBorder);
    });

    it('should fill area with rectangle even if any side of area is zero', function() {
      var r;
      r = rebounds.fill({width: 0, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);

      r = rebounds.fill({width: 0, height: 100}, {width: 50, height: 50});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);

      r = rebounds.fill({width: 100, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);
    });

    it('should throw error if any side of rectangle is zero', function() {
      expect(function() {
        rebounds.fill({width: 100, height: 100}, {width: 0, height: 0});
      }).to.throw();

      expect(function() {
        rebounds.fill({width: 100, height: 100}, {width: 0, height: 50});
      }).to.throw();

      expect(function() {
        rebounds.fill({width: 100, height: 100}, {width: 50, height: 0});
      }).to.throw();
    });

    it('should remain rectangle if every side of rectangle and area is zero', function() {
      var r = rebounds.fill({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('remain()', function() {
    it('should remain rectangle', function() {
      var r;
      r = rebounds.remain(a, b);
      expect(r.width ).to.equal(200);
      expect(r.height).to.equal(50);

      r = rebounds.remain(a, c);
      expect(r.width ).to.equal(25);
      expect(r.height).to.equal(50);
    });

    it('should be an alias of noScale()', function() {
      expect(rebounds.remain).to.equal(rebounds.noScale);
    });

    it('should remain rectangle if any side of area is zero', function() {
      var r;
      r = rebounds.remain({width: 0, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(50);
      expect(r.height).to.equal(50);

      r = rebounds.remain({width: 0, height: 100}, {width: 50, height: 50});
      expect(r.width ).to.equal(50);
      expect(r.height).to.equal(50);

      r = rebounds.remain({width: 100, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(50);
      expect(r.height).to.equal(50);
    });

    it('should remain rectangle if any side of rectangle is zero', function() {
      var r;
      r = rebounds.remain({width: 100, height: 100}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);

      r = rebounds.remain({width: 100, height: 100}, {width: 0, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(50);

      r = rebounds.remain({width: 100, height: 100}, {width: 50, height: 0});
      expect(r.width ).to.equal(50);
      expect(r.height).to.equal(0);
    });

    it('should remain rectangle if every side of rectangle and area is zero', function() {
      var r = rebounds.remain({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('stretch()', function() {
    it('should stretch rectangle to area', function() {
      var r;
      r = rebounds.stretch(a, b);
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);

      r = rebounds.stretch(a, c);
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);
    });

    it('should be an alias of exactFit()', function() {
      expect(rebounds.stretch).to.equal(rebounds.exactFit);
    });

    it('should stretch rectangle to area even if any side of area is zero', function() {
      var r;
      r = rebounds.stretch({width: 0, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);

      r = rebounds.stretch({width: 0, height: 100}, {width: 50, height: 50});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(100);

      r = rebounds.stretch({width: 100, height: 0}, {width: 50, height: 50});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(0);
    });

    it('should stretch rectangle to area even if any side of rectangle is zero', function() {
      var r;
      r = rebounds.stretch({width: 100, height: 100}, {width: 0, height: 0});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);

      r = rebounds.stretch({width: 100, height: 100}, {width: 0, height: 50});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);

      r = rebounds.stretch({width: 100, height: 100}, {width: 50, height: 0});
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);
    });

    it('should remain rectangle if every side of rectangle and area is zero', function() {
      var r = rebounds.stretch({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('position()', function() {
    it('should position rectangle in the center of area', function() {
      var r = rebounds.position(a, b);
      expect(r.x).to.equal(-50);
      expect(r.y).to.equal(25);
    });

    it('should align rectangle to the top left corner of area if both options.positionX and options.positionY are zero', function() {
      var r = rebounds.position(a, b, {positionX: 0, positionY: 0});
      expect(r.x).to.equal(0);
      expect(r.y).to.equal(0);
    });

    it('should align rectangle to the bottom right corner of area if both options.positionX and options.positionY are one', function() {
      var r = rebounds.position(a, b, {positionX: 1, positionY: 1});
      expect(r.x).to.equal(-100);
      expect(r.y).to.equal(50);
    });

    it('should offset rectangle position if area position is specified', function() {
      var r = rebounds.position({
        width: 100,
        height: 100,
        x: 50,
        y: 50
      }, b);
      expect(r.x).to.equal(0);
      expect(r.y).to.equal(75);
    });

    it('should position rectangle even if any sides of area is zero', function() {
      var r;
      r = rebounds.position({width: 0, height: 0}, {width: 50, height: 50});
      expect(r.x).to.equal(-25);
      expect(r.y).to.equal(-25);

      r = rebounds.position({width: 0, height: 100}, {width: 50, height: 50});
      expect(r.x).to.equal(-25);
      expect(r.y).to.equal(25);

      r = rebounds.position({width: 100, height: 0}, {width: 50, height: 50});
      expect(r.x).to.equal(25);
      expect(r.y).to.equal(-25);
    });

    it('should position rectangle even if any sides of rectangle is zero', function() {
      var r;
      r = rebounds.position({width: 100, height: 100}, {width: 0, height: 0});
      expect(r.x).to.equal(50);
      expect(r.y).to.equal(50);

      r = rebounds.position({width: 100, height: 100}, {width: 0, height: 50});
      expect(r.x).to.equal(50);
      expect(r.y).to.equal(25);

      r = rebounds.position({width: 100, height: 100}, {width: 50, height: 0});
      expect(r.x).to.equal(25);
      expect(r.y).to.equal(50);
    });

    it('should position rectangle in origin if every sides of rectangle and area is zero', function() {
      var r = rebounds.position({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.x).to.equal(0);
      expect(r.y).to.equal(0);
    });
  });
});
