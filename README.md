# rebounds.js

Rectangle scaling functions.

## Functions

**rebounds.fit(space, rect, options = {positionX: 0.5, positionY: 0.5, reduce: true, expand: true})**  
alias: **rebounds.showAll**

Returns scaled `rect` bounds to fit into `space`.

```javascript
rebounds.fit(
	{width: 100, height: 100},
	{width: 200, height: 50}
);
// => {width: 100, height: 25, x: 0, y: 37.5}

rebounds.fit(
	{width: 100, height: 100},
	{width: 200, height: 50},
	{reduce: false}
);
// => {width: 200, height: 50, x: -50, y: 25}
```

**rebounds.fill(space, rect, options = {positionX: 0.5, positionY: 0.5, reduce: true, expand: true})**  
alias: **rebounds.noBorder**

Returns scaled `rect` bounds to fill `space`.

```javascript
rebounds.fill(
	{width: 100, height: 100},
	{width: 200, height: 50}
);
// => {width: 400, height: 100, x: -150, y: 0}

rebounds.fill(
	{width: 100, height: 100},
	{width: 200, height: 50},
	{expand: false}
);
// => {width: 200, height: 50, x: -50, y: 25}
```

**rebounds.remain(space, rect, options = {positionX: 0.5, positionY: 0.5})**  
alias: **rebounds.noScale**

Returns non-scaled `rect` bounds repositioned against `space`.

```javascript
rebounds.remain(
	{width: 100, height: 100},
	{width: 200, height: 50}
);
// => {width: 200, height: 50, x: -50, y: 25}
```

**rebounds.stretch(space, rect, options = {positionX: 0.5, positionY: 0.5})**  
alias: **rebounds.exactFit**

Returns `rect` bounds stretched into the same size with `space`.

```javascript
rebounds.stretch(
	{width: 100, height: 100},
	{width: 200, height: 50}
);
// => {width: 100, height: 100, x: 0, y: 0}
```

**rebounds.position(space, rect, options = {positionX: 0.5, positionY: 0.5})**

Returns coordinates of `rect` repositioned against `space`.

```javascript
rebounds.position(
	{width: 100, height: 100},
	{width: 200, height: 50}
);
// => {x: -50, y: 25}

rebounds.position(
	{width: 100, height: 100, x: 50, y: 50},
	{width: 200, height: 50}
);
// => {x: 0, y: 75}

rebounds.position(
	{width: 100, height: 100},
	{width: 200, height: 50},
	{
		positionX: rebounds.LEFT, // rebounds.LEFT === 0
		positionY: rebounds.BOTTOM // rebounds.BOTTOM === 1
	}
);
// => {x: 0, y: 50}
```
