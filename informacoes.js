const texto = document.querySelector('#informativo')
const info = document.querySelector('#info')


/*Função para voltar o texto pro inicial depois tirar o mouse de cima do elemento*/
celulas.forEach(function(elemento){
    elemento.onmouseleave = ()=>{
        texto.innerHTML = 'A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons).'
    }
})


/**Funções reponsaveis por exibir detalhes dos elementos quando o mouse fica sobre ele
 * Linha 026: Classe de Não Metais
 * Linha 076: Classe de Gases Nobres
 * Linha 126: Classe de Metais Alcalinos
 * Linha 169: Classe de Metais Alcalinos Terrossos
 * Linha 212: Classe de Metais de Transições
 * Linha 478: Classe de Semimetais
 * Linha 527: Classe de Outros metais
 * Linha 605: Classe de Halogenios
 * Linha 647: Classe de Lantanideos
 * Linha 753: Classe de Actinidios*/


/*Classe de Não Metais*/
h.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É raro na atmosfera terrestre, por conta de sua baixa densidade, apesar disso é abundante na superfície da Terra. Quando dois átomos de hidrogênio se ligam, formam a molécula H2, conhecida como gás hidrogênio. ubstância gasosa, inflamável, incolor, inodora, não metálica e insolúvel em água. Descoberto em 1766 por Henry Cavendish.'

    icone.innerHTML = '<p id="indice">1</p>H'
    txtTh.innerText = 'hidrogênio'
})

c.addEventListener('mouseover',()=>{
    texto.innerHTML = 'As características físicas variam de acordo com sua forma alotrópica. Por exemplo, o diamante é totalmente transparente, enquanto o grafite é preto e opaco. Em relação à condutividade elétrica, apenas o grafite é um bom condutor, já o restante apresenta boa condutividade térmica em condições ambientes de temperatura e pressão. Sobre o estado físico, todos os alótropos são sólidos em temperatura ambiente. Descoberto em 1754 por Joseph Black.'

    icone.innerHTML = '<p id="indice">6</p>C'
    txtTh.innerText = 'carbono'
})

n.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Naturalmente, é encontrado como gás na atmosfera terrestre. Ademais, é incolor, inodoro e insípido. Está presente nos meteoritos, gases de vulcões, minas, no Sol e demais estrelas. Na Terra, pode ser encontrado na atmosfera, na chuva, no solo, no guano e nas proteínas, que constituem os organismos vivos. Descoberto em 1772 por Daniel Rutherford e Antoine Laurent Lavoisier.'

    icone.innerHTML = '<p id="indice">7</p>N'
    txtTh.innerText = 'nitrogênio'
})

o.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Trata-se do elemento mais abundante da superfície da Terra e o terceiro do Universo, que pode ser encontrado na forma livre ou combinado com outras substâncias, como a água (H2O). O gás oxigênio, que apresenta fórmula O2, está presente na atmosfera terrestre e é indispensável à vida, pois praticamente todos os seres vivos o utilizam na respiração. Além disso, essa substância também participa do processo de fotossíntese. Descoberto em 1774 por Joseph Priestley.'

    icone.innerHTML = '<p id="indice">8</p>O'
    txtTh.innerText = 'oxigênio'
})

p.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Ametal da família do nitrogênio. Em temperatura ambiente, é incolor e semitransparente, mas no escuro apresenta fosforescência (brilha). Macio, possuindo aparência de cera de abelha. O fósforo é altamente reativo quando exposto à atmosfera. Entra em ignição espontaneamente ao ar, gerando intensa névoa branca de óxidos de vapor, os quais interagem com a umidade formando ácidos. Descoberto em 1669 por Hennig Brandt.'

    icone.innerHTML = '<p id="indice">15</p>P'
    txtTh.innerText = 'fósforo'
})

s.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um sólido amarelo classificado na tabela periódica como um não metal e representa cerca de 3% da massa terrestre. É base para a síntese de ácido sulfúrico, um dos compostos mais produzidos mundialmente em escala industrial. O enxofre também está presente na constituição dos aminoácidos de plantas e animais. Descoberto em 1777 por Antoine Lavoisier.'

    icone.innerHTML = '<p id="indice">16</p>S'
    txtTh.innerText = 'enxofre'
})

se.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O selênio em sua forma elementar é relativamente atóxico, mas os seus compostos, como o H2Se, são muito tóxicos. Mesmo assim, é considerado um elemento-traço essencial, cuja ingestão diária é recomendada na faixa de 55 microgramas por dia, não podendo exceder os 800 microgramas. Isso porque o Se é um importante antioxidante, impedindo a ação de radicais livres e do oxigênio sobre as células, prevenindo-nos de envelhecimento precoce e outras doenças. Descoberto em 1817 por Jons Jacob Berzelius.'
    
    icone.innerHTML = '<p id="indice">34</p>Se'
    txtTh.innerText = 'selênio'
})

/*Classe de Gases Nobres*/
he.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Gás monoatômico, baixo peso, incolor, inodoro, não inflamável e não tóxico. É um elemento abundante na massa do Sol e das estrelas. Na Terra, é encontrado junto ao gás natural, além de ser produzido por desintegrações de outros elementos. Descoberto em 1868 por Pierre Janssen e Norman Lockyer.'

    icone.innerHTML = '<p id="indice">2</p>He'
    txtTh.innerText = 'hélio'
})

ne.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É o segundo elemento mais abundante na atmosfera terrestre, após o ar, e tem o segundo ponto de ebulição mais baixo, depois do hélio. É incolor, inodoro, insípido e quimicamente inerte. Obtido como subproduto da liquefação do ar, é conhecido por sua aplicação em sinais luminosos e possui grande potencial refrigerante em sua forma líquida. Descoberto em 1898 por Sir William Ramsay e Morris William Travers.'

    icone.innerHTML = '<p id="indice">10</p>Ne'
    txtTh.innerText = 'neônio'
})

ar.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Trata-se de um elemento monoatômico inodoro, incolor, inerte e insípido que possui essas características são tanto no estado gasoso quanto no líquido. O argônio um gás não tóxico que tem o ponto de fusão em -189,34ºC e o ponto de ebulição em -185,84ºC. Descoberto em 1894 por Lord Rayleigh e Sir William Ramsay.'

    icone.innerHTML = '<p id="indice">18</p>Ar'
    txtTh.innerText = 'argônio'
})

kr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O criptônio é o gás nobre mais leve a fazer compostos que podem ser isolados em quantidades macroscópicas, sendo o principal composto o KrF2, um oxidante fortíssimo, cujo comportamento químico chamam a atenção de pesquisadores da área. Sua produção comercial se dá por destilação fracionada do ar liquefeito, mas o isótopo 85 desse elemento é produto da fissão do urânio. Descoberto em 1898 por Sir William Ramsay e Morris William Travers.'

    icone.innerHTML = '<p id="indice">36</p>Kr'
    txtTh.innerText = 'criptônio'
})

xe.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O xenônio é capaz de emitir brilho azul quando sofre descarga elétrica em um tubo de descarga. Por isso, suas aplicações são relacionadas a essa propriedade. Assim, o xenônio pode ser empregado na confecção de lasers, porém ele é encontrado principalmente na constituição de diversas lâmpadas. Descoberto em 1898 por Sir William Ramsay e Morris William Travers.'

    icone.innerHTML = '<p id="indice">54</p>Xe'
    txtTh.innerText = 'xenônio'
})

rn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O radônio é utilizado em alguns tratamentos de câncer, porém o que chama atenção é seu grande risco. Quando inalado, a sua desintegração radioativa pode causar sérios danos aos pulmões, e, além disso, os elementos gerados em sua desintegração são extremamente tóxicos. Descoberto em 1900 por Friedrich Ernst Dorn.' 

    icone.innerHTML = '<p id="indice">86</p>Rn'
    txtTh.innerText = 'radônio'
})

og.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Não pode ser encontrado na natureza, e sua produção é artificial, sendo então considerado um elemento sintético. Mesmo assim, sua produção é muito difícil, e ele é considerado um elemento muito raro, tendo sido sintetizado pouquíssimas vezes. Descoberto em 2006 por Yuri Oganessian.'

    icone.innerHTML = '<p id="indice">118</p>Og'
    txtTh.innerText = 'oganessônio'
})

/*Classe de Metais Alcalinos*/
li.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O lítio é um elemento altamente reativo encontrado em minerais e águas salgadas. É obtido industrialmente por eletrólise do cloreto de lítio e é armazenado em óleo mineral devido à sua rápida oxidação em contato com o ar, mudando de cor de prateado para cinza.. Descoberto em 1817 por Johan August.'

    icone.innerHTML = '<p id="indice">3</p>Li'
    txtTh.innerText = 'lítio'
})

na.addEventListener('mouseover',()=>{
    texto.innerHTML = ' O sódio é muito importante, pois se faz presente no corpo humano e também na alimentação diária. É o principal tempero caseiro: cloreto de sódio (NaCl), mais conhecido como sal de cozinha. Está presente na nossa estrutura corpórea da seguinte maneira: quando atinge sua forma ionizada dentro de nosso organismo, o sódio se torna um dos principais fatores de regulação osmótica do sangue, de fluidos intercelulares e do equilíbrio ácido-base. Descoberto em 1807 por Humphry Davy.'

    icone.innerHTML = '<p id="indice">11</p>Na'
    txtTh.innerText = 'sódio'
})

k.addEventListener('mouseover',()=>{
    texto.innerHTML = ' É um metal extremamente macio e reativo pertencente ao grupo dos metais alcalinos. Sua reatividade com o gás oxigênio e com a água é alta, podendo, inclusive, ocasionar explosões. Possui um isótopo natural radioativo, utilizado para a datação de rochas. É o sétimo elemento mais abundante da crosta terrestre. Descoberto em 1807 por Humphry Davy.'

    icone.innerHTML = '<p id="indice">19</p>K'
    txtTh.innerText = 'potássio'
})

rb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Pode ser utilizado na fabricação de fotocélulas, vidros especiais e como propelente em motores iônicos de espaçonaves. O rubídio forma uma grande quantidade de compostos, embora nenhum deles ainda tenha uma aplicação comercial significante. Descoberto em 1861 por Robert Wilhelm Bunsen e Gustav Kirchhoff.'

    icone.innerHTML = '<p id="indice">37</p>Rb'
    txtTh.innerText = 'rubídio'
})

cs.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Apesar de ser tóxico aos animais e pessoas, quando manipulado da forma correta, os isótopos radioativos do césio trazem benefícios, podendo ser empregados na área médica, na Física e até mesmo na esterilização de lodos e de alimentos. Descoberto em 1860 por Robert Wilhelm Bunsen e Gustav Kirchhoff.'

    icone.innerHTML = '<p id="indice">55</p>Cs'
    txtTh.innerText = 'Césio'
})

fr.addEventListener('mouseover',()=>{
    texto.innerHTML = ' Tentou-se aplicá-lo em medicina nuclear, no diagnóstico de câncer, mas a dificuldade em prepará-lo e isolá-lo tornou o projeto inviável. Essa característica, somada ao seu baixo tempo de meia-vida, fazem com que o frâncio seja um dos poucos elementos sem aplicações práticas. Descoberto em 1939 por Marguerite Perey.'

    icone.innerHTML = '<p id="indice">87</p>Fr'
    txtTh.innerText = 'frâncio'
})

/*Classe de Metais Alcalinos Terrossos*/
be.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É muito utilizado na fabricação de ligas de cobre-berílio, as quais são empregadas em reatores nucleares e no fabrico de ferramentas que não produzem faíscas. O berílio e seus compostos, no entanto, são extremamente tóxicos, e sua manipulação indevida e exposição prolongada podem levar a uma doença crônica chamada de granulomatose pulmonar. Descoberto em 1797 por Nicolas-Louis Vauquelin.'

    icone.innerHTML = '<p id="indice">4</p>Be'
    txtTh.innerText = 'berílio'
})

mg.addEventListener('mouseover',()=>{
    texto.innerHTML = ' O magnésio é encontrado em diversos produtos, incluindo alguns medicamentos. É o caso do leite de magnésia que é uma base deste elemento, Mg(OH)2 que tem como função no organismo a de tratar a prisão de ventre e a acidez estomacal. Descoberto em 1755 por Joseph Black.'

    icone.innerHTML = '<p id="indice">12</p>Mg'
    txtTh.innerText = 'magnésio'
})

ca.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É sólido em temperatura ambiente, tem coloração prateada e é moderadamente macio. É o quinto elemento em abundância na crosta terrestre e um dos elementos mais abundantes nos organismos vivos. Assim como outros metais do seu grupo, é reativo com água e ao ar atmosférico. Possui seis isótopos naturais, sendo o isótopo 40Ca o de maior ocorrência. Descoberto em 1807 por Humphry Davy.'

    icone.innerHTML = '<p id="indice">20</p>Ca'
    txtTh.innerText = 'cálcio'
})

sr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Em décadas anteriores, havia grande demanda por estrôncio, pois era aplicado em tubos de raios catódicos das clássicas televisões coloridas de tubo. Contudo, a tomada pelos modelos mais modernos de tela plana diminuíram substancialmente a demanda por esse metal. Hoje, seu maior uso está na pirotecnia, por conta da chama vermelha característica produzida quando queimado. Descoberto em 1790 por Adair Crawford e Humphry Davy.'

    icone.innerHTML = '<p id="indice">38</p>Sr'
    txtTh.innerText = 'estrôncio'
})

ba.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O bário metálico não possui extensa utilização, entretanto, pode ser utilizado em ligas metálicas como agente de desoxidação, já que possui capacidade de formar óxidos estáveis e que podem ser formados antes da solidificação das ligas, diminuindo o teor de oxigênio nestas. Ainda no campo da metalurgia, o cloreto de bário, BaCl2 é amplamente utilizado para aumentar a dureza de ligas ferrosas e aços. Descoberto em 1808 por Humphry Davy.'

    icone.innerHTML = '<p id="indice">56</p>Ba'
    txtTh.innerText = 'bário'
})

ra.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Atualmente, o rádio é utilizado na medicina para o tratamento de alguns tipos de câncer e também na obtenção da liga metálica berílio-rádio. Descoberto em 1898 por Marie Curie e Pierre Curie.'

    icone.innerHTML = '<p id="indice">88</p>Ra'
    txtTh.innerText = 'rádio'
})

/*Classe de Metais de Transições*/
sc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O escândio é mais abundante no Sol do que na crosta terrestre, e poucos são os minérios com alto teor de escândio. Poucos são os usos para o escândio, mas sabe-se que ele é capaz de melhorar as propriedades do alumínio quando formam uma liga. Nos Estados Unidos, vem sendo utilizado na fabricação de equipamentos esportivos, como capacetes e tacos de beisebol. Descoberto em 1879 por Lars Fredrik Nilson.'

    icone.innerHTML = '<p id="indice">21</p>Sc'
    txtTh.innerText = 'escândio'
})

y.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Esse metal foi amplamente utilizado na fabricação de telas de televisores antigos e também de modelos mais modernos, de LCD, pois esse elemento auxilia na geração das cores primárias. Também possui aplicações industriais relevantes, como na fabricação de catalisadores, lasers, cerâmicas e supercondutores, que são materiais sem resistência elétrica. Descoberto em 1794 por Johan Gadolin.'

    icone.innerHTML = '<p id="indice">39</p>Y'
    txtTh.innerText = 'Ítrio'
})

ti.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O titânio é um metal de transição que agrega valor a ligas metálicas por ser leve e resistente. Não é um bom condutor elétrico ou térmico, sendo, por isso, utilizado também em materiais refratários. Também é usado na fabricação de joias pelo seu aspecto metálico lustroso, entre outras aplicações do elemento. Descoberto em 1791 por William Gregor e Lars Fredik Nilson.'

    icone.innerHTML = '<p id="indice">22</p>Ti'
    txtTh.innerText = 'titânio'
})

zr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O zircônio tem grande aplicação na indústria nuclear, pois sua baixa absorção de nêutrons faz dele um excelente revestimento para o combustível, rico em dióxido de urânio. Além disso, por ser considerado atóxico e muito biocompatível, o zircônio é aplicado em próteses e implantes cirúrgicos. Descoberto em 1789 por Martin Heinrich Klaproth e Humphry Davy.'

    icone.innerHTML = '<p id="indice">40</p>Zr'
    txtTh.innerText = 'zircônio'
})

hf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O háfnio é pouco presente na crosta terrestre, mas possui aplicações importantes. Uma delas é na fabricação de barras de controles de nêutrons em reatores nucleares, as quais controlam as reações de fissão. Também pode ser usado na produção de superligas metálicas e em cerâmicas de alta temperatura. Descoberto em 1923 por Dirk Coster e Georg von Hevesy.'

    icone.innerHTML = '<p id="indice">72</p>Hf'
    txtTh.innerText = 'háfnio'
})

rf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Este elemento é altamente radioativo, com a maioria dos seus isótopos com meias-vidas abaixo de 70 segundos. Consequentemente, este elemento não apresenta qualquer aplicação conhecida e pouco se conhece sobre ele. O elemento é o primeiro transactinídeo e se prevê que apresente propriedades químicas semelhantes ao elemento háfnio. Descoberto em 1964 por Albert Ghiorso.'

    icone.innerHTML = '<p id="indice">104</p>Rf'
    txtTh.innerText = 'rutherfórdio'
})

v.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Possui boa resistência à corrosão e coloração acinzentada. O elemento é majoritariamente utilizado na produção da liga ferrovanádio, que confere ao aço propriedades vantajosas, como maior resistência mecânica e à corrosão. Ele também é um importante catalisador para a indústria química, atuando em diversos processos industriais. Descoberto em 1801 por Andres Manuel Del Rio e Nils Gabriel Sefstrom.'

    icone.innerHTML = '<p id="indice">23</p>V'
    txtTh.innerText = 'Vanádio'
})

nb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Entre suas utilizações comerciais, podemos citar o uso em dispositivos médicos, como o marca-passo, pois suas ligas metálicas são fisiologicamente inertes e com características hipoalergênicas. Por esse motivo, também é utilizado em fabricação de joias. Também é utilizado na produção de fios de ímãs supercondutores empregados nas máquinas de ressonância magnética e até nos aceleradores de partículas. Descoberto em 1801 por Charles Hatchett.'

    icone.innerHTML = '<p id="indice">41</p>Nb'
    txtTh.innerText = 'nióbio'
})

ta.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Tais propriedades fazem o tântalo ser amplamente utilizado na fabricação de ligas metálicas, capacitores para telefones celulares e outros dispositivos eletrônicos, fornos de alta temperatura, além de próteses e outros equipamentos cirúrgicos. Seus compostos são utilizados em diversos setores da indústria, como o aeroespacial, o automobilístico, o de eletrônicos, entre outros. Descoberto em 1802 por Charles Hatchett.'

    icone.innerHTML = '<p id="indice">73</p>Ta'
    txtTh.innerText = 'tântalo'
})

db.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Este elemento não apresenta aplicações práticas e desconhecem-se as suas reações com o ar, a água, os halogéneos, os ácidos e as bases. É um elemento sintético, altamente radiativo, cujo isótopo mais estável é o Db-268 com uma meia-vida de 16 horas. Tem uma elevada estabilidade comparada com a dos seus elementos vizinhos da tabela periódica. Descoberta em 1967 por Albert Ghiorso.'

    icone.innerHTML = '<p id="indice">105</p>Db'
    txtTh.innerText = 'Dúbnio'
})

cr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Pode ser eletrodepositado sobre objetos, em um efeito conhecido como cromagem, que garante, além de beleza, grande resistência química. Os compostos de cromo também são utilizados em pigmentos e tintas, além de materiais refratários. Descoberto em 1780 por Nicolas-Louis Vauquelin.'

    icone.innerHTML = '<p id="indice">24</p>Cr'
    txtTh.innerText = 'Cromo'
})

mo.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Esse elemento é um importante agente de formação de ligas metálicas, visto que melhora consideravelmente as propriedades físicas e químicas das ligas em que está presente. Também tem papel fundamental no campo dos catalisadores. Outro ponto importante do molibdênio é a sua presença em enzimas essenciais para alguns sistemas biológicos, o que o torna um micronutriente necessário para o crescimento de plantas, principalmente as leguminosas. Descoberto em 1781 por Peter Jacob Hjelm.'

    icone.innerHTML = '<p id="indice">42</p>Mo'
    txtTh.innerText = 'molibdênio'
})

w.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tungstênio está presente em dois produtos de nosso cotidiano: as canetas esferográficas e as lâmpadas incandescentes (com filamentos). Contudo, na indústria, o tungstênio é muito utilizado na fabricação de ligas metálicas e como aditivo para o aço. Também está presente em joias e em janelas inteligentes, dispositivos que conseguem controlar a intensidade da luz solar que incide sobre um local, melhorando a eficiência energética. Descoberto em 1783 por Juan José D’Elhuyar e Fausto Elhuyar.'

    icone.innerHTML = '<p id="indice">74</p>W'
    txtTh.innerText = 'tungstênio'})

sg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Assim como acontece com outros elementos transactinídeos, há dificuldades para estudar o seabórgio de forma ampla. Isso porque é possível sintetizar apenas poucas quantidades, que possuem tempo de meia-vida muito pequeno, ou seja, são poucos átomos e eles se mantêm por poucos minutos. Descoberto em 1967 por Albert Ghiorso.'

    icone.innerHTML = '<p id="indice">106</p>Sg'
    txtTh.innerText = 'seabórgio'
})

mn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento muito utilizado na confecção do aço e também está presente nos eletrólitos das pilhas secas e alcalinas, além constar em um dos oxidantes mais usados da Química, o permanganato de potássio. É um elemento necessário para nossa dieta, sendo recomendados 2,3 mg/dia para adultos. Apesar de ter sido isolado no século XVIII, sua utilização já era feita pelo ser humano há muito mais tempo. Descoberto em 1774 por Johan Gottlieb Gahn.'

    icone.innerHTML = '<p id="indice">25</p>Mn'
    txtTh.innerText = 'manganês'
})

tc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Esse elemento tem grande utilização na medicina nuclear, visto que possui um isótopo capaz de produzir imagens utilizadas para o diagnóstico de tumores em diversos órgãos do corpo humano. Embora sua química não seja tão desenvolvida, o interesse nele se dá por causa da medicina nuclear. Descoberto em 1937 por Carlo Perrier e Emilio Segrè.'

    icone.innerHTML = '<p id="indice">43</p>Tc'
    txtTh.innerText = 'tecnécio'
})

re.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O rênio é utilizado, principalmente, como catalisador para o refino de petróleo e em ligas metálicas de alto desempenho, com grande resistência à temperatura. Tais ligas podem ser utilizadas na fabricação de termopares (sensores para medição de temperatura), filamentos de flashes fotográficos e também em espectrômetros de massa, aparelho utilizado para detectar, identificar e quantificar moléculas por meio de sua massa. Descoberto em 1925 por Otto Berg, Walter Noddack e Ida Noddack.'

    icone.innerHTML = '<p id="indice">75</p>Re'
    txtTh.innerText = 'rênio'
})

bh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento radioativo. São conhecidos seis isótopos desse elemento, sendo o de massa 267 o mais estável, com cerca de 17 segundos de tempo de meia-vida (o tempo necessário para que a quantidade do elemento caia pela metade). O bóhrio sofre do mesmo problema dos demais transactinídeos: a baixa taxa de produção, seja em quantidade, seja em velocidade. Descoberto em 1981 por Peter Armbruster e Gottfried Munzenburg.'

    icone.innerHTML = '<p id="indice">107</p>Bh'
    txtTh.innerText = 'bóhrio'
})

fe.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É o metal mais utilizado no mundo, sendo conhecido há milhares de anos. Sua utilização é tão extensa que existe um campo da metalurgia só para estudar a produção de ferro e seus compostos: a siderurgia. Dele se faz o aço, a liga metálica mais utilizada no planeta. É a principal substância metálica produzida no Brasil, tendo uma participação superior a 70% no valor total de produção de metais. Sua versatilidade e ampla utilização se devem ao seu baixo custo, alta disponibilidade e boa resistência mecânica. Descoberto em 1500 a.C por Gregos.'

    icone.innerHTML = '<p id="indice">26</p>Fe'
    txtTh.innerText = 'ferro'
})

ru.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Ele é usado em ligas metálicas para aumentar suas propriedades mecânicas e também melhorar sua proteção anticorrosiva. Além disso, o rutênio e seus compostos vêm sendo empregados em reações químicas modernas e também no desenvolvimento de células solares mais baratas. Descoberto em 1844 por  Karl Karlovitch Klaus.'

    icone.innerHTML = '<p id="indice">44</p>Ru'
    txtTh.innerText = 'rutênio'
})

os.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O ósmio é o elemento estável mais raro da crosta terrestre e, por conta disso, a sua produção e seus usos são bem limitados. Mesmo assim, o ósmio pode ser utilizado como melhorador de ligas metálicas, bem como na produção de pontas de canetas-tinteiro. O OsO4, tetróxido de ósmio, possui ampla utilização como contraste em microscópios e na detecção de digitais. Descoberto em 1803 por Smithson Tennant e William Hyde Wollaston.'

    icone.innerHTML = '<p id="indice">76</p>Os'
    txtTh.innerText = 'ósmio'
})

hs.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O hássio é um elemento sintético e o mais pesado do grupo 8. É considerado um transactinídeo, justamente porque aparece na Tabela Periódica após a série dos actinídeos. Como todos os transactinídeos, o hássio é um elemento radioativo e instável. Descoberto em 1984 por Peter Armbruster.'

    icone.innerHTML = '<p id="indice">108</p>Hs'
    txtTh.innerText = 'hássio'
})

co.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Estima-se que a humanidade se utiliza do cobalto há cerca de cinco mil anos com base na análise de cerâmicas egípcias e vidros pérsicos. Hoje em dia, os sais de cobalto ainda são utilizados na confecção de pigmentos para cerâmica, enquanto sua forma metálica é explorada na indústria metalúrgica para a produção de tipos de aço. Já os óxidos de cobalto podem ser utilizados como catalisadores na indústria química. Descoberto em 1735 por Georg Brandt.'

    icone.innerHTML = '<p id="indice">27</p>Co'
    txtTh.innerText = 'cobalto'
})

rh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'As principais características deste elemento são: metal duro, brilhante e de coloração prateada; sólido à temperatura ambiente; principal isótopo Rh103.As aplicações do Ródio vão desde conversões catalíticas nos automóveis, até catalisador em reações de hidrogenação, passando por recobrimento de fios de fibra óptica. Descobertas em 1803 por William Hyde Wollaston.'

    icone.innerHTML = '<p id="indice">45</p>Rh'
    txtTh.innerText = 'ródio'
})

ir.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O irídio, por conta de sua grande resistência à corrosão, já foi utilizado na confecção da barra padrão de metrô, constituída de 90% de platina e 10% de irídio, substituída em 1960 pela linha espectral do isótopo 86 do criptônio (Kr). É um metal que pode ser usado para confecção de ligas metálicas, como na liga IrOs, está aplicada na confecção de pontas de canetas. Além da resistência à corrosão, o Ir é muito conhecido por sua resistência térmica e, por isso, também é empregado na fabricação de componentes de motores e velas de ignição automotivas, as quais — apesar de mais caras — são reconhecidas por maior durabilidade e qualidade". Descoberto em 1803 por Smithson Tennant.'

    icone.innerHTML = '<p id="indice">77</p>Ir'
    txtTh.innerText = 'irídio'
})

mt.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Este novo elemento foi produzido pela fusão de átomos de ferro-58 e átomos de bismuto-209, que juntos produziam um neutrão.  Este elemento não apresenta aplicações práticas e desconhecem-se as suas reações com o ar, a água, os halogéneos, os ácidos e as bases. Descoberto em 1982 por Peter Armbruster e Gottfried Munzenburg.'

    icone.innerHTML = '<p id="indice">109</p>Mt'
    txtTh.innerText = 'Meitnério'
})

ni.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É utilizado na cunhagem de moedas e também para melhorar as propriedades dos metais e ligas em que se associa. Sua boa resistência à corrosão classifica-o como um ingrediente imprescindível para a fabricação de aço inoxidável. O Brasil produz níquel, extraído principalmente de Goiás, Pará e Bahia. O país lucrou cerca de 628 milhões de dólares com sua exportação no ano de 2019. Descoberto em 1751 por Axel Fredrik Cronstedt.'

    icone.innerHTML = '<p id="indice">28</p>Ni'
    txtTh.innerText = 'Níquel'
})

pd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um metal branco prateado parecido com a platina, não se oxida com o ar, e é o elemento do grupo da platina de menor densidade e menor ponto de fusão. É macio e dúctil quando aquecido, aumentando consideravelmente sua dureza e resistência quando trabalhado a frio. Descoberto em 1803 por William Hyde Wollaston.'

    icone.innerHTML = '<p id="indice">46</p>Pd'
    txtTh.innerText = 'paládio'
})

pt.addEventListener('mouseover',()=>{
    texto.innerHTML = 'A platina é um catalisador essencial na indústria automobilística, reduzindo a emissão de gases prejudiciais nos sistemas de exaustão dos veículos. Além disso, ela também desempenha um papel importante na quebra de hidrocarbonetos no refino de petróleo e como catalisador na produção de ácido sulfúrico quando está finamente dividida. Descoberto em 1735 por Antonio de Ulloa.'

    icone.innerHTML = '<p id="indice">78</p>Pt'
    txtTh.innerText = 'platina'
})

ds.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Este novo elemento foi produzido pela fusão de átomos de níquel e átomos de chumbo. Este processo foi realizado acelerando os átomos de níquel até uma elevada energia. Descoberto em 1944 por Sigurd Hofmann.'

    icone.innerHTML = '<p id="indice">110</p>Ds'
    txtTh.innerText = 'darmstádtio'
})

cu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Utiliza-se cobre na confecção de diversas ligas metálicas, tais como bronze e latão, além da produção de moedas, fios, conectores eletrônicos, tubulação de água e vapor, entre outros produtos. O cobre desempenha um papel muito importante em nossa biologia, sendo um elemento traço de grande necessidade. Descoberto em 9000 a.C por Egípcios.'

    icone.innerHTML = '<p id="indice">29</p>Cu'
    txtTh.innerText = 'cobre'
})

ag.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Elemento versátil e valioso que desempenha um papel importante em várias indústrias e tem uma rica história cultural. Suas propriedades físicas e químicas únicas a tornam um metal de grande importância em uma ampla gama de aplicações, utilizada para a produção de joias em geral, objetos decorativos e fabricação de talheres. Descoberto em 3000 a.C por Turcos.'

    icone.innerHTML = '<p id="indice">47</p>Ag'
    txtTh.innerText = 'prata'
})

au.addEventListener('mouseover',()=>{
    texto.innerHTML = ' O ouro é um metal de coloração dourada, de aspecto brilhante, resistente à corrosão, dúctil e maleável. Sua beleza fez desse metal um dos mais cobiçados ao longo da história da humanidade, seja por importância econômica, seja por questões religiosas e esotéricas. É considerado o mais nobre dos metais, embora não seja o mais caro nas cotações atuais. Descoberto em 2600 a.C por Egípcios.'

    icone.innerHTML = '<p id="indice">79</p>Au'
    txtTh.innerText = 'ouro'
})

rg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento sintético, transurânico, radioativo, cujo único isótopo conhecido apresenta meia-vida em torno de 15 milissegundos, decaindo em meitnério-268. Devido a sua presença no grupo 11 da tabela periódica é um metal de transição, provavelmente metálico e sólido. Foi descoberto em 1994 por Sigurd Hofmann'

    icone.innerHTML = '<p id="indice">111</p>Rg'
    txtTh.innerText = 'roentgênio'
})

zn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É muito empregado no processo de galvanização, que consiste na criação de uma capa de zinco sobre peças metálicas, de modo a melhorar sua resistência à corrosão. Nosso corpo possui boa quantidade de zinco, sendo este um elemento indispensável para a manutenção de nossa saúde, estando presente em enzimas e auxiliando no bom funcionamento do sistema imunológico. Foi descoberto em 1746 por Andreas Maggraf '

    icone.innerHTML = '<p id="indice">30</p>Zn'
    txtTh.innerText = 'zinco'
})

cd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O cádmio e seus compostos são tóxicos, e ele é considerado um metal pesado. Por isso, pessoas que manipulam esse elemento devem ter cuidado para não desenvolver doenças ou problemas graves de saúde. Foi descoberto em 1817 por Friedrich Stromeyer'

    icone.innerHTML = '<p id="indice">48</p>Cd'
    txtTh.innerText = 'cádmio'
})

hg.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Esse elemento é empregado na fabricação de monômeros de cloreto de vinila, para a produção de PVC, assim como na mineração artesanal do ouro. Entre outros usos, embora cada vez menores por conta das regulações, está a produção de instrumentos de aferição, amálgamas dentárias, lâmpadas, baterias e catalisadores. O mercúrio foi o responsável pelo desastre conhecido como Doença de Minamata, que culminou em uma convenção que regulou drasticamente o seu uso. Foi descoberto em 1.500 A.C pelos Egípcios'

    icone.innerHTML = '<p id="indice">80</p>Hg'
    txtTh.innerText = 'Mercúrio'
})

cn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento superpesado, radioativo, e seus isótopos se deterioram através da emissão alfa ou de fissão espontânea com meia-vida extremamente curta. Alguns pesquisadores lhe atribuíram o nome de "eka-mercúrio" devido a algumas semelhanças com este elemento. É, provavelmente, metálico, líquido, de aspecto prateado. O copernício é previsto para ter um baixo ponto de fusão e de ebulição e ser altamente volátil à temperatura ambiente. Descoberto em 1996 por Sigurd Hofmann'

    icone.innerHTML = '<p id="indice">112</p>Cn'
    txtTh.innerText = 'copernício'
})

/*Classe de Semimetais*/
b.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um semicondutor pouco reativo, leve, que agrega a materiais, como ligas de aço e vidros, resistência mecânica e resistência à corrosão, sendo assim empregado em equipamentos aeroespaciais, construção civil, e artigos esportivos. Desempenha importantes funções no metabolismo vegetal e animal, atua em, pelo menos, 26 enzimas dos vegetais, e, no corpo humano, auxilia na absorção de cálcio, magnésio e fósforo. Foi descoberto em 1808 por Joseph Louis Gay-Lussac, Louis-Jacques Thenard e Humphry Davy'

    icone.innerHTML = '<p id="indice">5</p>B'
    txtTh.innerText = 'boro'})

si.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O silício é elemento do grupo do carbono que, por algumas classificações periódicas, pode ser considerado como um ametal, contudo é comumente tratado como um semimetal, dadas as suas propriedades de semicondutibilidade. Em sua forma cristalina, apresenta um brilho metálico e também uma coloração acinzentada. Foi descoberto em 1824 por Jons Jacob Berzelius'

    icone.innerHTML = '<p id="indice">14</p>Si'
    txtTh.innerText = 'silício'
})

ge.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O germânio é um elemento metálico de número atômico 32, caracterizado por sua natureza semicondutora e sua contribuição histórica para a eletrônica, especialmente nos primeiros transistores de germânio. Embora tenha perdido importância para o silício na eletrônica moderna, o germânio é utilizado em aplicações ópticas, lentes infravermelhas e pesquisa, além de ter potencial em células solares de terceira geração. Foi descoberto em 1886 por Clemens Alexander Winkler'

    icone.innerHTML = '<p id="indice">32</p>Ge'
    txtTh.innerText = 'germânio'
})

as.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Em sua forma pura mais estável, apresenta coloração cinza, sendo quebradiço e cristalino. É um elemento amplamente conhecido por sua grande toxicidade. Estima-se que 130 mg de arsênio são suficientes para serem fatais ao ser humano. Não à toa, foi um dos venenos mais usados na humanidade. Contudo, o arsênio é bastante utilizado por conta de suas propriedades semicondutoras, estando presente em células solares e LEDs, e sendo muito útil para o ramo de telecomunicações. É um elemento que quimicamente se assemelha mais aos elementos mais pesados do grupo 15, como bismuto (Bi) e antimônio (Sb). Foi descoberto em 1250 por Saint Albertus Magnus '

    icone.innerHTML = '<p id="indice">33</p>As'
    txtTh.innerText = 'arsênio'
})

sb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Ao longo da história, o antimônio teve usos importantes. Os antigos egípcios e os primeiros hindus utilizavam a estibina para produção de maquiagem preta para os olhos há cerca de 5000 anos. Além disso, alquimistas acreditavam que o antimônio seria capaz de converter o chumbo em ouro. Atualmente, contudo, o antimônio tem seu principal uso na confecção de baterias chumbo-ácido, muito utilizadas em automóveis. O teor de antimônio em ligas com chumbo varia de 4 a 6% em massa. Foi descoberto em 1.600 A.C na China'

    icone.innerHTML = '<p id="indice">51</p>Sb'
    txtTh.innerText = 'antimônio'
})

te.addEventListener('mouseover',()=>{
    texto.innerHTML = 'A indústria que mais consome telúrio é a metalúrgica, pois esse elemento é importante em ligas para ferros fundidos, aços inoxidáveis, ligas de cobre e chumbo. Ele é aplicado em pequenas quantidades em alguns aços e em chumbo, para aumentar a resistência mecânica desses elementos. Sua química é similar à do enxofre, embora tenha muitas propriedades do metal. Foi descoberto em 1783 por Franz-Joseph Muller von Reichenstein'

    icone.innerHTML = '<p id="indice">52</p>Ta'
    txtTh.innerText = 'telúrio'
})

po.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Entre os usos encontrados para o polônio na indústria, destacam-se a eliminação de eletricidade estática gerada na laminação de papel, na manufatura de laminados plásticos e na fiação de fibras sintéticas. Além disso, pequenas quantidades adicionadas as velas (eletrodos de ignição de motores de combustão interna) melhoram o desempenho destes dispositivos. O polônio quando misturado ou em liga com o berílio pode ser empregado como uma fonte de nêutrons. Descoberto em 1898 por Marie Curie'

    icone.innerHTML = '<p id="indice">84</p>Po'
    txtTh.innerText = 'polônio'
})

/*Classe de Outros metais*/
al.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O alumínio é um elemento metálico muito abundante na crosta terrestre e suas características de resistência, leveza e condutividade elétrica fazem com que seja amplamente utilizado na engenharia aeronáutica, na construção de navios, pontes, automóveis, etc. Foi descoberto em 1825 por Hans Christian Oersted'

    icone.innerHTML = '<p id="indice">13</p>Al'
    txtTh.innerText = 'alumínio'
})

ga.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O gálio (Ga) é um elemento metálico com baixo ponto de fusão e alta condutividade elétrica. É usado em aplicações como termômetros e em eletrônicos de alta tecnologia, como circuitos integrados e lasers. Também é encontrado como subproduto da mineração de metais e tem várias aplicações industriais e tecnológicas. Foi descoberto em 1875 por Paul-Émile Lecoq de Boisbaudran '

    icone.innerHTML = '<p id="indice">31</p>Ga'
    txtTh.innerText = 'Gálio'
})

In.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O índio (In) é um elemento metálico que é usado em aplicações de alta tecnologia, como telas sensíveis ao toque, painéis solares e semicondutores. É obtido principalmente como subproduto da mineração de zinco e chumbo. Sua característica de ser um semicondutor torna-o valioso em dispositivos eletrônicos modernos e em tecnologias de energia renovável. Foi descoberto em 1863 por Ferdinand Reich e Hieronymus Theodor Ritcher'

    icone.innerHTML = '<p id="indice">49</p>In'
    txtTh.innerText = 'índio'
})

tl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O tálio é altamente tóxico, por isso era usado como produto para matar ratos e insetos. Há indícios de que cause câncer em seres humanos. Atualmente é usado em detectores de radiação infravermelha, radiação gama, e em medicina nuclear. É encontrado e obtido a partir do mineral pirita e, também, é obtido como subproduto de minérios de chumbo e zinco. Foi descoberto em 1761 por William Crookes'

    icone.innerHTML = '<p id="indice">81</p>Tl'
    txtTh.innerText = 'tálio'
})

nh.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O elemento químico nipónio, representado pelo símbolo Nh e com número atômico 113, é um elemento superpesado que foi sintetizado em laboratório por cientistas japoneses em 2004. O nipónio é altamente instável e tem uma vida média extremamente curta, o que torna seu estudo e uso em aplicações práticas extremamente desafiadores. Até o meu conhecimento ser atualizado pela última vez em setembro de 2021, as pesquisas sobre o nipónio estavam em andamento, mas ainda não havia aplicações práticas conhecidas para esse elemento. Foi sintetizado em Laboratório pela primeiravez em 2004, no japão'

    icone.innerHTML = '<p id="indice">113</p>Nh'
    txtTh.innerText = 'nipónio'
})

sn.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É considerado por alguns autores como um metal pesado, e alguns de seus compostos possuem certa toxicidade. Além dos usos já citados, o estanho é empregado na fabricação de folhas de flandres, soldas, outras ligas metálicas, como o peltre, produtos químicos em geral e outras aplicações de menor importância. Usos mais modernos, como fabricação de painéis de celulares, computadores e televisores, sensíveis ao toque, têm ajudado no aumento da demanda por estanho. Ffoi descoberto em 3.500 A.C pelos Gregos'

    icone.innerHTML = '<p id="indice">50</p>Sn'
    txtTh.innerText = 'estanho'
})

pb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O Chumbo, conhecido por suas propriedades de alta densidade, baixa reatividade química e maleabilidade. O chumbo tem uma longa história de uso na sociedade, desde a antiguidade, em aplicações como tubulações, moedas e proteção contra radiação. No entanto, também é tóxico para os seres humanos e o meio ambiente, o que levou a restrições em seu uso em produtos como tintas e combustíveis. Hoje em dia, o chumbo ainda é usado em algumas aplicações industriais, como baterias automotivas e na fabricação de munições, mas seu uso foi significativamente reduzido devido a preocupações com a saúde pública. Sua data de descobrimento e "descobridor" são desconhecidas'

    icone.innerHTML = '<p id="indice">82</p>Pb'
    txtTh.innerText = 'chumbo'
})

fl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento transurânico, radioativo, provavelmente metálico, sólido e de aspecto prateado. Foi sintetizado por uma equipe de cientistas russos da cidade russa de Dubna. Junto com o moscóvio toma parte da denominada "ilha de estabilidade", cujos elementos químicos, teoricamente, deveriam ser mais estáveis do que aqueles que os rodeiam. Descoberto em 1998 por Sigurd Hofmann.'

    icone.innerHTML = '<p id="indice">114</p>Fl'
    txtTh.innerText = 'Fleróvio'
})

bi.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O bismuto é empregado em ligas metálicas, assim como na indústria de cosméticos e em medicamentos. É muito conhecido pela sua propriedade diamagnética e é um dos poucos materiais que se expandem ao solidificar-se (tal qual a água). É encontrado na forma de sulfetos ou óxidos, mas também na forma de cristais elementares, que formam pequenas camadas de óxidos na superfície e refletem tonalidades furta-cor. Descoberto em 1753 por Claude François Geoffroy.'

    icone.innerHTML = '<p id="indice">83</p>Bi'
    txtTh.innerText = 'bismuto'
})

mc.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Foi produzido inicialmente, em 2003, por meio do trabalho conjunto de cientistas russos e norte-americanos. Mesmo assim, quase 20 anos após sua síntese inicial, suas propriedades básicas ainda estão sendo determinadas. Desse modo, muito se especula e pouco se sabe sobre as suas propriedades. Descoberto em 2004 por Yuri Oganessian.'

    icone.innerHTML = '<p id="indice">115</p>Mc'
    txtTh.innerText = 'moscóvio'
})

lv.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento transurânico, radioativo, superpesado, provavelmente metálico, sólido e com aspecto prateado. Por sua instabilidade, reduzido tempo de meia-vida e dificuldade de coleta, não existem aplicação industriais ou comerciais para este elemento e sua implementação é relegada apenas para pesquisa científica. Descoberto em 2000 por Yuri Oganessian.'

    icone.innerHTML = '<p id="indice">116</p>Lv'
    txtTh.innerText = 'livermório'
})

/*Classe de Halogenios*/
f.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Quando puro, apresenta-se como um gás diatômico de coloração amarelo-clara e odor característico. O flúor é um elemento extremamente reativo, corrosivo, tóxico e o mais eletronegativo entre todos os elementos da Tabela Periódica. É bastante distribuído na crosta terrestre, tendo a fluorita como principal fonte mineral. É obtido por meio da oxidação eletrolítica do fluoreto de potássio e é majoritariamente empregado para a produção do combustível nuclear UF6. Também é usado em cremes dentais e na preparação do teflon, entre outros usos. Descoberto em 1886 por Henri Moissan.'

    icone.innerHTML = '<p id="indice">9</p>F'
    txtTh.innerText = 'Flúor'})

cl.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um gás de coloração amarelo-esverdeada que se torna líquido ao ser resfriado até a temperatura de -34 °C. É bastante reativo, irritante e possui apenas dois isótopos naturais: os de massa 35 e 37. Compostos de cloro podem ser utilizados como intermediários para a produção de diversos compostos essenciais para nosso coditiano, como polímeros, resinas, medicamentos, entre outros. Alguns compostos de cloro são tóxicos, e as primeiras armas químicas utilizadas continham compostos de cloro. Descoberto em 1774 por Carl Wilhelm Scheele.'

    icone.innerHTML = '<p id="indice">17</p>Cl'
    txtTh.innerText = 'cloro'
})

br.addEventListener('mouseover',()=>{
    texto.innerHTML = 'À temperatura ambiente, o bromo encontra-se no estado líquido. É vermelho, volátil e denso. Sua reatividade é intermediária entre a do cloro e a do iodo. No estado líquido é perigoso para o tecido humano e seus vapores irritam os olhos e a garganta. Descoberto em 1826 por Carl Jacob Lowig e Antoine Jerome Balard.'

    icone.innerHTML = '<p id="indice">35</p>Br'
    txtTh.innerText = 'bromo'
})

i.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O iodo à temperatura ambiente é um sólido negro e lustroso, que possui leve brilho metálico, se sofrer evaporação se transforma em um gás de coloração violeta e odor irritante. O iodo é um elemento indispensável ao funcionamento do organismo de mamíferos. Esse mineral participa na formação de dois hormônios da glândula tireóide (tiroxina e triiodotiroxina). A falta de iodo em crianças, decorrente da má alimentação da mãe durante a gestação, pode levar a danos cerebrais. Descoberto em 1811 por Bernard Courtois.'

    icone.innerHTML = '<p id="indice">53</p>I'
    txtTh.innerText = 'iodo'})

at.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Este elemento altamente radioativo comporta-se quimicamente como os demais halogênios, especialmente como o iodo. O ástato tem caráter mais metálico que o iodo. Pesquisadores do Laboratório Nacional de Brookhaven identificaram as reações e as medidas elementares que envolvem o ástato. A maioria das características do ástato são conhecidos através dos seus isótopos sintéticos. Descoberto em 1940 por Dale R. Corson.'

    icone.innerHTML = '<p id="indice">85</p>At'
    txtTh.innerText = 'ástato'
})

ts.addEventListener('mouseover',()=>{
    texto.innerHTML = 'As propriedades do tenesso ainda estão sendo estudadas por meio da química teórica e dos cálculos matemáticos, tendo em vista sua baixa taxa de produção. Sua produção se dá pela reação entre o 48Ca e o 249Bk, sendo possível produzir o isótopo 294 ou 293 do elemento. O nome faz referência ao estado norte-americano do Tennessee, local de origem de alguns cientistas envolvidos na descoberta e também da produção do isótopo 249Bk, tão importante para a síntese desse novo elemento. Descoberto em 2010 por Yuri Oganessian.'

    icone.innerHTML = '<p id="indice">117</p>Ts'
    txtTh.innerText = 'tenesso'
})

/*Classe de Lantanideos*/
la.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O lantânio é maleável, dúctil, e mole bastante para ser cortado com uma faca. É um dos mais reativos entre os elementos terras raras. O metal reage diretamente como os elementos carbono, nitrogênio, boro, selênio, silício, fósforo, enxofre, e com halogênios. Oxida rapidamente quanto exposto ao ar. A água fria ataca lentamente o lantânio, enquanto a água quente ataca muito mais rapidamente. Descoberto em 1839 por Carl Gustaf Mosander.'

    icone.innerHTML = '<p id="indice">57</p>La'
    txtTh.innerText = 'lantânio'
})

ce.addEventListener('mouseover',()=>{
    texto.innerHTML = 'A indústria de vidros utiliza o cério para vários usos, como em polimento, descoloração e pigmentação. O elemento também possui aplicação no campo dos catalisadores, como no controle da emissão automotiva, tratamento de rejeitos líquidos, craqueamento do petróleo e diversos processos orgânicos. Descoberto em 1803 por Jöns Jacob Berzelius e Wilhelm Hisinger.'

    icone.innerHTML = '<p id="indice">58</p>Ce'
    txtTh.innerText = 'cério'
})

pr.addEventListener('mouseover',()=>{
    texto.innerHTML = ' O praseodímio é um elemento metálico prateado, macio pertencente aos lantanídios. É mais resistente a corrosão no ar do que o európio, lantânio, cério ou o neodímio, porém desenvolve um óxido verde que reveste o metal quando exposto ao ar, expondo o metal ainda mais a oxidação. Por essa razão, o praseodímio deve ser armazenado imerso em óleo mineral ou selado em plástico ou vidro. O praseodímio é usado como núcleo nas lâmpadas de arco de carbono para a indústria cinematográfica, para iluminação de estúdios e projetores. Descoberto em 1885 por Baron Carl Auer von Welsbach.'

    icone.innerHTML = '<p id="indice">59</p>Pr'
    txtTh.innerText = 'praseodímio'
})

nd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um metal branco prateado levemente acinzentado, é maleável e dúctil além de resistente a ação de agentes químicos quando este está presente em ligas metálicas. Na indústria de equipamento cinematográfico como componente de luzes e refletores para iluminação; Descoberto em 1885 por Baron Carl Auer von Welsbach.'

    icone.innerHTML = '<p id="indice">60</p>Nd'
    txtTh.innerText = 'neodímio'
})

pm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O promécio é um leve emissor de partículas betas, porém não emite radiações gama. Porém, pode ocorrer emissão de raios-X quando as partículas betas atingem elementos com números atômicos mais altos. Pouco é conhecido sobre as propriedades químicas e físicas do promécio metálico, porém são semelhantes ao neodímio e samário. O promécio apresenta duas variedades alotrópicas. Sais deste metal apresentam luminescência na obscuridade com um fulgor azul ou acinzentado pálido devido à sua elevada radioatividade. Descoberto em 1945 por Jacob A. Mar9nsky, Lawrence Glendenin e Charles D. Coryell.'

    icone.innerHTML = '<p id="indice">61</p>Pm'
    txtTh.innerText = 'promécio'
})

sm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O samário é principalmente empregado na produção de ímãs permanentes, na forma da liga samário e cobalto, SmCo. É um ímã que mantém suas propriedades magnéticas em boas temperaturas, com preço acessível e sendo resistente à corrosão. Também é aplicado como hastes de controle de nêutrons em reatores nucleares. Descoberto em 1879 por Paul-Émile Lecoq de Boisbaudran.'

    icone.innerHTML = '<p id="indice">62</p>Sm'
    txtTh.innerText = 'samário'
})

eu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É o mais reativo dos elementos terras raras; oxida-se rapidamente com o ar, e assemelha-se ao cálcio na sua reação com a água. Como outras terras raras (a exceção do lantânio), o európio inflama-se com o ar entre 150 °C e 180 °C, aproximadamente. Apresenta uma ductilidade muito alta e é aproximadamente tão duro quanto o chumbo. Tem um magnetismo elevado, em condições normais de temperatura e pressão. Cientista demonstraram que este elemento possui supercondutividade a temperaturas de –271,35 ºC e pressões de 80 gigapascal. Descoberto em 1901 por Eugène Anatole Demarcay.'

    icone.innerHTML = '<p id="indice">63</p>Eu'
    txtTh.innerText = 'európio'
})

gd.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Branco prateado, maleável, dúctil com um brilho metálico. Cristaliza na forma hexagonal que é a forma alfa, à temperatura ambiente. Quando aquecido a 1508 K transforma-se na sua forma beta, que é uma estrutura cristalina cúbica de corpo centrado. Descoberto em 1880 por Jean-Charles-Galinard de Marignac.'

    icone.innerHTML = '<p id="indice">64</p>Gd'
    txtTh.innerText = 'gadolínio'
})

tb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O térbio é um metal terra rara, cinza-prateado, que é maleável e dúctil. É macio o bastante para ser cortado com uma faca. É razoavelmente estável no ar, apresentando duas formas cristalinas com uma temperatura de transformação de 1289 °C. É utilizado para dopar fluoreto de cálcio, tungstato de cálcio e molibdato de estrôncio, materiais que são usados em dispositivos semicondutores. Descoberto em 1843 por Carl Gustaf Mosander.'

    icone.innerHTML = '<p id="indice">65</p>Tb'
    txtTh.innerText = 'térbio'
})

dy.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Em função do alto ponto de fusão e inércia química, o disprósio é utilizado na metalurgia de aços inoxidáveis especiais para fabricação de revestimentos para reatores nucleares, e na fabricação de equipamentos resistentes a altas temperaturas. Forma liga com o níquel que é utilizado em sistemas de refrigeração para reatores nucleares, além de possuir capacidade de absorção de nêutrons. Descoberto em 1886 por Paul-Émile Lecoq de Boisbaudran.'

    icone.innerHTML = '<p id="indice">66</p>Dy'
    txtTh.innerText = 'disprósio'
})

ho.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O hólmio é um metal macio, maleável, razoavelmente resistente à corrosão e estável no ar seco nas condições normais de pressão e temperatura. Entretanto, no ar úmido e temperaturas mais elevadas, oxida-se rapidamente formando um óxido. Na forma pura, o hólmio apresenta um aspecto metálico, prateado e brilhante. Descoberto em 1878 por J. L. Soret e M. Delafontaine.'

    icone.innerHTML = '<p id="indice">67</p>Ho'
    txtTh.innerText = 'hólmio'
})

er.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento metálico trivalente que na forma pura é maleável, macio, relativamente estável no ar, não oxidando tão rapidamente quanto alguns outros metais terras raras. Seus sais são coloridos (rosa) , e o elemento tem faixas de absorção espectral no visível, ultravioleta e próximo do infravermelho que, associado com a sua configuração electrónica lhe confere cores pastéis muito bonitas. Descoberto em 1842 por Carl Gustaf Mosander.'

    icone.innerHTML = '<p id="indice">68</p>Er'
    txtTh.innerText = 'érbio'
})

tm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Ele é empregado em pequenas quantidades no campo médico, por exemplo, como agente dopante na granada de ítrio e alumínio (Y3Al5O12), mineral utilizado em cirurgias a laser. Descoberto em 1879 por Per Teodor Cleve.'

    icone.innerHTML = '<p id="indice">69</p>Tm'
    txtTh.innerText = 'túlio'
})

yb.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O itérbio é um elemento de poucas utilizações, porém pode ser aplicado como melhorador do aço inoxidável, em aparelhos portáteis de raios-X e na composição de relógios atômicos. Sua produção se dá por redução metalotérmica, empregando-se o lantânio como metal redutor. Descoberto em 1878 por Jean-Charles-Galinard de Marignac.'

    icone.innerHTML = '<p id="indice">70</p>Yb'
    txtTh.innerText = 'itérbio'
})

lu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Na sua forma metálica, apresenta coloração branca acinzentada e resiste bem à corrosão. Em solução, como os demais lantanídeos, o lutécio adota o número de oxidação igual a +3. Embora os lantanídeos tenham ampla utilização em setores econômicos que estão crescendo bastante, o lutécio ainda tem aplicações restritas, como na fabricação de lasers, instrumentos ópticos, cerâmicas e em tratamentos experimentais para casos graves de câncer. Descoberto em 1907 por Georges Urbain e Charles James.'

    icone.innerHTML = '<p id="indice">71</p>Lu'
    txtTh.innerText = 'lutécio'
})

/*Classe de Actinidios*/
ac.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Suas aplicações ainda são restritas, mas se sabe que ele pode ser utilizado como fonte energética para espaçonaves e dispositivos que trabalham em regiões remotas, assim como o actínio-225 é um potencial candidato para o tratamento de alguns tipos de câncer. Descoberto em 1899 por André-Louis Debierne.'

    icone.innerHTML = '<p id="indice">89</p>Ac'
    txtTh.innerText = 'actínio'
})

th.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Se destaca por sua boa resistência térmica, o que o habilita para espaçonaves e mísseis. O óxido de tório, ThO2, é o de maior ponto de fusão, além de ter um alto índice de refração. O tório também vem sendo estudado como combustível para usinas nucleares, cuja aplicação apresenta vantagens sobre o urânio convencionalmente usado. Descoberto em 1829 por Jons Jacob Berzelius.'

    icone.innerHTML = '<p id="indice">90</p>Th'
    txtTh.innerText = 'Tório'
})

pa.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Entre as poucas aplicações conhecidas, destaca-se que o protactínio já foi utilizado em cintiladores para detecção de raios X. Também já foi usado para datação de objetos antigos. Descoberto em 1913 por Oswald Helmuth Gohring.'

    icone.innerHTML = '<p id="indice">91</p>Pa'
    txtTh.innerText = 'protactínio'
})

u.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O urânio tem grande importância para a geração de energia, pois sua propriedade radioativa faz com que ele gere grandes quantidades energéticas durante os processos de fissão nuclear que ocorrem nas usinas. A energia nuclear tem grandes vantagens, não só por precisar de pouco combustível, mas porque não emite gases tóxicos e poluentes, como os de combustíveis fósseis. Contudo, toda essa capacidade energética já fez com que o elemento fosse utilizado em armas de grande destruição. Descoberto em 1789 por Martin Heinrich Klaproth.'

    icone.innerHTML = '<p id="indice">92</p>U'
    txtTh.innerText = 'urânio'})

np.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento metálico, radioativo, prateado, pertencente à série dos elementos de transição interna, sendo o primeiro elemento transurânico sintético. Seu isótopo mais estável, Np-237, é um subproduto de reatores nucleares e produção de plutônio. Pode ser usado na composição de equipamentos para a detecção de nêutrons e como combustível nuclear. Descoberto em 1940 por Edwin McMilan e Philip Hauge Abelson.'

    icone.innerHTML = '<p id="indice">93</p>Np'
    txtTh.innerText = 'neptúnio'
})

pu.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O nome plutónio deriva do nome do planeta Plutão. O isótopo de massa atómica 239 utiliza-se como combustível para reatores nucleares e no fabrico de bombas atómicas. Descoberto em 1940 por Arthur C. Wahl, Glenn Seaborg e Joseph William Kennedy.'

    icone.innerHTML = '<p id="indice">94</p>Pu'
    txtTh.innerText = 'plutônio'
})

am.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Por incrível que pareça, o amerício é um elemento radioativo que seria bom termos em casa. Isso porque o AmO2 é o componente chave de detectores de fumaça. Descoberto em 1944 por Ralph Arthur James.'

    icone.innerHTML = '<p id="indice">95</p>Am'
    txtTh.innerText = 'amerício'
})

cm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Aplicado em geração de energia termoelétrica em dispositivos, incluindo alguns modelos de marcapassos cardíacos. Muitos dos compostos de cúrio possuem uma cor amarelo-pálida. Se o cúrio penetrar no corpo humano, acumula-se nos ossos e, portanto, é muito tóxico, tal como a sua radiação que destrói o mecanismo de formação das células vermelhas da medula óssea. Descoberto em 1944 por Glenn Seaborg.'

    icone.innerHTML = '<p id="indice">96</p>Cm'
    txtTh.innerText = 'cúrio'
})

bk.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O nome berquélio deriva do inglês Berkeley. O berquélio é atacado pelo oxigénio, vapor e ácidos, mas não por bases. Desconhecem-se aplicações práticas. Descobertor em 1949 por Stanley Gerald Thompson.'

    icone.innerHTML = '<p id="indice">97</p>Bk'
    txtTh.innerText = 'berquélio'
})

cf.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O seu principal uso é como fonte de nêutrons para a análise do solo terrestre ou de outros planetas através de sondas espaciais. É o metal mais caro que pode ser comprado, custando aproximadamente US$ 27 milhões o grama e só pode ser comprado por uma organização internacional. Descoberto em 1950 - Berkeley por Glenn T. Seaborg, Stanley G. Thompson, Albert Ghiorso e Kenneth Street Jr.'

    icone.innerHTML = '<p id="indice">98</p>Cf'
    txtTh.innerText = 'califórnio'
})

es.addEventListener('mouseover',()=>{
    texto.innerHTML = 'O einstênio é um metal, sólido, de aspecto prateado, altamente radioativo, produzido artificialmente. Estudos de amostras de Es-253 demonstram que este elemento apresenta propriedades químicas típicas de um trivalente metal pesado. Descoberto em 1952 por Gregory R. Choppin.'

    icone.innerHTML = '<p id="indice">99</p>Es'
    txtTh.innerText = 'einstênio'
})

fm.addEventListener('mouseover',()=>{
    texto.innerHTML = 'É um elemento químico sólido, transurânico metálico preparado por síntese e radioativo, de cor branco-prateada ou acinzentada. Até hoje, o elemento só foi produzido em pequenas quantidades, por isso ainda não foi possível um estudo mais detalhado de suas propriedades. Descoberto em 1952 por Stanley Gerald Thompson.'

    icone.innerHTML = '<p id="indice">100</p>Fm'
    txtTh.innerText = 'férmio'
})

md.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Pesquisadores demonstraram que o mendelévio tem uma estabilidade moderada quando apresenta estado de oxidação dipositivo ( II ) além do estado de oxidação tripositivo (III) característico dos elementos actinídeos. O Md-256 foi usado para descobrir algumas propriedades químicas deste elemento, mesmo que em solução aquosa. Não há nenhum uso do mendelévio conhecido, mesmo porque apenas quantidades traços foram obtidas até agora. Descoberto em 1955 por Albert Ghiorso e Glenn Seaborg.'

    icone.innerHTML = '<p id="indice">101</p>Md'
    txtTh.innerText = 'mendelévio'
})

no.addEventListener('mouseover',()=>{
    texto.innerHTML = 'Pouco é conhecido sobre o nobélio, e somente quantidades pequenas deste elemento foram produzidas até agora. Fora do âmbito da pesquisa nenhum uso foi encontrado para este elemento. O isótopo mais estável, nobélio-259, tem uma meia-vida de 58 minutos, e decai para o férmio-255 por emissão alfa ou para mendelévio-259 por captura eletrônica. Descoberto em 1958 por Glenn Seaborg.'

    icone.innerHTML = '<p id="indice">102</p>No'
    txtTh.innerText = 'Nobélio'
})

lr.addEventListener('mouseover',()=>{
    texto.innerHTML = 'A aparência deste elemento é desconhecida, entretanto, é muito provável ser metálico, sólido, branco prateado ou cinza. Se quantidades suficientes de laurêncio forem produzidas apresentarão o perigo da radiação. Pouco é conhecido sobre as propriedades químicas deste elemento, porém trabalhos preliminares com alguns átomos indicaram que é semelhante aos actinídeos. Descoberto em 1961 por Torbjorn Sikkeland.'

    icone.innerHTML = '<p id="indice">103</p>Lr'
    txtTh.innerText = 'laurêncio'
})
