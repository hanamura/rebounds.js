(function() {
  var rebounds, _rebounds,
    _this = this;

  rebounds = {};

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = rebounds;
  } else {
    _rebounds = this.rebounds;
    this.rebounds = rebounds;
    rebounds.noConflict = function() {
      _this.rebounds = _rebounds;
      return rebounds;
    };
  }

  rebounds.CENTER = rebounds.MIDDLE = 0.5;

  rebounds.LEFT = rebounds.TOP = 0;

  rebounds.RIGHT = rebounds.BOTTOM = 1;

  rebounds.fit = rebounds.showAll = function(a, b, opts) {
    var ar, br, expand, r, reduce, _ref;
    if (opts == null) {
      opts = null;
    }
    expand = (opts != null ? opts.expand : void 0) != null ? opts.expand : true;
    reduce = (opts != null ? opts.reduce : void 0) != null ? opts.reduce : true;
    r = {};
    ar = a.width / a.height;
    br = b.width / b.height;
    if (ar > br) {
      r.width = b.width * a.height / b.height;
      r.height = b.height && a.height;
    } else if (ar < br) {
      r.width = b.width && a.width;
      r.height = b.height * a.width / b.width;
    } else {
      r.width = b.width && a.width;
      r.height = b.height && a.height;
    }
    if (!expand) {
      r.width > b.width && (r.width = b.width);
      r.height > b.height && (r.height = b.height);
    }
    if (!reduce) {
      r.width < b.width && (r.width = b.width);
      r.height < b.height && (r.height = b.height);
    }
    _ref = rebounds.position(a, r, opts), r.x = _ref.x, r.y = _ref.y;
    return r;
  };

  rebounds.fill = rebounds.noBorder = function(a, b, opts) {
    var ar, br, expand, r, reduce, _ref;
    if (opts == null) {
      opts = null;
    }
    expand = (opts != null ? opts.expand : void 0) != null ? opts.expand : true;
    reduce = (opts != null ? opts.reduce : void 0) != null ? opts.reduce : true;
    if ((b.width <= 0 && 0 < a.width) || (b.height <= 0 && 0 < a.height)) {
      throw new Error('Rect width/height must be greater than 0 unless space width/height is 0');
    }
    r = {};
    ar = a.width / a.height;
    br = b.width / b.height;
    if (ar > br) {
      r.width = a.width;
      r.height = b.height * a.width / b.width;
    } else if (ar < br) {
      r.width = b.width * a.height / b.height;
      r.height = a.height;
    } else {
      r.width = a.width;
      r.height = a.height;
    }
    if (!expand) {
      r.width > b.width && (r.width = b.width);
      r.height > b.height && (r.height = b.height);
    }
    if (!reduce) {
      r.width < b.width && (r.width = b.width);
      r.height < b.height && (r.height = b.height);
    }
    _ref = rebounds.position(a, r, opts), r.x = _ref.x, r.y = _ref.y;
    return r;
  };

  rebounds.remain = rebounds.noScale = function(a, b, opts) {
    var r, _ref;
    if (opts == null) {
      opts = null;
    }
    r = {
      width: b.width,
      height: b.height
    };
    _ref = rebounds.position(a, b, opts), r.x = _ref.x, r.y = _ref.y;
    return r;
  };

  rebounds.stretch = rebounds.exactFit = function(a, b, opts) {
    var r, _ref;
    if (opts == null) {
      opts = null;
    }
    r = {
      width: a.width,
      height: a.height
    };
    _ref = rebounds.position(a, a, opts), r.x = _ref.x, r.y = _ref.y;
    return r;
  };

  rebounds.position = function(a, b, opts) {
    var ax, ay, px, py;
    if (opts == null) {
      opts = null;
    }
    ax = Number(a.x || a.left || 0);
    ay = Number(a.y || a.top || 0);
    px = (opts != null ? opts.positionX : void 0) != null ? opts.positionX : 0.5;
    py = (opts != null ? opts.positionY : void 0) != null ? opts.positionY : 0.5;
    return {
      x: ax + (a.width - b.width) * px,
      y: ay + (a.height - b.height) * py
    };
  };

}).call(this);
