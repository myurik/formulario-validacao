# 📋 Formulário de Cadastro com Validação

Um formulário de criação de conta completo, feito com **HTML, CSS e JavaScript puro**. Inclui upload de foto de perfil com preview; máscaras de CPF e telefone em tempo real; e validações reais para todos os campos, incluindo o cálculo dos dígitos verificadores do CPF.

![Preview do formulário](screenshots/print-form.png)
![Mensagem de sucesso](screenshots/print-success.png)

## ✨ Funcionalidades

- Upload de foto de perfil (câmera ou galeria) com preview circular
- Máscaras automáticas de CPF (`000.000.000-00`) e telefone (`(00) 00000-0000`) enquanto o usuário digita feitas com regex
- Botão de mostrar/esconder senha (e confirmação de senha) com troca de ícone
- Validação completa de todos os campos: nome, e-mail, CPF (com dígito verificador), telefone, idade mínima de 18 anos, força da senha e confirmação
- Validação em tempo real: depois do primeiro erro, o campo revalida a cada tecla digitada
- Mensagem de erro específica por campo, sem recarregar a página
- Mensagem de sucesso estilizada ao final do cadastro
- Layout responsivo, adaptado para dispositivos móveis
## 🛠️ Tecnologias usadas

- **HTML5** — estrutura semântica do formulário
- **CSS3** — variáveis (custom properties), Flexbox, media queries, pseudo-classes (`:focus-within`, `:not()`)
- **JavaScript** — manipulação do DOM, regex, `FileReader`/`URL.createObjectURL`, eventos de formulário, `preventDefault`
## 🚀 Como executar

1. Clone este repositório:
```bash
   git clone https://github.com/myurik/formulario-validacao.git
```
2. Abra o arquivo `index.html` no seu navegador
   Não há dependências externas — é só HTML, CSS e JS puro.

## 📚 O que pratiquei neste projeto

Esse foi o segundo projeto da minha retomada de prática em frontend, com foco em formulários e validação de dados. Alguns pontos que reforcei:

- Expressões regulares (regex) para validar formato de e-mail, CPF e telefone
- Algoritmo de validação de CPF com cálculo dos dígitos verificadores
- Máscaras de input formatando o valor em tempo real conforme o usuário digita
- `FileReader` e `URL.createObjectURL` para preview de imagem antes do envio
- Manipulação de formulários: `preventDefault()`, evento `submit`, `blur` e `input`
- Princípio DRY aplicado com uma função genérica de revalidação (`validarEmTempoReal`) reutilizada em todos os campos
- Cálculo de datas para validar idade mínima
- Debug de um bug de compatibilidade do Safari com arquivos sincronizados via iCloud, e como contorná-lo trocando de abordagem de leitura de arquivo
- Responsividade com media queries e ajuste fino de espaçamento
## 👤 Autor

Feito por [Matheus Yuri](https://github.com/myurik)
 
---
 
---

# 📋 Registration Form with Validation

A complete account creation form built with **plain HTML, CSS, and JavaScript**. Includes profile photo upload with live preview, real-time CPF and phone number masks, and real validation for every field — including the CPF check-digit calculation.

![Form preview](screenshots/preview.png)
![Success message](screenshots/success.png)

## ✨ Features

- Profile photo upload (camera or gallery) with live circular preview
- Automatic masks for CPF (`000.000.000-00`) and phone (`(00) 00000-0000`) as you type
- Show/hide password toggle (for both password fields), with icon swap
- Full validation for every field: name, email, CPF (with check digits), phone, minimum age of 18, password strength, and password match
- Real-time validation: once a field has shown an error, it re-checks on every keystroke
- Field-specific error messages, no page reload
- Styled success message once signup goes through
- Responsive layout for mobile devices
## 🛠️ Tech stack

- **HTML5** — semantic form structure
- **CSS3** — custom properties, Flexbox, media queries, pseudo-classes (`:focus-within`, `:not()`)
- **JavaScript** — DOM manipulation, regex, `FileReader`/`URL.createObjectURL`, form events, `preventDefault`
## 🚀 Running it

1. Clone this repo:
```bash
   git clone https://github.com/myurik/formulario-validacao.git
```
2. Open `index.html` in your browser
   No external dependencies — just plain HTML, CSS, and JS.

## 📚 What I practiced here

This was project #2 in my frontend refresher, focused on forms and data validation. Some things I got more comfortable with:

- Regex for validating email, CPF, and phone formats
- CPF validation algorithm with check-digit calculation
- Input masks formatting values live as you type
- `FileReader` and `URL.createObjectURL` for previewing an image before upload
- Form handling: `preventDefault()`, the `submit` event, `blur` and `input`
- DRY principle via a generic revalidation function (`validarEmTempoReal`) reused across every field
- Date math to validate minimum age
- Debugging a Safari compatibility quirk with iCloud-synced files, and working around it by switching how the file gets read
- Responsiveness with media queries and fine-tuning spacing
## 👤 Author

Made by [Matheus Yuri](https://github.com/myurik)