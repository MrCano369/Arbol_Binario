class BST{
	constructor(){
		this._raiz = null;
	}
	get raiz(){return this._raiz;}
	set raiz(v){this._raiz = v;}

	agregar(nuevo, r = this._raiz){
		if (r) {
			if (nuevo.codigo < r.codigo) {
				if (r.hI) {
					this.agregar(nuevo, r.hI);
				}else{
					r.hI = nuevo;
				}
			}else{
				if (r.hD) {
					this.agregar(nuevo, r.hD);
				}else{
					r.hD = nuevo;
				}
			}
		}else{
			this._raiz = nuevo;
		}
	}

	buscar(codigo, r = this._raiz){
		if (r && codigo != undefined) {
			if (codigo < r.codigo) {
				return this.buscar(codigo, r.hI);
			}else if(codigo > r.codigo){
				return this.buscar(codigo, r.hD);
			}else{
				return r;
			}
		}else{
			return null;
		}
	}

	preOrder(r = this._raiz){
		console.log(r.codigo);
		if (r.hI) {
			this.preOrder(r.hI);
		}
		if (r.hD) {
			this.preOrder(r.hD);
		}
	}

	inOrder(r = this._raiz){
		if (r.hI) {
			this.inOrder(r.hI);
		}
		console.log(r.codigo);
		if (r.hD) {
			this.inOrder(r.hD);
		}
	}

	postOrder(r = this._raiz){
		if (r.hI) {
			this.postOrder(r.hI);
		}
		if (r.hD) {
			this.postOrder(r.hD);
		}
		console.log(r.codigo);
	}
}