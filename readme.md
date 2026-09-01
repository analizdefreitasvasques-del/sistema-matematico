# 🧮 Sistema de Cálculos Matemáticos e Bhaskara (Node.js)

![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green?style=flat-square&logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

Um projeto simples, modular e eficiente desenvolvido em **Node.js** para execução de operações aritméticas fundamentais e resolução de equações do 2º grau através da **Fórmula de Bhaskara**.

---

## 📌 Sobre o Projeto

O objetivo deste projeto é demonstrar a **modularização em JavaScript** utilizando a especificação CommonJS (`require` / `module.exports`). O sistema é divido em submódulos independentes para garantir reuso, facilidade de manutenção e clareza no código.

### 🚀 Funcionalidades Principais

- **Operações Básicas (`calculadora.js`)**:
  - Soma (`+`)
  - Subtração (`-`)
  - Multiplicação (`*`)
  - Divisão (`/`) com validação contra divisão por zero.
- **Equação do 2º Grau (`bhaskara.js`)**:
  - Cálculo automático do **Delta** ($\Delta = b^2 - 4ac$).
  - Validação do coeficiente $a$ (deve ser diferente de zero).
  - Tratamento para deltas negativos (sem raízes reais).
  - Cálculo preciso das raízes $X_1$ e $X_2$.

---

## 📁 Estrutura do Projeto

```text
.
├── calculadora.js    # Módulo contendo as operações aritméticas básicas
├── bhaskara.js       # Módulo para cálculo de equações do 2º grau
└── index.js          # Módulo principal para teste e execução do sistema