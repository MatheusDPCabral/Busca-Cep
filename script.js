
// Aplicando mascara
$('#cep').inputmask("99999-999");

let url = "" // Declarando variavel que vai armazenar a URL montada

function saveLog(log) {
	let logs = JSON.parse(localStorage.getItem('logs'))
	if (logs == null) {
		logs = []
	}
	logs.push(log)
	localStorage.setItem('logs', JSON.stringify(logs))
}

document.querySelector("#form-cep").addEventListener("submit", (e) => {
	e.preventDefault()
	console.log('submit', e.target)
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
	// alert(JSON.stringify(data));
})

document.querySelector("#form-rua").addEventListener("submit", (e) => {
	e.preventDefault()
	console.log('submit', e.target)
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
	// alert(JSON.stringify(data));
})

function pegarCidades() {
	let uf = $("#ufs-list").val()
	console.log("uf aqui", uf)
	getCidades(uf)
}

function clearTab() {
	console.log("limpando")
	$("#resultado").html("")
	$("#cep").val('')

	pegarUfs()
	$("#cidades-list").html('')
	$("#rua").val('')
}
