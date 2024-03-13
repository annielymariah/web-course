<h1 align="center">CSS | Cascading Style Sheets</h1>

Esta branch foi criada para documentar e compartilhar o conhecimento que adquiri sobre CSS. Para meu aprendizado, utilizei a documentação da Mozilla Developer Network (MDN), além de participar do Curso de CSS oferecido por Dimitri Teixeira através de seu canal no YouTube, Programação Web.

## Introdução a CSS

Css, ou Cascading Style Sheets, é uma linguagem de estilização que, utilizando-se de linguagens de marcação como HTML ou XHTML, tem como propósito definir a apresentação do documento definido, impondo o que será mostrado na tela. 

## Fundamentos da Estrutura CSS

Para que o CSS seja implementado na sua documentação HTML, ele pode ser estruturado de 3 seguintes maneiras:

#### Inline

CSS inline é uma maneira de implementação que se baseia em inserir a estilização por meio da `<div>` que, utilizando-se do parâmetro style, para 
o usuário deseja estilizar. 

```html
<p style="color: red;">Este parágrafo será exibido com texto em vermelho.</p>
```

#### Incorporado (Interno)

CSS incorporado, também conhecido como CSS interno, é uma maneira de implementação que baseia em inclui-lo diretamente dentro de um documento HTML, utilizando a tag `<style>` no cabeçalho do documento (`<head>`). 

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de CSS Incorporado</title>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>

<p>Este parágrafo será exibido com texto em azul e com um tamanho de fonte de 16px.</p>

</body>
</html>
```

#### Externo

Já o CSS externo é uma abordagem na qual os estilos CSS são definidos em um arquivo separado com extensão .css e, em seguida, vinculados ao documento HTML por meio do `<link>` no cabeçalho do documento (`<head>`).

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

h1 {
    color: #008080;
}

p {
    font-size: 16px;
}
```

### Hierarquia de Estilização

A hierarquia de estilização no CSS determina a ordem de precedência dos estilos quando há conflitos. A ordem, da maior para a menor precedência, é: 
1. CSS inline (diretamente no elemento HTML); 
2. CSS interno (na tag `<style>` no cabeçalho HTML); 
3. CSS externo (em um arquivo separado, vinculado com a tag `<link>`).


## Seletores de Classes

Seletores são padrões usados para selecionar os elementos do HTML aos quais queremos aplicar estilos. Existem vários tipos de seletores em CSS, incluindo seletores de tipo, de classe, de ID e o seletor universal.

##### Seletores de tipo (Tag)

Também conhecidos como seletores de tag, selecionam todos os elementos de um determinado tipo. Por exemplo, p selecionará todos os elementos <p> de um documento HTML.

```css
p {
    color: #000000
}
```

#### Seletores de classe

Permitem selecionar elementos que possuem uma classe específica. As classes são declaradas no HTML com o atributo class e, no CSS, são representadas por um ponto (.) seguido do nome da classe. 

```css
.exemplo_back {
    background-color: aliceblue;
    height: 100px;
}
```

```html
<div class="exemplo_back">
    <p>teste</p>
</div>
```

#### Seletores de ID

Usados para selecionar um elemento único que possui um identificador específico. IDs são declarados no HTML com o atributo id e, no CSS, são representados por uma cerquilha (#) seguida do nome do ID. 

```css
#paragrafo-destaque {
    color: green;
    font-weight: bold;
}
```

```html
<p id="paragrafo-destaque">Este é um parágrafo destacado.</p>
```

#### Seletor Universal

Representado pelo asterisco (*), o seletor universal é usado para aplicar um estilo a todos os elementos de uma página. 

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### Classes vs. IDs

Classes São ideais quando você deseja aplicar o mesmo estilo a vários elementos ou quando deseja usar estilos específicos em combinação com outros, assim sendo reutilizáveis dentro de um documento, o que significa que mais de um elemento pode ter a mesma classe.

IDS devem ser usados para identificar elementos únicos que precisam ser estilizados de forma singular ou quando são alvos de scripts. Cada ID deve ser único dentro do documento.

## Propriedades Do CSS

### Color

- __color:__ Define a cor de um item.

### Background

- __background:__ Define paramêtros remetentes ao fundo do elemento estilizada.
- __background-color:__ Define a cor de fundo do elemento.
- __background-image:__ Especifica uma imagem a ser usada como plano de fundo.
    - __background-repeat:__ Controla como a imagem de fundo é repetida.
    - __background-position:__ Define a posição inicial da imagem de fundo.
    - __background-size:__ Especifica o tamanho da imagem de fundo.
    - __background-origin:__ Especifica a área de onde a imagem de fundo deve ser originada.
    - __background-clip:__ Define a área de exibição da imagem de fundo.
- __background-attachment:__ Define se o plano de fundo rola com o conteúdo ou permanece fixo.

### Border

- __border:__ Configura as características das bordas de um elemento. Seu formato completo (largura, estilo, cor)
    - __border-top:__ Define parâmetros como largura estilo e cor para cima.
    - __border-right:__ Define parâmetros como largura estilo e cor para direita.
    - __border-bottom:__ Define parâmetros como largura estilo e cor para baixo.
    - __border-left:__ Define parâmetros como largura estilo e cor para esquerda.
- __border-width:__ Define a largura da borda.
- __border-style:__ Especifica o estilo da borda.
    - __border-style: solid__ - Cria uma borda sólida contínua.
    - __border-style: dotted__ - Cria uma borda composta por pontos.
    - __border-style: dashed__ - Cria uma borda composta por traços curtos.
    - __border-style: double__ - Cria uma borda dupla, consistindo em duas linhas sólidas paralelas.
    - __border-style: groove__ - Cria uma borda tridimensional entalhada, adequada para botões ou caixas destacadas.
    - __border-style: ridge__ - Cria uma borda tridimensional elevada, oposta à aparência da borda groove.
    - __border-style: inset__ - Cria uma borda que parece estar embutida na página.
    - __border-style: outset__ - Cria uma borda que parece se projetar para fora da página.
    - __border-style: none__ - Remove a exibição de borda.
    - __border-style: hidden__ - Similar a none, mas pode afetar o layout, mantendo o espaço ocupado pela borda.
- __border-color:__ Define a cor da borda.

### Margin

 - __margin:__ Cria espaço ao redor dos elementos (usando de paramêtro o fora, pra dentro), fora de quaisquer bordas definidas. Você pode dá um valor único ou inserir na sequência abaixo cada valor em um único comando margin.
    - __margin-top:__ Cria espaço acima dos elementos.
    - __margin-right:__ Cria espaço a direita dos elementos.
    - __margin-bottom:__ Cria espaço abaixo dos elementos.
    - __margin-left:__ Cria espaço a esquerda dos elementos.

### Padding

- __padding:__ Usada para definir o preenchimento interno (usando como parâmetro o de dentro, elemento, pra o de fora) de um elemento.
    - __padding-top:__ Cria o preenchimento interno acima dos elementos.
    - __padding-right:__ Cria o preenchimento interno a direita dos elementos.
    - __padding-bottom:__ Cria o preenchimento interno abaixo dos elementos.
    - __padding-left:__ Cria o preenchimento interno a esquerda dos elementos.

### Width & Height

- __width:__ Define a largura do elemento.
- __max-width:__ Define uma largura de forma adaptativa, responsiva, ajustando-se com o tamanho da janela.
- __height:__ Define a altura do elemento.

### Text

- __text-align:__ Alinhamento de texto, podendo ser: center, left, right, justify.
- __direction:__ Informar a direção do texto. (RTL ou LTR)
- __unicode-bidi:__ Informa a direção do texto.
- __text-decoration:__ Define a decoração do texto.

- __text-decoration: none__ - Remove qualquer decoração de texto (valor padrão).
    - __text-decoration: underline__ - Adiciona uma linha abaixo do texto.
    - __text-decoration: overline__ - Adiciona uma linha acima do texto.
    - __text-decoration: line-through__ - Adiciona uma linha no meio do texto.
    - __text-decoration: underline overline__ - Adiciona tanto a decoração de sublinhado quanto de sobrelinhado.
    - __text-decoration: inherit__ - Herda a propriedade de decoração de texto do elemento pai.
- __text-transform:__ Formata o texto.
    - __text-transform: none__ - Remove qualquer transformação de texto.
    - __text-transform: capitalize__ - Transforma a primeira letra de cada palavra em maiúscula.
    - __text-transform: uppercase__ - Transforma todas as letras do texto em maiúsculas.
    - __text-transform: lowercase__ - Transforma todas as letras do texto em minúsculas.
    - __text-transform: full-width__ - Transforma o texto em caracteres de largura completa (principalmente usado com caracteres asiáticos).
    - __text-transform: full-size-kana__ - Transforma caracteres kana japoneses em suas formas de tamanho completo (não é frequentemente utilizado em textos em português).
- __text-indent:__  Define o recuo da primeira linha.
- __letter-spacing:__ Espaçamento entre letras.
- __word-spacing:__ Espaçamento entre palavras.
- __line-heigth:__ Definir a altura da linha dentro de um bloco de texto.

### Font

-__font-family:__ Define o tipo de fonte. 
- __font-size:__ Definir o tamanho da fonte de um elemento de texto. 
- __font-style:__ Especifica o estilo da fonte aplicado ao texto de um elemento. Podendo ser: normal, italic, oblique, oblique <angle>.
- __font-weight:__ Ela determina a "grossura" da fonte, indicando se o texto deve ser exibido com uma fonte mais fina (menor peso) ou mais negrito (maior peso).

### Display

- __display:__ Define a exibição do bloco na página.
    - __display: none__ - O elemento é completamente removido do fluxo do documento e não ocupa espaço. 
    - __display: block__ - O elemento é exibido como um bloco, ocupando toda a largura disponível. Exemplos de tags com tipo block: `<div>`, `<p>`, `<h1>` a `<h6>`.
    - __display: inline__ - O elemento não inicia uma nova linha e apenas ocupa seu conteúdo, seguindo a linha. _Elementos inline não podem ter largura e altura definidas. Exemplos de tags com tipo inline: `<a>`, `<span>`, `<adress>`, `<img>`.
    - __display: inline-block__ - Uma mistura entre inline e block. Ele permanece em linha mas permite definir altura e largura.

### Visibility

### Position

- __position:__ É o posicionamento do elemento com relação a tela, normalmente, quando começamos a trabalhar com um elemento, ele está no posicionamento static. Assim podendo passar parametros de acordo com relação a posição.
    - __position: relative__ - Posicionamento do elemento relativo a onde ele está presente.
        - __z-index:__ Define a relação entre altura de camadas de elementos, só funciona com relative. Usa-se apenas números inteiros.
    - __position: fixed__ - Deixa um elemento fixo na tela independente da rolagem de elementos, como um pop-up de canto de tela. Com fixed, liberasse a relação de coordenadas pela tela inteira, utilizando-se de:
        - __bottom:__ Define o deslocamento com a base da página.
        - __top:__ Define o deslocamento com o topo da página.
        - __left:__ Define o deslocamento com a esquerda da página.
        - __right:__ Define o deslocamento com a direita da página.
    - __position: absolute__ - Diz respeito a posição com relação ao "pai" dele. Como a `<div>` em que o elemento está contido. Mas, para que isso ocorra, o posicionamento pai não pode ser __static__, pois ela irá se basear com o elemento que tiver um position diferente de static. 
    - __position: sticky__ - Ela cola com a barra de rolagem, quando você desce sua barra de rolagem, ela irá descer junto ao sair da tela. O deslocamento sticky ela permanece contida na tag pai dela.
    
### Overflow





