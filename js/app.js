const body = document.querySelector('body')

document.addEventListener('mousemove', e => {
	const heart = document.createElement('span')

	const x = e.offsetX
	const y = e.offsetY

	heart.style.left = x + 'px'
	heart.style.top = y + 'px'

	const size = 20 + (Math.random() * 100)

	heart.style.width = size + 'px'
	heart.style.height = size + 'px'

	body.appendChild(heart)

	setTimeout(() => {
		heart.remove()
	}, 2000)
})