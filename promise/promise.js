



let p = new Promise((resolver, project) => {
	let deuCerto = false

	if(deuCerto){
		resolve('Retorne ok')

	}else {
		reject ({
			codigo: 333,
			msg: 'Esta é o erro de código 33'
		})
	}
})
 


p.then ((r) => {
	console.log(r)
}).catch((e) => {
	console.log(console.log("codigo erro: " + e.codigo)
	console.log(msg))
});
