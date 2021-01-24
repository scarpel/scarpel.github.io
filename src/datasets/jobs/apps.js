const APPS = {
    "ada": {
        name: "ada.",
        description: "O TCC do meu curso de ciência da computação. É uma aplicação que visa tornar o dia a dia do usuário mais eficiênte. Possui três funcionalidades principais: news, shop e agenda.",
        tools: ["javascript", "html", "css", "python", "electron", "sqlite"],
        highlights: [
            {
                type: "img",
                url: "ada.jpg"
            }
        ],
        images: {
            squares: ["1.png", "2.png", "3.png", "4.png"]
        },
        topics: [
            [
                ["news", "Adicione seus sites de notícias e as categorias que mais acessa e leia as notícias mais recentes em um único feed. Adicione seus sites de notícias e as categorias que mais acessa e leia as notícias mais recentes em um único feed. Adicione seus sites de notícias e as categorias que mais acessa e leia as notícias mais recentes em um único feed. Adicione seus sites de notícias e as categorias que mais acessa e leia as notícias mais recentes em um único feed."],
                ["shop", "Adicione produtos que você deseja ficar de olho no preço, definindo qual o tempo entre atualizações do mesmo."],
                ["agenda", "Organize os eventos e afazeres do seu dia-a-dia de modo mais fácil e rápido através do quick agenda, comandos simples que permitem a adição, remoção e modificação de eventos e to-dos."]
            ]
        ]
    },
    "usersio": {
        name: "users.io",
        description: "Um site que utiliza as APIs do GitHub para visulizar mais facilmente as informações relativas aos usuários da plataforma. Eu o fiz só para praticar a criação de endpoints utilizando o Express.",
        tools: ["javascript", "html", "css", "react", "express"],
        highlights: [
            {
                type: "img",
                url: "users.jpg"
            },
            {
                type: "img",
                url: "bubbles.jpg"
            }
        ],
        images: {
            panoramas: ["1.png", "2.png", "3.png", "4.png"]
        },
        topics: [
            [
                ["O Site", "No site, o usuário pode visualizar os usuários do GitHub na ordem em que foram registrados no site através de uma lista ou cards, além de poderem selecionar o número de elementos por página. Ao selecionar um usuário, são exibidas algumas informações fornecidas pelo usuário juntamente com seus repositórios."],
                ["A API", "O GitHub fornece algumas APIs que possibilitam a extração de informações sobre os usuários e repositórios do site. Utilizando-as, eu criei alguns endpoints, que podem ser acessados através de /api e algumas das opções a seguir"]
            ],
            [
                ["users", "Retorna os usuários do GitHub, juntamente com algumas informações sobre eles, por ordem de criação. Pode receber dois parâmetros: since, que indica desde qual índice buscar os usuários, e per_page, que define a quantidade de usuários a serem buscados."],
                ["users/:username/details", "Retorna várias informações fornecidas pelo usuário em seu perfil do GitHub."],
                ["users/:username/repos", "Retorna as informações dos repositórios de um usuário."],
                ["/api/*", "Toda e qualquer requisição inválida ou que não seja as citadas acima são respondidas com o código 400 (Bad Request)."]
            ]
        ],
        links: [
            ["Repositório", "https://github.com/scarpel/users-io"],
            ["Website", "https://users-io.herokuapp.com/"]
        ]
    },
    "yobel": {
        name: "Yobel",
        description: "Um site de uma chocolateria que permite ao usuário montar seu ovo de páscoa perfeito, escolhendo desde o formato até quais os sabores dos bomboms que virão no mesmo.",
        tools: ["javascript", "html", "css", "react", "firebase"],
        highlights: [
            {
                type: "img",
                url: "yobel.jpg"
            }
        ],
        images: {
            squares: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
        },
        topics: [
            [
                ["O Problema", "O pessoal da Chocolateria entrou em contato comigo pois queriam 'modernizar' seu negócio de ovos de páscoa. Eles pensaram apenas em criar uma plataforma em que os clientes pudessem fazer seus pedidos de ovos de páscoa, uma vez que foi logo no começo da pandemia da COVID-19. Eu, então, sugeri uma espécie Tinder de 'Chernobly', onde os clientes pudessem escolher cada parte de seu ovo. Eles gostaram da ideia e fechamos o contrato."],
                ["A Solução", "A partir daí, desenvolvi o site utilizando React e o banco de dados NoSQL do Firebase, da Google. Fiquei bem orgulhoso da parte de customização do ovo, em que as etapas de customização se modificavam conforme as seleções prévias do usuário. A Chocolateria não queria nada muito complexo na hora do checkout, tanto que optaram por não permitir que seus usuários se cadastrassem no site, apenas finalizassem a compra utilizando o nome e telefone. Dessa forma, o processo não assustaria tanto pessoas que nunca fizeram uma compra online. Por fim, eu criei um painel de controle onde eles podem adicionar, remover ou modificar cada componente do ovo de páscoa, além de ter acesso aos pedidos, informações de clientes, etc."],
                ["O 'Design'", "Eu ODEIOOOOOOO o design desse site, o prazo curto para entrega (3 semanas) e minha (quase) completa inexperiência com web design geraram esse 'belo' site. Apesar disso, a Chocolateria gostou do resultado final e já negociamos para esse ano (2021) eu adicionar mais funcionalidades e, como terei mais tempo, conseguir refazer todo o design do site."]
            ]
        ],
        links: [
            ["Website", "https://yobel.com.br/"]
        ]
    },
    "istudent": {
        name: "iStudent",
        description: "Um aplicativo que ajuda o usuário a organizar sua vida estudantil, tornando-a mais fácil e eficiente.",
        tools: ["delphi", "sqlite"],
        highlights: [
            {
                type: "img",
                url: "phone.jpg"
            }
        ],
        images: {
            portraits: ["1.png", "2.png", "3.png", "4.png", "5.png"]
        },
        topics: [
            [
                ["O App", "O aplicativo foi feito utilizando o Delphi e Firemonkey. Possui quatro funcionalidades principais."],
                ["Agenda", "Permite que o usuário cadastre eventos tais como provas e trabalhos, além de informar qual seu nível de prioridade. Dessa forma, quanto maior seu nível, mais cedo o usuário receberá lembretes do mesmo."],
                ["Horário", "O usuário pode cadastrar sua grade horária para facilitar na hora de checá-la."],
                ["Notas", "Permite que o usuário adicione matérias e suas respectivas notas, separando-as por bimestres e mostrando um dados estatísticos baseados nas notas (no sistema da minha antiga escola)."],
                ["Bloco de Notas", "Um bloco de notas básico, onde o usuário pode ou não dar um título para as notas."]
            ]
        ]
    }
}

export default APPS