function now(caller) {
	const now = new Date()
	console.log(`${caller} ===> ${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`)
}

async function g1(i) {
	now('g1 - '+i)
}

function g2(i) {
	now('g2 - '+i)
}

function g3(i) {
	now('g3 - '+i)
}

async function gg(i) {
	await g1(i)
	g3(i)
	g2(i)	
}

for (let i = 1; i <= 15; i++) {
	gg(i)	
}
