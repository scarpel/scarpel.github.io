const texts =  {
  en: {
    pageName: "about me",
    yearsLocation: "years, Brazil",
    intro: () => (
      <>
        I always like to <em>create</em>, mixing that with my huge <em>curiosity</em> and <em>passion for computers</em>
        (well, at that time it was a passion for The Sims 2, but anyway...) I found in <em>development</em>
        a way for me to do what I love for a living...
      </>
    ),
    education: () => (
      <>
        ...I, then, became a <em>technician in Software Development</em> at ETEC João Batista de Lima Figueiredo and
        I, almost, am a <em>bachelor in Computer Science</em> by Federal University of Uberlândia...
      </>
    ),
    certificades: () => (
      <>
        ... moreover, I'm always <em>learning something new</em>, a fact that gave me a few <em>certificades</em>... 
      </>
    )
  },
  br: {
    pageName: "sobre mim",
    yearsLocation: "anos, Brasil",
    intro: () => (
      <>
        eu sempre gostei de <em>criar</em>, unindo isso a minha demasiada <em>curiosidade</em> e  
        <em> paixão por computadores</em> (bom, na época era mais por The Sims 2, mas enfim...) 
        eu descobri no <em>desenvolvimento</em> uma paixão que poderia levar para a vida profissional...
      </>
    ),
    education: () => (
      <>
      ... eu, então, tornei-me <em>técnico em Informática</em> pela ETEC João Batista de Lima Figueiredo e 
      sou, quase, um <em>bacharel em Ciência da Computação</em> pela Universidade Federal de Uberlândia...
      </>
    ),
    certificades: () => (
      <>
      ... além disso, estou sempre <em>aprendendo algo novo</em>, uma fato que me 
      rendeu alguns <em>certificados</em>...
      </>
    )
  }
};

export default texts;