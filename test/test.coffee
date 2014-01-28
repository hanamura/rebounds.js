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
