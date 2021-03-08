const APPS = {
    "ada": {
        name: "ada.",
        description: {
            br: "O TCC do meu curso de Ciência da Computação. É uma aplicação que visa tornar o dia a dia do usuário mais eficiênte. Possui três funcionalidades principais: news, shop e agenda.",
            en: "My undergraduate thesis for my bachelor in Computer Science. It's a app intented to make the user's daily life more efficient. It has three main functionalities: news, shop and agenda."
        },
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
        topics: {
            en: [
                [
                    ["news", "Add your favorites news websites and its categories to read all the news in a one single feed."],
                    ["shop", "Add the products you want to keep and eye on the price, deciding when the app should update the price."],
                    ["agenda", "Organize your daily events and to dos more quickly using quick agenda: simple commands that allow you to add, remove or modify events and to dos."]
                ]
            ],
            br: [
                [
                    ["news", "Adicione seus sites de notícias e as categorias que mais acessa e leia as notícias mais recentes em um único feed."],
                    ["shop", "Adicione produtos que você deseja ficar de olho no preço, definindo qual o tempo entre atualizações do mesmo."],
                    ["agenda", "Organize os eventos e afazeres do seu dia-a-dia de modo mais fácil e rápido através do quick agenda, comandos simples que permitem a adição, remoção e modificação de eventos e to-dos."]
                ]
            ]
        }
    },
    "usersio": {
        name: "users.io",
        description: {
            en: "A websites that uses GitHub Users API to visualize the users info more easily. I did it to pratice the creating of endpoints using Express with React.",
            br: "Um site que utiliza as APIs do GitHub para visulizar mais facilmente as informações relativas aos usuários da plataforma. Eu o fiz só para praticar a criação de endpoints utilizando o Express.",
        },
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
        topics: {
            en: [
                [
                    ["The Website", "The website allows the user to visualize all the users from Github in the order they signed up. This can be done using a list or cards, besides the user can choose the number of elements displayed per page. When selecting an user, their info are displayed along with their repositories."],
                    ["The API", "Github provides some APIs that allow the extraction of information about its users. Using it, I create some endpoints that can be accessed through /api along with one of the following options."]
                ],
                [
                    ["users", "Returns all users from Github, alognside with a few of their info, sorted by their sign up date. Can receive two parameters: since, that indicates the index of which user to start with, and per_page, that indicated the quantity of users to fetch starting from since."],
                    ["users/:username/details", "Returns the user's profile information provided by Github."],
                    ["users/:username/repos", "Returns the information about the user's repositories."],
                    ["/api/*", "Each and every invalid request or that wasn't mentioned above are responded with an 400 (Bad Request) status code."]
                ]
            ],
            br: [
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
            ]
        },
        links: [
            [{br:"Repositório", en: "Repository"}, "https://github.com/scarpel/users-io"],
            [{br: "Website", en: "Website"}, "https://users-io.herokuapp.com/"]
        ]
    },
    "yobel": {
        name: "Yobel",
        description: {
            en: "A website from a small local business that allows the user to create their own perfect chocolate egg, choosing from the shape of the egg to which flavor of goodies their want in it.",
            br: "Um site de uma chocolateria que permite ao usuário montar seu ovo de páscoa perfeito, escolhendo desde o formato até quais os sabores dos bomboms que virão no mesmo."
        },
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
        topics: {
            en: [
                [
                    ["The Problem", "The small local business contacted me because they wanted to modernize their chocolate egg business. They thought of creating a platform where their costumers could create their own chocolate egg, in a way of attracting more attention to the store. I, then, suggested to create like a Tinder, where the costumers could choose their eggs step by step, as easily as swiping on Tinder. They liked the idea and I started to create the website."],
                    ["The Solution", "I developed the website using React and Real Time Database provided by Firebase, from Google. I'm very proud of the customization I created, since they changed depending on the type of the chocolate egg. My client didn't want anything too complex, because they thought they'll lose costumers if so. Then, for checkout, they decided to don't allow the users to create an account and finish their order using only a phone number, which they would send a message to combine the day their costumers would pick up the order. Besided that, I create a simple CRUD for them to manage the egg info and see the orders."],
                    ["The 'Design'", "I HATEEEEE the design I've done for it. Since I had too little time, 3 weeks, I spend almost all of it focusing on the creation of the egg creator. Joining this with my (almost) complete inexperience with web design, the result was... peculiar. But, thankfully, they like the result and they want to keep me for next year (2021). I'll add new functionalities and remake that terrible design."]
                ]
            ],
            br: [
                [
                    ["O Problema", "O pessoal da Chocolateria entrou em contato comigo pois queriam 'modernizar' seu negócio de ovos de páscoa. Eles pensaram apenas em criar uma plataforma em que os clientes pudessem fazer seus pedidos de ovos de páscoa, uma vez que foi logo no começo da pandemia da COVID-19. Eu, então, sugeri uma espécie Tinder de 'Chernobly', onde os clientes pudessem escolher cada parte de seu ovo. Eles gostaram da ideia e fechamos o contrato."],
                    ["A Solução", "A partir daí, desenvolvi o site utilizando React e o banco de dados NoSQL do Firebase, da Google. Fiquei bem orgulhoso da parte de customização do ovo, em que as etapas de customização se modificavam conforme as seleções prévias do usuário. A Chocolateria não queria nada muito complexo na hora do checkout, tanto que optaram por não permitir que seus usuários se cadastrassem no site, apenas finalizassem a compra utilizando o nome e telefone. Dessa forma, o processo não assustaria tanto pessoas que nunca fizeram uma compra online. Por fim, eu criei um painel de controle onde eles podem adicionar, remover ou modificar cada componente do ovo de páscoa, além de ter acesso aos pedidos, informações de clientes, etc."],
                    ["O 'Design'", "Eu ODEIOOOOOOO o design desse site, o prazo curto para entrega (3 semanas) e minha (quase) completa inexperiência com web design geraram esse 'belo' site. Apesar disso, a Chocolateria gostou do resultado final e já negociamos para esse ano (2021) eu adicionar mais funcionalidades e, como terei mais tempo, conseguir refazer todo o design do site."]
                ]
            ]
        },
        links: [
            [{en:"Website", br: "Website"}, "https://yobel.com.br/"]
        ]
    },
    "istudent": {
        name: "iStudent",
        description: {
            en: "An app that helps the user organize their school life, making it more productive.",
            br: "Um aplicativo que ajuda o usuário a organizar sua vida estudantil, tornando-a mais fácil e eficiente."
        },
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
        topics: {
            en: [
                [
                    ["The App", "The app was made using Delphi (Pascal) and Firemonkey. It has four main functionalities."],
                    ["Agenda", "Allows the user to insert events such as tests and projects, along with their priority level. So that, the higher their level, sooner the user will be notified about it."],
                    ["Schedule", "The user can insert their schedule to make it more easy to remember."],
                    ["Grades", "Allows the user to add their classes and their test results, sorting it by a period of time (two months) and showing statistics about their grades."],
                    ["Notepad", "A simple notepad, allows the user to sort and give a title for their notes."]
                ]
            ],
            br: [
                [
                    ["O App", "O aplicativo foi feito utilizando o Delphi e Firemonkey. Possui quatro funcionalidades principais."],
                    ["Agenda", "Permite que o usuário cadastre eventos tais como provas e trabalhos, além de informar qual seu nível de prioridade. Dessa forma, quanto maior seu nível, mais cedo o usuário receberá lembretes do mesmo."],
                    ["Horário", "O usuário pode cadastrar sua grade horária para facilitar na hora de checá-la."],
                    ["Notas", "Permite que o usuário adicione matérias e suas respectivas notas, separando-as por bimestres e mostrando um dados estatísticos baseados nas notas (no sistema da minha antiga escola)."],
                    ["Bloco de Notas", "Um bloco de notas básico, onde o usuário pode ou não dar um título para as notas."]
                ]
            ]
        },
        links: [
            [{en:"Thesis", br: "TCC"}, "/iStudent.docx"]
        ]
    }
}

export default APPS