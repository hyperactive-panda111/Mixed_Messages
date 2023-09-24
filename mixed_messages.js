const messages = [
	"Good morning",
	"Bonjour!",
	"Guten Morgen!",
	" Buongiorno!",
	"Доброе утро!",
	"早上好!",
	"おはようございます",
	"안녕하세요",
	"सुप्रभात!",
	"Bom dia!",
];

message = Math.floor(Math.random() * messages.length);
console.log(`Index selected : ${message}`);
console.log(messages[message]);
