# Raio-X ML — Landing Page

## O que é o projeto

Landing page de vendas do produto **Raio-X ML**: uma planilha com IA que conecta na conta do Mercado Livre via API oficial, analisa todos os anúncios do vendedor em 11 critérios e entrega um relatório de qualidade com ação recomendada por IA para cada anúncio.

**Criador:** Gabriel — fundador da 360 Gestão (10 anos em e-commerce, clientes com +R$ 20M faturados em marketplaces).  
**Preço:** R$ 97,00 à vista ou 12x de R$ 9,90.  
**Plataforma de pagamento:** Kiwify.  
**Contato:** contato@360gestaoindaut.com

## Estrutura do projeto

```
index.html        — Toda a landing page (arquivo único, sem build)
img/favicon.png   — Favicon e apple-touch-icon (180×180 px)
img/plan_001.png  — Screenshot do produto usado no hero e na seção de pricing
img/autor.jpg     — Foto do Gabriel (seção "Quem sou eu")
```

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
3. **Demo do produto** — 3 cards com placeholders de screenshot
4. **Autoridade** — R$ 20M faturados + CTA
5. **Problema (agitação)** — balões de pensamento com frases comuns do vendedor perdido
6. **Problema (aprofundamento)** — "você tá olhando pro lado errado"
7. **Solução** — o que é o Raio-X ML + grid de 4 entregáveis
8. **Como funciona** — 4 passos numerados com placeholders
9. **O que você recebe** — 4 itens principais (planilha, IA, tutoriais)
10. **Bônus** — 3 bônus com ribbon, fundo navy escuro
11. **Para quem é / não é** — grid verde vs vermelho
12. **Recapitulação** — tabela com valores riscados + total
13. **Pricing** — seção `id="pricing"`, preço, CTA principal, garantia 7 dias
14. **Duas opções** — comparativo sem x com o produto
15. **Sobre o criador** — foto do Gabriel + bio
16. **CTA final**
17. **FAQ** — 4 perguntas com `<details>` nativo
18. **Footer** — logo, e-mail, disclaimer, CNPJ

## Pendências identificadas no código

- **Placeholders de imagem**: todos os elementos `.placeholder` e `.placeholder-dark` nas seções de demo, passos, itens e bônus precisam ser substituídos por `<img>` reais.
- **Link do CTA principal**: o `<a href="#">` no botão de compra precisa receber a URL da Kiwify.
- **CNPJ**: no footer está `CNPJ: a inserir` — precisa ser preenchido.
- **FAQ — typo**: a primeira pergunta contém o fragmento `"Isolate is safe?"` que é texto residual e deve ser removido. O texto correto da pergunta deve ser apenas `"Como a planilha conecta na minha conta do ML? É seguro?"`.

## Convenções de desenvolvimento

- Edite apenas `index.html` — não há arquivos separados de CSS ou JS.
- O Tailwind é configurado inline no `<head>`; adicione novas cores/tokens lá se necessário.
- Animações e estilos especiais ficam no bloco `<style>` interno.
- Mantenha a estrutura de seções com `<section>` + `class="reveal"` para preservar o comportamento de scroll.
- Para CTAs que apontam para a compra, use `href="#pricing"` (âncora interna) ou a URL da Kiwify quando disponível.
