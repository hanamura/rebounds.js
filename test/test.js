describe('rebounds', function() {
  var a = {width: 100, height: 100};
  var b = {width: 200, height: 50};
  var c = {width: 25,  height: 50};
  var d = {width: 400, height: 200};

  describe('fit', function() {
    it('default', function() {
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

    it('reduce: false', function() {
      var r = rebounds.fit(a, b, {reduce: false});
      expect(r.width ).to.equal(200);
      expect(r.height).to.equal(50);
    });

    it('expand: false', function() {
      var r = rebounds.fit(a, c, {expand: false});
      expect(r.width ).to.equal(25);
      expect(r.height).to.equal(50);
    });

    it('alias', function() {
      expect(rebounds.fit).to.equal(rebounds.showAll);
    });

    it('zero for space', function() {
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

    it('zero for rect', function() {
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

    it('zero both', function() {
      var r = rebounds.fit({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('fill', function() {
    it('default', function() {
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

    it('reduce: false', function() {
      var r = rebounds.fill(a, d, {reduce: false});
      expect(r.width ).to.equal(400);
      expect(r.height).to.equal(200);
    });

    it('expand: false', function() {
      var r = rebounds.fill(a, c, {expand: false});
      expect(r.width ).to.equal(25);
      expect(r.height).to.equal(50);
    });

    it('alias', function() {
      expect(rebounds.fill).to.equal(rebounds.noBorder);
    });

    it('zero for space', function() {
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

    it('zero for rect', function() {
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

    it('zero both', function() {
      var r = rebounds.fill({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('remain', function() {
    it('default', function() {
      var r;
      r = rebounds.remain(a, b);
      expect(r.width ).to.equal(200);
      expect(r.height).to.equal(50);

      r = rebounds.remain(a, c);
      expect(r.width ).to.equal(25);
      expect(r.height).to.equal(50);
    });

    it('alias', function() {
      expect(rebounds.remain).to.equal(rebounds.noScale);
    });

    it('zero for space', function() {
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

    it('zero for rect', function() {
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

    it('zero both', function() {
      var r = rebounds.remain({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('stretch', function() {
    it('default', function() {
      var r;
      r = rebounds.stretch(a, b);
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);

      r = rebounds.stretch(a, c);
      expect(r.width ).to.equal(100);
      expect(r.height).to.equal(100);
    });

    it('alias', function() {
      expect(rebounds.stretch).to.equal(rebounds.exactFit);
    });

    it('zero for space', function() {
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

    it('zero for rect', function() {
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

    it('zero both', function() {
      var r = rebounds.stretch({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.width ).to.equal(0);
      expect(r.height).to.equal(0);
    });
  });

  describe('position', function() {
    it('default', function() {
      var r = rebounds.position(a, b);
      expect(r.x).to.equal(-50);
      expect(r.y).to.equal(25);
    });

    it('position 0', function() {
      var r = rebounds.position(a, b, {positionX: 0, positionY: 0});
      expect(r.x).to.equal(0);
      expect(r.y).to.equal(0);
    });

    it('position 1', function() {
      var r = rebounds.position(a, b, {positionX: 1, positionY: 1});
      expect(r.x).to.equal(-100);
      expect(r.y).to.equal(50);
    });

    it('initial position', function() {
      var r = rebounds.position({
        width: 100,
        height: 100,
        x: 50,
        y: 50
      }, b);
      expect(r.x).to.equal(0);
      expect(r.y).to.equal(75);
    });

    it('zero for space', function() {
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

    it('zero for rect', function() {
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

    it('zero both', function() {
      var r = rebounds.position({width: 0, height: 0}, {width: 0, height: 0});
      expect(r.x).to.equal(0);
      expect(r.y).to.equal(0);
    });
  });
});
