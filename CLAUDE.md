# Raio-X ML — Landing Page

## O que é o projeto

Landing page de vendas do produto **Raio-X ML**: uma planilha com IA que conecta na conta do Mercado Livre via API oficial, analisa todos os anúncios do vendedor em 11 critérios e entrega um relatório de qualidade com ação recomendada por IA para cada anúncio.

**Criador:** Gabriel — fundador da 360 Gestão (10 anos em e-commerce, clientes com +R$ 20M faturados em marketplaces).  
**Preço:** R$ 97,00 à vista ou 12x de R$ 10,03.  
**Plataforma de pagamento:** Hotmart — https://pay.hotmart.com/A105863616F?off=y8gic4k9  
**Contato:** contato@360gestaoindaut.com  
**CNPJ:** 49.187.531/0001-24

## Estrutura do projeto

```
index.html                          — Toda a landing page (arquivo único, sem build)
.gitignore                          — Ignora desktop.ini e Thumbs.db (arquivos que o Windows Explorer recria sozinho)
img/favicon.png                     — Favicon e apple-touch-icon (180×180 px); não segue a numeração pois não é conteúdo exibido na página

img/00 - hero pricing.png           — Screenshot do produto usado no hero e na seção de pricing
img/01 - demo.png                   — Seção demo: visão geral com SCORE de cada anúncio
img/02 - demo.png                   — Seção demo: 11 exigências + ação recomendada por IA
img/03 - demo.png                   — Seção demo: performance cruzada em 4 janelas
img/04 - solucao.png                — Seção solução: grid de screenshots da planilha (1/3)
img/05 - solucao.png                — Seção solução: grid de screenshots da planilha (2/3)
img/06 - solucao.png                — Seção solução: grid de screenshots da planilha (3/3)
img/07 - como funciona.png          — Seção como funciona: passo 1 (confirmação de compra)
img/08 - como funciona.png          — Seção como funciona: passo 2 (autorização OAuth ML)
img/09 - como funciona.png          — Seção como funciona: passo 3 (processamento da análise)
img/10 - como funciona.png          — Seção como funciona: passo 4 (planilha com relatório)
img/11 - o que voce recebe.png      — Seção o-que-voce-recebe: item 1, mockup da planilha
img/12 - o que voce recebe.png      — Seção o-que-voce-recebe: item 2, símbolo de IA / coluna AÇÃO RECOMENDADA
img/13 - o que voce recebe.png      — Seção o-que-voce-recebe: item 4, tutorial de como aplicar as ações
img/14 - bonus.jpg                  — Seção bônus: capa do PDF Prompt Universal pra Capas Premium
img/15 - bonus.jpg                  — Seção bônus: capa do PDF Guia das 11 Exigências do ML
img/16 - bonus.jpg                  — Seção bônus: thumbnail da Aula Bônus 5 Erros no Ranking
img/17 - sobre o criador.jpg        — Foto do Gabriel (seção "Sobre o criador")
```

Convenção de nome: `NN - nome da seção.ext`, numerado por ordem de exibição na página (topo → base). Quando a mesma imagem é usada em mais de uma seção (ex.: `00 - hero pricing.png`, usada no hero e no pricing), os nomes das seções aparecem juntos separados por espaço. Ao adicionar uma imagem nova, siga essa convenção e renumere a partir do ponto de inserção se necessário.

Sem dependências de Node, build ou servidor. Abre direto no browser.

## Stack técnica

- **HTML puro** — arquivo único `index.html`
- **Tailwind CSS via CDN** — configurado inline no `<script>` do `<head>`
- **Google Fonts** — Plus Jakarta Sans (headings/display) + Manrope (body)
- **JavaScript vanilla** — apenas o IntersectionObserver para animação `.reveal` on scroll

### Paleta de cores (Tailwind customizado)

| Token          | Hex       | Uso                          |
|----------------|-----------|------------------------------|
| `navy`         | `#0A1838` | Cor principal de texto/fundo |
| `navy-light`   | `#1A2950` | Fundo alternativo navy       |
| `navy-darker`  | `#06122B` | Seções escuras               |
| `orange`       | `#F08020` | Cor de destaque/CTA          |
| `orange-light` | `#FFA85C` | Variação laranja clara       |
| `orange-dark`  | `#D9651A` | Hover/sombra laranja         |
| `cream`        | `#FFF7EE` | Fundo quente suave           |
| `success`      | `#27AE60` | Ícones de check (✓)          |
| `danger`       | `#E74C3C` | Ícones de X (✗)              |
| `soft`         | `#F5F7FA` | Fundo cinza suave            |

### Tipografia

- `font-display` → Plus Jakarta Sans (h1, h2, h3, h4, `.display`)
- `font-body` → Manrope (body padrão)

### Classes utilitárias customizadas

| Classe           | Descrição                                        |
|------------------|--------------------------------------------------|
| `.btn-cta`       | Botão principal com gradiente laranja e pulse    |
| `.btn-vivo-lento`| Botão com animação suave (pulsa-suave)           |
| `.reveal`        | Elemento com fade-in on scroll via JS            |
| `.card-3d`       | Hover com leve elevação (translateY -4px)        |
| `.highlight`     | Underline laranja por background gradient        |
| `.placeholder`   | Bloco cinza para imagens ainda não inseridas     |
| `.placeholder-dark` | Idem, versão escura para fundos navy         |
| `.thought-bubble`| Card com "rabinho" para balões de pensamento     |
| `.price-strike`  | Preço riscado (pseudo-element vermelho)          |
| `.price-final`   | Preço com text-shadow laranja brilhante          |
| `.ribbon`        | Faixa "BÔNUS X" nos cards de bônus              |
| `.guarantee-seal`| Selo circular de garantia com borda verde        |
| `.recap-row`     | Linha com borda tracejada para tabela recap      |

## Seções da página (ordem)

1. **Barra topo** — gradiente laranja/navy (1px)
2. **Hero** — logo, headline, badges de benefício, mockup de laptop com screenshot
3. **Demo do produto** (`id="demo"`) — 3 cards com screenshots reais (`01-03 - demo.png`)
4. **Autoridade** (`id="autoridade"`) — R$ 20M faturados + CTA
5. **Problema (agitação)** (`id="problema"`) — balões de pensamento com frases comuns do vendedor perdido
6. **Problema (aprofundamento)** (`id="aprofundamento"`) — "você tá olhando pro lado errado"
7. **Solução** (`id="solucao"`) — o que é o Raio-X ML + grid `grid-cols-2 md:grid-cols-3` com 3 screenshots reais (`04-06 - solucao.png`)
8. **Como funciona** (`id="como-funciona"`) — 4 cards com screenshots reais (`07-10 - como funciona.png`); estrutura especial: imagem em `<div class="overflow-hidden rounded-t-2xl">`, texto em `<div class="p-6 pt-4">`, sem `overflow-hidden` no card pai (preserva badge numérico absoluto)
9. **O que você recebe** (`id="o-que-voce-recebe"`) — 4 itens principais (planilha, IA, tutorial conectar, tutorial aplicar); itens 1, 2 e 4 já têm imagem real (`11-13 - o que voce recebe.png`), item 3 (tutorial de como conectar) ainda usa placeholder
10. **Bônus** (`id="bonus"`) — 3 bônus com ribbon, fundo navy escuro, imagens reais (`14-16 - bonus.jpg`)
11. **Para quem é / não é** (`id="para-quem"`) — grid verde vs vermelho
12. **Recapitulação** (`id="recapitulacao"`) — tabela com valores riscados + total
13. **Pricing** (`id="pricing"`) — preço, CTA principal apontando para Hotmart, garantia 7 dias
14. **Duas opções** (`id="duas-opcoes"`) — comparativo sem x com o produto
15. **Sobre o criador** (`id="sobre-o-criador"`) — foto do Gabriel + bio
16. **CTA final** (`id="cta-final"`)
17. **FAQ** (`id="faq"`) — 4 perguntas com `<details>` nativo
18. **Footer** — logo, e-mail, disclaimer, CNPJ

## Pendências identificadas no código

- **Placeholder de imagem**: resta 1 placeholder na seção `o-que-voce-recebe`, item 3 ("Tutorial em vídeo de como conectar"). Os demais itens dessa seção e todas as outras seções (demo, solucao, como-funciona, bonus) já têm imagens reais.

## Convenções de desenvolvimento

- Edite apenas `index.html` — não há arquivos separados de CSS ou JS.
- O Tailwind é configurado inline no `<head>`; adicione novas cores/tokens lá se necessário.
- Animações e estilos especiais ficam no bloco `<style>` interno.
- Mantenha a estrutura de seções com `<section>` + `class="reveal"` para preservar o comportamento de scroll.
- Para CTAs que apontam para a compra, use `href="https://pay.hotmart.com/A105863616F?off=y8gic4k9" target="_blank"` (Hotmart) ou `href="#pricing"` para âncora interna.
- Cards com badge numérico absoluto (`absolute -top-4 -left-4`): nunca colocar `overflow-hidden` no card pai. Usar `<div class="overflow-hidden rounded-t-2xl">` apenas em volta da imagem.
