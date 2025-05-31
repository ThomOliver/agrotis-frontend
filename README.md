# Teste Técnico – AGROTIS Agroinformática


## Descrição do Projeto

O sistema permite:

- Cadastrar registros com:
  - Nome
  - Intervalo de datas
  - Seleção múltipla de propriedades
  - Seleção de laboratório
  - Observações opcionais
- Visualizar os cadastros salvos em uma tela de listagem
- Persistir os dados em memória (estado local)
- Exibir mensagens de sucesso após o envio do formulário

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/ThomOliver/agrotis-frontend.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o projeto em ambiente de desenvolvimento

```bash
npm run dev
```

### 4. Acesse no navegador

```
http://localhost:5173
```

---

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Material UI
- Styled Components
- React Hook Form
- Zod
- React Router DOM
- Dayjs
- Axios
- Notistack

---

## Estrutura de pastas

```
├── components/            # Componentes reutilizáveis (inputs, headers, etc)
├── context/               # Context API (FormContext, SnackbarContext)
├── hooks/                 # Custom hooks (ex: fetch de opções)
├── pages/                 # Páginas principais (Formulário, Listagem)
├── schemas/               # Validações com Zod
├── styles/                # Styled Components globais
├── App.tsx
├── main.tsx
```

---

## Requisitos

- Uso de React
- Uso de TypeScript
- Uso de Styled Components
- Uso de React Hook Form
- Uso de Context API
- Uso de hooks e custom hooks
- Componentes base com Material UI
- Navegação entre formulário e listagem
- Consumo de endpoints para popular selects
- Fidelidade ao protótipo
- Payload conforme especificado

---

## Exemplo de payload armazenado

```json
{
  "nome": "Jon Doe",
  "dataInicial": "2022-02-02T17:41:44Z",
  "dataFinal": "2022-02-02T17:41:44Z",
  "propriedades": [
    { "id": 1, "nome": "Fazenda Agrotis" }
  ],
  "laboratorio": {
    "id": 3,
    "nome": "Osborne Agro"
  },
  "observacoes": "Observação exemplo de teste"
}
```

## Desenvolvido por

Thomas Beira – [github.com/ThomOliver](https://github.com/ThomOliver)