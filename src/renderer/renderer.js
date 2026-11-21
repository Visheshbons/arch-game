// note: i wrote this at 12:43am so if its bad then deal with it
/**
 * @file game window js
 * @description js directly in game window
 * @author me
 */

// elements
const stdout = document.getElementById('stdout');
const stdin = document.getElementById('stdin');
// hehe std
const prompt = document.getElementById('prompt');

// data
let hostname = 'archiso'
let username = 'root'
let cwd = '/home/archiso'
let promptstr = `${username}@${hostname} ${cwd === '/home/archiso' ? '~' : cwd} ${username === 'root' ? '#' : '$'}`;
prompt.textContent = promptstr;

// get prompt
function getPrompt() {
	let promptstr = `${username}@${hostname} ${cwd === '/home/archiso' ? '~' : cwd} ${username === 'root' ? '#' : '$'}`;
	return promptstr;
}

// force input focus
document.addEventListener('click', () => {
  stdin.focus();
});

// input ig
stdin.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const rawin = stdin.value.trim();
		// if (!rawin) return
		line(`${getPrompt()} ${rawin}`);
		stdin.value = '';
		proc(rawin); // wip
  }
	// ctrl c
	else if (e.key === 'c' && e.ctrlKey) {
    const rawin = stdin.value.trim();
		line(`${getPrompt()} ${rawin}^C`);
		stdin.value = '';
	}
})

function line(text) {
	const linediv = document.createElement('div');
	linediv.className = 'line';
	linediv.textContent = text;
	stdout.appendChild(linediv);
	window.scrollTo(0, document.body.scrollHeight); // autoscroll
}

function proc(input) {
	// split
	const args = input.split(' ');
	const cmd = args[0];
	const tail = args.slice(1)
	// this is gonna be so bad i just know it (1:12am rn)

	// run ig
	//,todo: connetc properly to engine
	switch (cmd) {
		case 'help':
			line(`skill issue`)
			break;
		
		case 'clear':
			stdout.innerHTML = '';
			break;
		
		case 'echo':
			line(tail.join(' '));
			break;

		case 'whoami':
			line(username);
			break;

		case 'hostname':
			line(hostname);
			break;

		case 'pwd':
			line(cwd);
			break;

		case '':
			break;

		default:
			line(`command not found: ${cmd}`);
			break;
	}
}