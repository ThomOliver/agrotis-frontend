export type Propriedade = {
  id: number
  nome: string
}

export type Laboratorio = {
  id: number
  nome: string
}

export type FormData = {
  id?: number
  nome: string
  dataInicial: string
  dataFinal: string
  propriedades: Propriedade[]
  laboratorio: Laboratorio
  observacoes: string
  codigo?:number;
}
