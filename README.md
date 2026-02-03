# 💸 Currency Converter
Um conversor de moedas dinâmico que permite transformar valores em Real (BRL) para diversas moedas estrangeiras, como Dólar, Euro, Libra, Peso Argentino e Iene.

# 🚀 Sobre o Projeto

O foco deste projeto foi aplicar conceitos de lógica de programação para resolver um problema real: a conversão de valores monetários com precisão visual e gramatical de acordo com a localidade.

Moedas Suportadas:
🇺🇸 Dólar Americano (USD)

🇪🇺 Euro (EUR)

🇬🇧 Libra Esterlina (GBP)

🇦🇷 Peso Argentino (ARS)

🇯🇵 Iene Japonês (JPY)

# 🛠️ Tecnologias e Conceitos Aplicados

JavaScript (Lógica e Internacionalização)
Intl.NumberFormat: O ponto alto do projeto. Utilizado para formatar os números automaticamente como moeda, inserindo símbolos (R$, US$, €, etc.) e separadores de milhar/decimal corretos para cada país.

switch/case: Estrutura condicional utilizada para gerenciar a troca de moedas e imagens de forma organizada.

Event Listeners: O JavaScript "escuta" quando o usuário clica no botão ou altera a moeda no seletor para atualizar a interface em tempo real.

Manipulação de Atributos: Troca dinâmica do src das imagens e do texto de labels.

CSS e UI/UX
Flexbox: Centralização total do aplicativo na tela e organização interna dos cards de moeda.

Design Limpo: Uso da fonte Roboto e uma paleta de cores baseada em tons de roxo para uma interface moderna e agradável.

Feedback ao usuário: Efeitos de opacity no hover e active para indicar interatividade nos botões.

# 💡 Como Funciona o Código
O fluxo principal do projeto segue estes passos:

O usuário insere o valor e escolhe a moeda de destino.

Ao clicar em "Converter", a função convertValues() captura o valor do input.

O valor é dividido pela taxa de câmbio definida.

O objeto Intl.NumberFormat entra em ação, transformando o número puro em uma string formatada (ex: de 10 para US$ 10,00).

A interface é atualizada instantaneamente.

# ✒️ Autor
Projeto desenvolvido por Caio Almeida.