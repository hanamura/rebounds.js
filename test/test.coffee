rebounds = require '../src/rebounds.coffee'
chai = require 'chai'
chai.should()

describe 'rebounds', ->
	a = width: 100, height: 100
	b = width: 200, height: 50
	c = width: 25, height: 50
	d = width: 400, height: 200

	describe 'fit', ->
		it 'default', ->
			r = rebounds.fit a, b
			r.width.should.equal 100
			r.height.should.equal 25

			r = rebounds.fit a, c
			r.width.should.equal 50
			r.height.should.equal 100

			r = rebounds.fit a, a
			r.width.should.equal a.width
			r.height.should.equal a.height

		it 'reduce: false', ->
			r = rebounds.fit a, b, reduce: false
			r.width.should.equal 200
			r.height.should.equal 50

		it 'expand: false', ->
			r = rebounds.fit a, c, expand: false
			r.width.should.equal 25
			r.height.should.equal 50

		it 'alias', ->
			rebounds.fit.should.equal rebounds.showAll

		it 'zero for space', ->
			r = rebounds.fit {width: 0, height: 0}, {width: 50, height: 50}
			r.width.should.equal 0
			r.height.should.equal 0

			r = rebounds.fit {width: 0, height: 100}, {width: 50, height: 50}
			r.width.should.equal 0
			r.height.should.equal 0

			r = rebounds.fit {width: 100, height: 0}, {width: 50, height: 50}
			r.width.should.equal 0
			r.height.should.equal 0

		it 'zero for rect', ->
			r = rebounds.fit {width: 100, height: 100}, {width: 0, height: 0}
			r.width.should.equal 0
			r.height.should.equal 0

			r = rebounds.fit {width: 100, height: 100}, {width: 0, height: 50}
			r.width.should.equal 0
			r.height.should.equal 100

			r = rebounds.fit {width: 100, height: 100}, {width: 50, height: 0}
			r.width.should.equal 100
			r.height.should.equal 0

		it 'zero both', ->
			r = rebounds.fit {width: 0, height: 0}, {width: 0, height: 0}
			r.width.should.equal 0
			r.height.should.equal 0

	describe 'fill', ->
		it 'default', ->
			r = rebounds.fill a, b
			r.width.should.equal 400
			r.height.should.equal 100

			r = rebounds.fill a, c
			r.width.should.equal 100
			r.height.should.equal 200

			r = rebounds.fill a, d
			r.width.should.equal 200
			r.height.should.equal 100

			r = rebounds.fill a, a
			r.width.should.equal a.width
			r.height.should.equal a.height

		it 'reduce: false', ->
			r = rebounds.fill a, d, reduce: false
			r.width.should.equal 400
			r.height.should.equal 200

		it 'expand: false', ->
			r = rebounds.fill a, c, expand: false
			r.width.should.equal 25
			r.height.should.equal 50

		it 'alias', ->
			rebounds.fill.should.equal rebounds.noBorder

		it 'zero for space', ->
			r = rebounds.fill {width: 0, height: 0}, {width: 50, height: 50}
			r.width.should.equal 0
			r.height.should.equal 0

			r = rebounds.fill {width: 0, height: 100}, {width: 50, height: 50}
			r.width.should.equal 100
			r.height.should.equal 100

			r = rebounds.fill {width: 100, height: 0}, {width: 50, height: 50}
			r.width.should.equal 100
			r.height.should.equal 100

		it 'zero for rect', ->
			(-> rebounds.fill {width: 100, height: 100}, {width: 0, height: 0}).should.throws()

			(-> rebounds.fill {width: 100, height: 100}, {width: 0, height: 50}).should.throws()

			(-> rebounds.fill {width: 100, height: 100}, {width: 50, height: 0}).should.throws()

		it 'zero both', ->
			r = rebounds.fill {width: 0, height: 0}, {width: 0, height: 0}
			r.width.should.equal 0
			r.height.should.equal 0

	describe 'remain', ->
		it 'default', ->
			r = rebounds.remain a, b
			r.width.should.equal 200
			r.height.should.equal 50

			r = rebounds.remain a, c
			r.width.should.equal 25
			r.height.should.equal 50

		it 'alias', ->
			rebounds.remain.should.equal rebounds.noScale

		it 'zero for space', ->
			r = rebounds.remain {width: 0, height: 0}, {width: 50, height: 50}
			r.width.should.equal 50
			r.height.should.equal 50

			r = rebounds.remain {width: 0, height: 100}, {width: 50, height: 50}
			r.width.should.equal 50
			r.height.should.equal 50

			r = rebounds.remain {width: 100, height: 0}, {width: 50, height: 50}
			r.width.should.equal 50
			r.height.should.equal 50

		it 'zero for rect', ->
			r = rebounds.remain {width: 100, height: 100}, {width: 0, height: 0}
			r.width.should.equal 0
			r.height.should.equal 0

			r = rebounds.remain {width: 100, height: 100}, {width: 0, height: 50}
			r.width.should.equal 0
			r.height.should.equal 50

			r = rebounds.remain {width: 100, height: 100}, {width: 50, height: 0}
			r.width.should.equal 50
			r.height.should.equal 0

		it 'zero both', ->
			r = rebounds.remain {width: 0, height: 0}, {width: 0, height: 0}
			r.width.should.equal 0
			r.height.should.equal 0

	describe 'stretch', ->
		it 'default', ->
			r = rebounds.stretch a, b
			r.width.should.equal 100
			r.height.should.equal 100

			r = rebounds.stretch a, c
			r.width.should.equal 100
			r.height.should.equal 100

		it 'alias', ->
			rebounds.stretch.should.equal rebounds.exactFit

		it 'zero for space', ->
			r = rebounds.stretch {width: 0, height: 0}, {width: 50, height: 50}
			r.width.should.equal 0
			r.height.should.equal 0

			r = rebounds.stretch {width: 0, height: 100}, {width: 50, height: 50}
			r.width.should.equal 0
			r.height.should.equal 100

			r = rebounds.stretch {width: 100, height: 0}, {width: 50, height: 50}
			r.width.should.equal 100
			r.height.should.equal 0

		it 'zero for rect', ->
			r = rebounds.stretch {width: 100, height: 100}, {width: 0, height: 0}
			r.width.should.equal 100
			r.height.should.equal 100

			r = rebounds.stretch {width: 100, height: 100}, {width: 0, height: 50}
			r.width.should.equal 100
			r.height.should.equal 100

			r = rebounds.stretch {width: 100, height: 100}, {width: 50, height: 0}
			r.width.should.equal 100
			r.height.should.equal 100

		it 'zero both', ->
			r = rebounds.stretch {width: 0, height: 0}, {width: 0, height: 0}
			r.width.should.equal 0
			r.height.should.equal 0

	describe 'position', ->
		it 'default', ->
			r = rebounds.position a, b
			r.x.should.equal -50
			r.y.should.equal 25

		it 'position 0', ->
			r = rebounds.position a, b, positionX: 0, positionY: 0
			r.x.should.equal 0
			r.y.should.equal 0

		it 'position 1', ->
			r = rebounds.position a, b, positionX: 1, positionY: 1
			r.x.should.equal -100
			r.y.should.equal 50

		it 'initial position', ->
			r = rebounds.position {
				width: 100
				height: 100
				x: 50
				y: 50
			}, b
			r.x.should.equal 0
			r.y.should.equal 75

		it 'zero for space', ->
			r = rebounds.position {width: 0, height: 0}, {width: 50, height: 50}
			r.x.should.equal -25
			r.y.should.equal -25

			r = rebounds.position {width: 0, height: 100}, {width: 50, height: 50}
			r.x.should.equal -25
			r.y.should.equal 25

			r = rebounds.position {width: 100, height: 0}, {width: 50, height: 50}
			r.x.should.equal 25
			r.y.should.equal -25

		it 'zero for rect', ->
			r = rebounds.position {width: 100, height: 100}, {width: 0, height: 0}
			r.x.should.equal 50
			r.y.should.equal 50

			r = rebounds.position {width: 100, height: 100}, {width: 0, height: 50}
			r.x.should.equal 50
			r.y.should.equal 25

			r = rebounds.position {width: 100, height: 100}, {width: 50, height: 0}
			r.x.should.equal 25
			r.y.should.equal 50

		it 'zero both', ->
			r = rebounds.position {width: 0, height: 0}, {width: 0, height: 0}
			r.x.should.equal 0
			r.y.should.equal 0
