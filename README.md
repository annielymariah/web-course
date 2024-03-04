<h1 align="center">HTML | HyperText Markup Language</h1>


Esta branch foi criada para documentar e compartilhar o conhecimento que adquiri sobre HTML. Para meu aprendizado, utilizei a documentação da Mozilla Developer Network (MDN), além de participar do Curso de HTML oferecido por Dimitri Teixeira através de seu canal no YouTube, Programação Web.

### Índice
1. [Introdução ao HTML](#introdução-ao-html)
2. [Fundamentos da Estrutura HTML](#fundamentos-da-estrutura-html)
   - [O Cabeçalho (`<head>`)](#o-cabeçalho-head)
   - [O Corpo (`<body>`)](#o-corpo-body)
3. [Principais Elementos e Tags](#principais-elementos-e-tags)
   - [Títulos (`<h1>` até `<h6>`)](#títulos)
   - [Parágrafos (`<p>`)](#parágrafos)
   - [Formatação de Texto](#formatação-de-texto)
   - [Citações (`<abbr>`, `<address>`, `<blockquote>`, `<cite>`, `<q>`)](#citações)
   - [Imagens (`<img>`)](#imagens)
   - [Tabelas (`<table>`, `<tr>`, `<td>`)](#tabelas)
   - [Listas (Ordenadas e Não Ordenadas)](#listas)
   - [Links (`<a>`)](#links)
   - [IFrames (`<iframe>`)](#iframes)
   - [Formulários (`<form>`)](#formulários)
   - [Incorporação de Mídia (Áudio e Vídeo)](#incorporação-de-mídia)
   - [Divisões (`<div>`)](#divisões)
4. [HTML:5 Semântico](#html5-semântico)
   - [Header (`<header>`)](#header-header)
   - [Main (`<main>`)](#main-main)
   - [Section (`<section>`)](#section-section)
   - [Article (`<article>`)](#article-article)
   - [Figure (`<figure>`)](#figure-figure)
   - [Footer (`<footer>`)](#footer-footer)


## Introdução ao HTML 
HTML ou HyperText Markup Language é uma linguagem de marcação que tem como objetivo se tornar o escopo da construção de páginas web, efetuando a estruturação básica do código visual e delimitando os itens a serem estilizados posteriormente por CSS e programados via quaisquer linguagem de programação (Python, Javascript, dentre outras). 

## Fundamentos da Estrutura HTML

A estrutura de um documento HTML é composta fundamentalmente por duas partes principais: `<head>` e `<body>`. Cada uma desempenha papéis distintos na construção de uma página web, oferecendo ao navegador as informações necessárias para renderizar o conteúdo de maneira apropriada.

Além disso, é crucial incluir a declaração `<!DOCTYPE html>` no início de qualquer documento HTML. Essa prática tem raízes históricas, onde as páginas web eram diferenciadas com base no tipo de linguagem utilizada. A inclusão dessa declaração era necessária para garantir a correta interpretação do conteúdo.

Páginas mais antigas podem requerer ajustes para se alinharem aos padrões modernos. A utilização do `<!DOCTYPE html>` permanece como uma prática recomendada para garantir a consistência e a conformidade com os padrões web atuais.

### O Cabeçalho (`<head>`)
Seção onde conterá os metadados da sua página web, sendo não diretamente visíveis a página web e si. 

- `<title>`: Define o título da página, que é exibido na aba do navegador.
- `<meta>`: Fornece metadados sobre o HTML, como o conjunto de caracteres usad(charset), a descrição da página, e palavras-chave para motores de busca.
- `<link>`: Utilizado para conectar recursos externos como folhas de estilo CSS e ícones de favoritos.
- `<style>`: Permite incluir CSS diretamente no documento HTML.
- `<script>`: Referencia ou inclui código JavaScript que pode ser executado pelo navegador.

Exemplo de head: 
```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Aqui será inserida uma descrição do site">
    <meta name="keywords" content="html,web">
    <meta name="author" content="Nome do criador">
    <title>Página Web</title>
</head>
```
### O Corpo (`<body>`)

 A seção `<body>` é onde o conteúdo visível da página web é colocado. É aqui que textos, imagens, vídeos, jogos, e outros elementos interativos são definidos para serem apresentados ao usuário. Cada elemento dentro do `<body>` pode ser estilizado usando CSS e manipulado com JavaScript.

 ```html
 <body>
    <h1>Título X</h1>
    
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium eveniet ducimus quis, blanditiis consequatur laboriosam mollitia, quam, dolor hic illo? Deserunt nobis cupiditate aut exercitationem quod deleniti odio modi.</p>
</body>
 ```

## Principais Elementos e Tags
Nessa seção estarão todos os elementos aprendidos por mim até o momento.

### Títulos

`<h1>` até `<h6>` representam títulos de diferentes níveis, indicando a importância e a estrutura da informação na página. Não utiliza-se para diferenciar tamanhos, afinal pode ser modificado por meio do CSS.

Exemplo:

```html
<h1>Isso é um título h1</h1>
<h2>Isso é um título h2</h2>
<h3>Isso é um título h3</h3>
<h4>Isso é um título h4</h4>
<h5>Isso é um título h5</h5>
<h6>Isso é um título h6</h6>
```

### Parágrafos

`<p>` define um parágrafo.

Exemplo:

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint maxime aut, dolores, similique voluptate fugiat soluta corporis hic iste quisquam earum. Error vel tempore delectus inventore! Autem, doloremque fuga.</p>
```

### Formatação de Texto

Diversas tags são usadas para formatação de texto, como `<b>`, `<i>`, `<strong>`, `<u>`, `<small>`, `<del>`, `<br>`, `<sub>`, `<sup>`, e `<mark>`.

Exemplo:

<p>Isso é um parágrafo, e isto: <code>é um bloco de código</code></p>

```html
<p>Isso é um parágrafo, e isto: <code>é um bloco de código</code></p>
```
<p>Texto a seguir em: <b>negrito</b></p>

```html
<p>Texto a seguir em: <b>negrito</b></p>
```
<p>Texto a seguir em: <i>Itálico</i></p>

```html
<p>Texto a seguir em: <i>Itálico</i></p>
```
<p>Texto enfatizado: <strong>Strong</strong></p>

```html
<p>Texto enfatizado: <strong>Strong</strong></p>
```
<p>Texto a seguir em: <u>Sublinhado</u></p>

```html
<p>Texto a seguir em: <u>Sublinhado</u></p>
```
<p>Texto a seguir em: <small>Small</small></p>

```html
<p>Texto a seguir em: <small>Small</small></p>
```

<p>Texto a seguir em: <del>Deletado/Riscado</del></p>

```html
<p>Texto a seguir em: <del>Deletado/Riscado</del></p>
```

<p>Pular <br> a linha</p>

```html
<p>Pular <br> a linha</p>
```

<p><sub>Abaixo</sub> e <sup>Acima</sup></p>

```html
<p><sub>Abaixo</sub> e <sup>Acima</sup></p>
```

<p><mark>Texto marcado</mark></p>

```html
<p><mark>Texto marcado</mark></p>
```
### Citações

Tags como `<abbr>`, `<address>`, `<blockquote>`, `<cite>`, e `<q>` são usadas para diferentes tipos de citações e referências.

Exemplo:

<p>Estamos aprendendo <abbr title="Hyper Text Markup Language">HTML</abbr></p>

```html
<p>Estamos aprendendo <abbr title="Hyper Text Markup Language">HTML</abbr></p>
```

<p><address>rua X, Y, Z</address></p>

```html
<p><address>rua X, Y, Z</address></p>
```

<p><blockquote>Lorem ipsum dolor</blockquote>

```html
<p><blockquote>Lorem ipsum dolor</blockquote>
```

<p>No filme <cite>Rua do medo</cite>, fulano disse: <q>AAAAAAAAAAAAAAAAAA</q></p>

```html
<p>No filme <cite>Rua do medo</cite>, fulano disse: <q>AAAAAAAAAAAAAAAAAA</q></p>
```

### Imagens

`<img>` é usada para incorporar imagens na página, podendo especificar dimensões e texto alternativo.

Exemplo:

<img src="archives/carro.jpg" width="100" alt="Carro" height="50">
<img src="https://avatars.githubusercontent.com/u/95944772?v=4" width="1000" alt="Imagem tirada da internet" height="100">

```html
<img src="img/carro.jpg" width="100" alt="Carro" height="50">
<img src="https://avatars.githubusercontent.com/u/95944772?v=4" width="1000" alt="Imagem tirada da internet" height="100">
```

### Tabelas

`<table>`, `<tr>`, `<th>`, e `<td>` são utilizadas para criar tabelas.

Exemplo:

<table>
    <tr> 
        <th>Nome</th>
        <th>Idade</th>
        <th>Peso</th>
    </tr>
    <tr>
        <td>Anniely</td>
        <td>16</td>
        <td>50kg</td>
    </tr>
</table>

````html
<table>
    <tr> 
        <th>Nome</th>
        <th>Idade</th>
        <th>Peso</th>
    </tr>
    <tr>
        <td>Anniely</td>
        <td>16</td>
        <td>50kg</td>
    </tr>
</table>
````

### Listas (Ordenadas e Não Ordenadas)

`<ul>` para listas não ordenadas e `<ol>` para listas ordenadas, com `<li>` para cada item da lista.

Exemplo:

<ul>
    <li>Oi</li>
    <li>Tchau</li>
</ul>

```html
<ul>
    <li>Oi</li>
    <li>Tchau</li>
</ul>
```

<ol>
    <li>Um</li>
    <li>Dois</li>
</ol>

```html
<ol>
    <li>Um</li>
    <li>Dois</li>
</ol>
```

### Links

`<a>` define um hyperlink, podendo ser usado para linkar para outra página, um endereço de email, entre outros.

Exemplo:


- <a href="https://github.com/annielymariah">Meu GitHub</a>

```html
<a href="https://github.com/annielymariah">Meu GitHub</a>
```
- <a href="https://github.com/annielymariah" target="_blank">Meu GitHub em nova aba</a>

```html
<a href="https://github.com/annielymariah" target="_blank">Meu GitHub em nova aba</a>
```
- <a href="html\index.html">Página elaborada</a>

```html
<a href="html\index.html">Página no arquivo</a>
```

### IFrames

`<iframe>` insere uma página dentro da sua página web, como um mini navegador. Atualmente, não é mais tão utilizado devido o advento do CSS.
- Em vídeos do Youtube, você pode incorporar vídeos, só copiando o código que eles disponibilizam.

```html
<iframe src="html/index.html">Página principal</iframe>
```

- Utilizando hyperlinks, você conseguiria abrir uma página web dentro do seu Iframe.

```html
<a href="main_project/index.html" target="meu-iframe">Página elaborada</a>

<iframe src="" name="meu-iframe" title="Iframe">Página principal</iframe>
```

### Formulários

Os formulários em HTML permitem a coleta de dados, como informações de contato, feedback ou qualquer outra entrada relevante. A tag `<form>` é usada para criar um formulário, enquanto elementos como `<input>`, `<select>`, e `<textarea>` são utilizados para diferentes tipos de campos.

Exemplo de formulário:

```html
<body action="arquivo.php" method="post"> <!--Post é um método HTTPs de envio de dados-->

    <h1>Formulário de Cadastramento</h1>
    <p>Insira seus dados para realização do seu cadastro na plataforma.</p>

    <form>
        <label for="text_name">Nome:</label>
        <input id="text_name" type="text" placeholder="Insira seu primeiro nome">

        <label for="text_lastname">Sobrenome:</label>
        <input id="text_lastname" type="text" placeholder="Insira seu último nome" required>

        <label for="email">E-mail:</label>
        <input id="email" type="email" placeholder="Insira seu email" required>

        <label for="password">Senha:</label>
        <input id="password" type="password" placeholder="Insira sua senha" required>

        <input type="submit" value="Enviar cadastro">
    </form>
</body>
```

- __Radio (Radio button):__ Utilizado para escolhas exclusivas dentro de um grupo.

```html
<input type="radio" id="opcao1" name="opcao1" value="1">
<label for="opcao1">Opção marcável</label>
```
- __Checkbox (Checkbox):__  Permite a seleção múltipla de opções.

```html
<input type="checkbox" id="opcao1" name="opcao1" value="1">
<label for="op1">Opção marcável 1</label>

<input type="checkbox" id="opcao2" name="opcao2" value="2">
<label for="op1">Opção marcável 2</label>
```
   

- __Text (Campo de texto):__ Cria uma caixa de texto para entrada de texto.

```html
<input id="text" type="text" name="texto" placeholder="Insira um texto">
```

- __Date (Campo de data):__ Facilita a seleção de datas.

```html
<input type="date" name="data_lancamento">
```


- __Number (Campo numérico):__ Limita a entrada a valores numéricos.



```html
<input type="number" name="quantidade" min="1" max="100">
```

- __Submit (Botão de envio):__ Submete o formulário quando pressionado.


```html
<input type="submit" value="Enviar">
```

- __Textarea (Área de texto):__ Permite a entrada de um texto mais extenso, como comentários ou mensagens. Diferente do campo de texto `(<input type="text">)`, o `<textarea>` pode acomodar múltiplas linhas.

```html
<textarea id="mensagem" name="mensagem" rows="4" cols="50" placeholder="Digite sua mensagem aqui"></textarea>
```

- __Select (Caixa de seleção):__ Cria um menu suspenso que permite ao usuário escolher uma das opções pré-definidas. É útil para listas de opções onde a entrada livre do usuário não é desejada.

```html
<select name="opcoes">
  <option value="opcao1">Opção 1</option>
  <option value="opcao2">Opção 2</option>
  <option value="opcao3">Opção 3</option>
</select>
```
    
### Incorporação de Mídia (Áudio e Vídeo)

- __Áudio:__ Permite a incorporação de conteúdo de áudio em uma página web. O elemento `<audio>` pode ser usado para reproduzir um arquivo de áudio. É possível controlar a reprodução através de atributos como controls, que exibe os controles padrão de reprodução.

```html
<audio controls>
  <source src="caminho_para_o_arquivo_de_audio.mp3" type="audio/mpeg">
  Seu navegador não suporta o elemento de áudio.
</audio>
```

- __Vídeo:__ Similar ao elemento de áudio, o elemento `<video>` é usado para incorporar conteúdo de vídeo em uma página. Também suporta o atributo controls, além de outros como width e height para definir as dimensões do vídeo.

```html
<video controls width="250">
  <source src="caminho_para_o_arquivo_de_video.mp4" type="video/mp4">
  Seu navegador não suporta o elemento de vídeo.
</video>
```

### Divisões

As `<div>`s são elementos cruciais no HTML, usadas para criar estrutura e organização no conteúdo de uma página. Elas não têm significado semântico, só organizacional.

Exemplo de Div:

```html
<div id="container">
  <div class="cabecalho">
    <!-- Conteúdo do cabeçalho -->
  </div>

  <div class="corpo">
    <!-- Conteúdo do corpo -->
  </div>

  <div class="rodape">
    <!-- Conteúdo do rodapé -->
  </div>
</div>
```

## HTML:5 Semântico

Com a chegada do HTML5, a linguagem de marcação da web introduziu uma série de novas "tags" semânticas, que servem para estruturar melhor o conteúdo e tornar o código mais acessível, sendo elas o `<header>`, `<main>`, `<section>`, `<article>`, `<figure>` e `<footer>`, cada uma com um propósito específico para melhorar a organização e a semântica do conteúdo.

### Header (`<header>`)
Representa o cabeçalho de uma página ou de uma seção. Geralmente contém um conjunto de introdução ou navegação.

```html
<header>
  <h1>Título da Página</h1>
  <nav>
    <!-- Links de navegação -->
  </nav>
</header>
```

### Main (`<main>`)
Destina-se ao conteúdo principal do documento, único para cada página, facilitando a identificação da parte mais importante do conteúdo pelos leitores de tela.

```html
<main>
  <article>
    <!-- Conteúdo principal -->
  </article>
</main>
```

### Section (`<section>`)
Usada para definir seções dentro de um documento, como capítulos, agrupamentos temáticos de conteúdo ou funcionalidades.

```html
<section>
  <h2>Título da Seção</h2>
  <!-- Conteúdo da seção -->
</section>
```

### Article (`<article>`)
Ideal para partes do conteúdo que podem ser distribuídas independentemente do resto do site, como postagens de blog, artigos de notícias, etc.

```html
<article>
  <h2>Título do Artigo</h2>
  <!-- Conteúdo do artigo -->
</article>
```

### Figure (`<figure>`)
Usada para incorporar mídias, como imagens, diagramas, fotos, código, que são referenciadas no documento principal.

```html
<figure>
  <img src="imagem.jpg" alt="Descrição da imagem">
  <figcaption>Legenda da imagem</figcaption>
</figure>
```

### Footer (`<footer>`)
Define o rodapé de uma página ou de uma seção, contendo informações como autor, direitos autorais, links de contato, etc.

```html
<footer>
  <!-- Informações do rodapé -->
</footer>
```

Segue um exemplo gráfico:
<img src="archives\laboratoria_image.png"  alt="Gráfico demonstrando a diferença entre div e HTML semântico"> <sub>Imagem retirada do site [Laboratória](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html), todos os direitos reservados a eles.</sub>
