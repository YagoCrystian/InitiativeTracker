# 🎲 RPG Initiative Tracker

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript\&logoColor=black)

Um **gerenciador de iniciativa para combates de RPG de mesa**, desenvolvido utilizando **HTML, CSS e JavaScript puro**.

A aplicação permite organizar a ordem de iniciativa, acompanhar os pontos de vida dos personagens e controlar turnos e rounds durante o combate de forma simples e visual.

O projeto foi pensado para auxiliar mesas de **Dungeons & Dragons, Pathfinder e outros sistemas de RPG**.

---

# 🚀 Funcionalidades

✔ Adicionar combatentes com:

* Nome
* Iniciativa
* HP atual
* HP máximo
* Tipo (Player, Mob ou Invocação)

✔ Ordenação automática por iniciativa

✔ Controle completo de combate:

* Iniciar combate
* Próximo turno
* Turno anterior
* Controle de rounds

✔ Barra de vida dinâmica

✔ Remover personagens da iniciativa

✔ Resetar combate (volta ao primeiro turno e zera round)

✔ Limpar toda a iniciativa

✔ Salvamento automático com **LocalStorage**

* O combate continua salvo mesmo se a página for recarregada.

---

# 🖥️ Tecnologias Utilizadas

* **HTML5** → Estrutura da aplicação
* **CSS3** → Estilização da interface
* **JavaScript (Vanilla JS)** → Lógica do sistema
* **LocalStorage API** → Persistência de dados no navegador

---

# 📂 Estrutura do Projeto

```
initiative-tracker
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

# 🎮 Como Usar

1️⃣ Abra o arquivo:

```
index.html
```

2️⃣ Preencha os dados do combatente:

* Nome
* Iniciativa
* HP atual
* HP máximo
* Tipo

3️⃣ Clique em **Adicionar**

4️⃣ Clique em **Iniciar** para começar o combate

5️⃣ Use os botões de controle:

| Botão    | Função                           |
| -------- | -------------------------------- |
| Iniciar  | Ordena e começa o combate        |
| Próximo  | Avança para o próximo turno      |
| Anterior | Volta um turno                   |
| Resetar  | Volta para o primeiro personagem |
| Limpar   | Remove todos os combatentes      |

---

# 💡 Melhorias Futuras

Algumas ideias para evoluir o projeto:

* 🎲 Rolador de dados integrado
* ⚔️ Iniciativa automática (d20 + modificador)
* 🧙 Ícones para tipos de criatura
* ✨ Animação de turno ativo
* 📱 Melhor responsividade para celular
* 🌙 Dark mode
* 💾 Exportar / importar combates
* 🧾 Histórico de rounds

---

# 👨‍💻 Autor

**Yago Teixeira**

Estudante de **Engenharia da Computação** e desenvolvedor em formação, com interesse em desenvolvimento **FullStack**.

Tecnologias de interesse:

* C#
* JavaScript
* Python
* SQL
* Desenvolvimento Web

---

# 📜 Licença

Este projeto está sob a licença **MIT**.

Sinta-se livre para usar, modificar e contribuir.
