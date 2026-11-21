// note: i wrote this at 12:43am so if its bad then deal with it
/**
 * @file game window js
 * @description js directly in game window
 * @author me
 */

const stdout = document.getElementById('stdout');
const stdin = document.getElementById('stdin');
// hehe std
const prompt = document.getElementById('prompt');

// force input focus
document.addEventListener('click', () => {
  stdin.focus();
});

// input ig
stdin.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const rawin = stdin.value.trim();
		if (!rawin) return
		line(`${prompt.textContent} ${rawin}`);
		stdin.value = '';
		proc(rawin); // todo
  }
})

function line(text) {
	const linediv = document.createElement('div');
	linediv.className = 'line';
	linediv.textContent = text;
	stdout.appendChild(linediv);
	window.scrollTo(0, document.body.scrollHeight); // autoscroll
}

// todo: link to command data
// also its right about 1am now