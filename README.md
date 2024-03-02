<h1 align="center">HTML | HyperText Markup Language</h1>


Esta branch foi criada para documentar e compartilhar o conhecimento que adquiri sobre HTML. Para meu aprendizado, utilizei a documentação da Mozilla Developer Network (MDN), além de participar do Curso de HTML oferecido por Dimitri Teixeira através de seu canal no YouTube, Programação Web.

### Sumário
1. [Definição: HTML](#definição-html)
2. [Estruturação](#estruturação)
    - [Head](#head)
    - [Body](#body)
3. [Elementos: HTML](#elementos-html)

## Definição: HTML 
HTML ou HyperText Markup Language é uma linguagem de marcação que tem como objetivo se tornar o escopo da construção de páginas web, efetuando a estruturação básica do código visual e delimitando os itens a serem estilizados posteriormente por CSS e programados via quaisquer linguagem de programação (Python, Javascript, dentre outras). 

## Estruturação

A estrutura de um documento HTML é composta fundamentalmente por duas partes principais: `<head>` e `<body>`. Cada uma desempenha papéis distintos na construção de uma página web, oferecendo ao navegador as informações necessárias para renderizar o conteúdo de maneira apropriada.

Além disso, é crucial incluir a declaração `<!DOCTYPE html>` no início de qualquer documento HTML. Essa prática tem raízes históricas, onde as páginas web eram diferenciadas com base no tipo de linguagem utilizada. A inclusão dessa declaração era necessária para garantir a correta interpretação do conteúdo.

Páginas mais antigas podem requerer ajustes para se alinharem aos padrões modernos. A utilização do `<!DOCTYPE html>` permanece como uma prática recomendada para garantir a consistência e a conformidade com os padrões web atuais.

### Head
Seção onde conterá os metadados da sua página web, sendo não diretamente visíveis a página web e si. 

- `<title>`: Define o título da página, que é exibido na aba do navegador.
- `<meta>`: Fornece metadados sobre o HTML, como o conjunto de caracteres usad(charset), a descrição da página, e palavras-chave para motores de busca.
- `<link>`: Utilizado para conectar recursos externos como folhas de estilo CSS e ícones de favoritos.
- `<style>`: Permite incluir CSS diretamente no documento HTML.
- `<script>`: Referencia ou inclui código JavaScript que pode ser executado pelo navegador.

Exemplo de head: 
```
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Aqui será inserida uma descrição do site">
    <meta name="keywords" content="html,web">
    <meta name="author" content="Anniely Mariah">
    <title>Página web aleatória</title>
</head>
```
### Body

 A seção `<body>` é onde o conteúdo visível da página web é colocado. É aqui que textos, imagens, vídeos, jogos, e outros elementos interativos são definidos para serem apresentados ao usuário. Cada elemento dentro do `<body>` pode ser estilizado usando CSS e manipulado com JavaScript.

 ```
 <body>
    <h1>Isso é um título</h1>
    
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium eveniet ducimus quis, blanditiis consequatur laboriosam mollitia, quam, dolor hic illo? Deserunt nobis cupiditate aut exercitationem quod deleniti odio modi.</p>
</body>
 ```

## Elementos: HTML
Nessa seção estarão todos os elementos aprendidos por mim até o momento.

### 1 - Títulos

`<h1>` até `<h6>` representam títulos de diferentes níveis, indicando a importância e a estrutura da informação na página. Não utiliza-se para diferenciar tamanhos, afinal pode ser modificado por meio do CSS.

Exemplo:

```
<h1>Isso é um título h1</h1>
<h2>Isso é um título h2</h2>
<h3>Isso é um título h3</h3>
<h4>Isso é um título h4</h4>
<h5>Isso é um título h5</h5>
<h6>Isso é um título h6</h6>
```

### 2 - Parágrafos

`<p>` define um parágrafo.

Exemplo:

```
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint maxime aut, dolores, similique voluptate fugiat soluta corporis hic iste quisquam earum. Error vel tempore delectus inventore! Autem, doloremque fuga.</p>
```

### 3 - Tags de Formatação

Diversas tags são usadas para formatação de texto, como `<b>`, `<i>`, `<strong>`, `<u>`, `<small>`, `<del>`, `<br>`, `<sub>`, `<sup>`, e `<mark>`.

Exemplo:

<p>Isso é um parágrafo, e isto: <code>é um bloco de código</code></p>

```
<p>Isso é um parágrafo, e isto: <code>é um bloco de código</code></p>
```
<p>Texto a seguir em: <b>negrito</b></p>

```
<p>Texto a seguir em: <b>negrito</b></p>
```
<p>Texto a seguir em: <i>Itálico</i></p>

```
<p>Texto a seguir em: <i>Itálico</i></p>
```
<p>Texto enfatizado: <strong>Strong</strong></p>

```
<p>Texto enfatizado: <strong>Strong</strong></p>
```
<p>Texto a seguir em: <u>Sublinhado</u></p>

```
<p>Texto a seguir em: <u>Sublinhado</u></p>
```
<p>Texto a seguir em: <small>Small</small></p>

```
<p>Texto a seguir em: <small>Small</small></p>
```
<p>Texto a seguir em: <del>Deletado/Riscado</del></p>

```
<p>Texto a seguir em: <del>Deletado/Riscado</del></p>
```
<p>Pular <br> a linha</p>


```
<p>Pular <br> a linha</p>
```

<p><sub>Abaixo</sub> e <sup>Acima</sup></p>

```
<p><sub>Abaixo</sub> e <sup>Acima</sup></p>
```
<p><mark>Texto marcado</mark></p>

```
<p><mark>Texto marcado</mark></p>
```
### 4 - Tags de Citação

Tags como `<abbr>`, `<address>`, `<blockquote>`, `<cite>`, e `<q>` são usadas para diferentes tipos de citações e referências.

Exemplo:

<p>Estamos aprendendo <abbr title="Hyper Text Markup Language">HTML</abbr></p>

```
<p>Estamos aprendendo <abbr title="Hyper Text Markup Language">HTML</abbr></p>
```
<p><address>rua X, Y, Z</address></p>

```
<p><address>rua X, Y, Z</address></p>
```
<p><blockquote>Lorem ipsum dolor</blockquote>

```
<p><blockquote>Lorem ipsum dolor</blockquote>
```
<p>No filme <cite>Rua do medo</cite>, fulano disse: <q>AAAAAAAAAAAAAAAAAA</q></p>

```
<p>No filme <cite>Rua do medo</cite>, fulano disse: <q>AAAAAAAAAAAAAAAAAA</q></p>
```

### 5 - Imagens

`<img>` é usada para incorporar imagens na página, podendo especificar dimensões e texto alternativo.

Exemplo:

<img src="main_project/img/carro.jpg" width="100" alt="Carro" height="50">
<img src="main_project/img/carro.jpg" width="100" alt="Carro" height="70">
<img src="main_project/img/carro.jpg" width="100" alt="Carro" height="100">
<img src="main_project/img/carro.jpg" width="100" alt="Carro" height="150">
<img src="main_project/img/carro.jpg" width="100" alt="Carro" height="200">
<img src="main_project/img/carro.jpg" width="100" alt="Carro" height="300">
<img src="https://avatars.githubusercontent.com/u/95944772?v=4" width="1000" alt="Anniely, a linda" height="100">

```
<img src="img/carro.jpg" width="100" alt="Carro" height="50">
<img src="https://avatars.githubusercontent.com/u/95944772?v=4" width="1000" alt="Anniely, a linda" height="100">
```

### 6 - Tabelas

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

````
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

### 7 - Listas

`<ul>` para listas não ordenadas e `<ol>` para listas ordenadas, com `<li>` para cada item da lista.

Exemplo:

<ul>
    <li>Oi</li>
    <li>Tchau</li>
</ul>

```
<ul>
    <li>Oi</li>
    <li>Tchau</li>
</ul>
```

<ol>
    <li>Um</li>
    <li>Dois</li>
</ol>

```
<ol>
    <li>Um</li>
    <li>Dois</li>
</ol>
```

### 8 - Hyperlinks

`<a>` define um hyperlink, podendo ser usado para linkar para outra página, um endereço de email, entre outros.

Exemplo:


- <a href="https://github.com/annielymariah">Meu GitHub</a>
```
<a href="https://github.com/annielymariah">Meu GitHub</a>
```
- <a href="https://github.com/annielymariah" target="_blank">Meu GitHub em nova aba</a>
```
<a href="https://github.com/annielymariah" target="_blank">Meu GitHub em nova aba</a>
```
- <a href="html\index.html">Página elaborada</a>
```
<a href="html\index.html">Página no arquivo</a>
```

### 9 - Iframes

`<iframe>` insere uma página dentro da sua página web, como um mini navegador. Atualmente, não é mais tão utilizado devido o advento do CSS.
- Em vídeos do Youtube, você pode incorporar vídeos, só copiando o código que eles disponibilizam.

```
<iframe src="html/index.html">Página principal</iframe>
```

- Utilizando hyperlinks, você conseguiria abrir uma página web dentro do seu Iframe.
```
<a href="main_project/index.html" target="meu-iframe">Página elaborada</a>

<iframe src="" name="meu-iframe" title="Iframe">Página principal</iframe>```
