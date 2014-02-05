rebounds = {}

if module?.exports?
	module.exports = rebounds
else
	_rebounds = @rebounds
	@rebounds = rebounds
	rebounds.noConflict = =>
		@rebounds = _rebounds
		rebounds

rebounds.CENTER = rebounds.MIDDLE = 0.5
rebounds.LEFT = rebounds.TOP = 0
rebounds.RIGHT = rebounds.BOTTOM = 1

rebounds.fit = rebounds.showAll = (a, b, opts = null) ->
	expand = if opts?.expand? then opts.expand else true
	reduce = if opts?.reduce? then opts.reduce else true

	r = {}
	ar = a.width / a.height
	br = b.width / b.height

	if ar > br
		r.width = b.width * a.height / b.height
		r.height = b.height and a.height
	else if ar < br
		r.width = b.width and a.width
		r.height = b.height * a.width / b.width
	else
		r.width = b.width and a.width
		r.height = b.height and a.height

	unless expand
		r.width > b.width and r.width = b.width
		r.height > b.height and r.height = b.height

	unless reduce
		r.width < b.width and r.width = b.width
		r.height < b.height and r.height = b.height

	{x: r.x, y: r.y} = rebounds.position a, r, opts

	r

rebounds.fill = rebounds.noBorder = (a, b, opts = null) ->
	expand = if opts?.expand? then opts.expand else true
	reduce = if opts?.reduce? then opts.reduce else true

	if b.width <= 0 < a.width or b.height <= 0 < a.height
		throw new Error 'Rect width/height must be greater than 0 unless space width/height is 0'

	r = {}
	ar = a.width / a.height
	br = b.width / b.height

	if ar > br
		r.width = a.width
		r.height = b.height * a.width / b.width
	else if ar < br
		r.width = b.width * a.height / b.height
		r.height = a.height
	else
		r.width = a.width
		r.height = a.height

	unless expand
		r.width > b.width and r.width = b.width
		r.height > b.height and r.height = b.height

	unless reduce
		r.width < b.width and r.width = b.width
		r.height < b.height and r.height = b.height

	{x: r.x, y: r.y} = rebounds.position a, r, opts

	r

rebounds.remain = rebounds.noScale = (a, b, opts = null) ->
	r = width: b.width, height: b.height

	{x: r.x, y: r.y} = rebounds.position a, b, opts

	r

rebounds.stretch = rebounds.exactFit = (a, b, opts = null) ->
	r = width: a.width, height: a.height

	{x: r.x, y: r.y} = rebounds.position a, a, opts

	r

rebounds.position = (a, b, opts = null) ->
	ax = Number a.x or a.left or 0
	ay = Number a.y or a.top or 0
	px = if opts?.positionX? then opts.positionX else 0.5
	py = if opts?.positionY? then opts.positionY else 0.5

	x: ax + (a.width - b.width) * px
	y: ay + (a.height - b.height) * py
