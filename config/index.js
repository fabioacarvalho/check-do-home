new Vue({
    el: '#app',
    data: {
        newTarget: false,
        qd1: [],
        qd2: [],
        qd3: [],
        qd4: [],
        tarefa: {
            nome: '',
            desc: '',
            valorSelecionado: '',
            qdSelecionado: '',
            status: false
        },
        status: [
            {qd: 1, classe: 'Decida Quando Fazer'},
            {qd: 2, classe: 'Faça Imediatamente'},
            {qd: 3, classe: 'Faça Mais Tarde'},
            {qd: 4, classe: 'Delegue Para Outra Pessoa'},
        ],
        qd: '',
        info: false,

    },
    methods: {
        novaTarefa() {
            this.newTarget = true
            
            this.tarefa.nome = ''
            this.tarefa.desc = ''
            this.tarefa.valorSelecionado = ''
        },
        adicionarNovaTarefa() {
            
            let item = this.status.filter(v => {
                if(v.classe == this.tarefa.valorSelecionado) {
                    this.qdSelecionado = v.qd
                }
            })
            
            const order = {
                target: this.tarefa.nome,
                descricao: this.tarefa.desc,
                status: this.tarefa.status,
                local: this.tarefa.valorSelecionado,
                nqd: this.qdSelecionado
            }

            if(this.qdSelecionado == 1) {
                this.qd1.push(order)
            } else if (this.qdSelecionado == 2) {
                this.qd2.push(order)
            } else if (this.qdSelecionado == 3) {
                this.qd3.push(order)
            } else if (this.qdSelecionado == 4) {
                this.qd4.push(order)
            }

            this.newTarget = false
            this.info = true

            this.tarefa.nome = ''
            this.tarefa.desc = ''
            this.tarefa.valorSelecionado = ''

        },
        alertInfo() {
            this.info = false
        },
        concluirTarefa(nome, numero) {

            if(numero == 1) {
                let item = this.qd1.filter(v => {
                    if(nome == v.target) {
                        this.qd1.splice(nome, 1)
                    } 
                })
            } else if(numero == 2) {
                let item = this.qd2.filter(v => {
                    if(nome == v.target) {
                        this.qd2.splice(nome, 1)
                    } 
                })
            } else if(numero == 3) {
                let item = this.qd3.filter(v => {
                    if(nome == v.target) {
                        this.qd3.splice(nome, 1)
                    } 
                })
            } else if(numero == 4) {
                let item = this.qd4.filter(v => {
                    if(nome == v.target) {
                        this.qd4.splice(nome, 1)
                    } 
                })
            } else {
                alert("Item não encontrado...")
            }          
        }
    },
})