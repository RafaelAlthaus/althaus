import React, { Component } from 'react';
import Road from '../components/Road';
import Header from '../components/Header';
import Tecnologias from '../components/Tecnologias';
import Interesse from '../components/Interesse';
import Footer from '../components/Footer';
import '../styles/App.css';

export default class App extends Component {

  state = {
    data: null,
    loading: true
  }

  componentDidMount = () => {

  };

  render() {

    const data = {
      header: {
        nome: 'Rafael Althaus',
        subtitle: '💻 Full-stack developer. 📱',
        whatsapp: '5542999042259',
        github: 'RafaelAlthaus',
        linkedin: 'rafael-althaus-3459b8a5'
      },
      tecnologias: {
        title: 'Qualidade no ciclo de vida.',
        subtitle: 'Todo projeto exige uma stack de tecnologias próprias e que fazem sentido pro seu caso de uso. Portanto, se faz necessário trabalhar com diferentes linguagens, frameworks e serviços.'
      },
      road: {
        title: 'The road so far...',
        subtitle: 'Desenvolvimento de produtos focados em entregar valor real, não apenas código.',
        works: [
          {
            title: '⭐️ SantéMed',
            text: 'Líder de R&D, responsável pela gestão de infraestrutura e desenvolvimento do software.',
          },
          {
            title: '📱 Desenvolvimento Mobile',
            text: 'Aplicações para Android / iOS utilizando as melhores práticas do mercado.'
          },
          {
            title: '💻 Desenvolvimento Web',
            text: 'Ferramentas como SaaS entregam um enorme valor para empresas e usuários finais.'
          },
          {
            title: '🏭 Aplicações Locais / In-House',
            text: 'O controle de informações dentro de uma empresa é fundamental para o crescimento.'
          },
          {
            title: '🚧 Outsourcing / Refactoring',
            text: 'Resgate seu projeto e torne seu produto saudável novamente.'
          },
          {
            title: '✔️ Assessment Técnico',
            text: 'Revisão e aplicação de boas práticas em infraestruturas escaláveis, processos e tecnologias.'
          }
        ],
        lastCard: {
          title: '🚀 +30 projetos entregues',
          text: 'Aplicativos mobile, APIs, SaaS, apps in-house para empresas locais e multinacionais, e-commerces, sites institucionais, refatoração de antigos projetos e por aí vai.'
        }
      },
      interesse: {
        title: 'Links',
        subtitle: 'Algumas coisas que você possa achar interessante.',
        links: [
          {
            title: 'Why Founders Market Their Products Too Late',
            subtitle: '',
            img: 'https://miro.medium.com/fit/c/1200/750/1*87Ky1tfnFfqJfTQKEXb_UA.jpeg',
            link: 'https://medium.dave-bailey.com/why-founders-fail-to-market-their-products-f7c15935c81'
          },
          {
            title: 'How Startups Get To Revenue Fast',
            subtitle: '',
            img: 'https://miro.medium.com/fit/c/2048/1363/1*RIq1kvkkIMUUvI33GMDMSQ.jpeg',
            link: 'https://medium.com/@jproco/how-startups-get-to-revenue-fast-3575332f2955'
          },
          {
            title: 'The Differences Between a Junior, Mid-Level, and Senior Developer',
            subtitle: '',
            img: 'https://miro.medium.com/fit/c/5088/3621/1*6NsIBhzaRwsnV8ecfzGW0Q.jpeg',
            link: 'https://medium.com/better-programming/the-differences-between-a-junior-mid-level-and-senior-developer-bb2cb2eb000d'
          },
          {
            title: 'Optimising React Native APK Size',
            subtitle: '',
            img: 'https://miro.medium.com/fit/c/1457/729/1*goP5l7xw8FfqWb1IaB3b9A.png',
            link: 'https://medium.com/engineering-housing/optimising-react-native-apk-size-c88ef39ab7a0'
          },
          {
            title: 'How Netflix works',
            subtitle: '',
            img: 'https://miro.medium.com/fit/c/1356/668/1*T2CzKMo8aU02pxQmcYS4Bg.png',
            link: 'https://medium.com/refraction-tech-everything/how-netflix-works-the-hugely-simplified-complex-stuff-that-happens-every-time-you-hit-play-3a40c9be254b'
          },
          {
            title: 'Scaling Your Redux App with Ducks',
            subtitle: '',
            img: 'https://miro.medium.com/fit/c/6016/4016/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg',
            link: 'https://medium.com/better-programming/scaling-your-redux-app-with-ducks-6115955638be'
          },
        ]
      }
    };

    return (
      <div className="app">
        <Header data={data.header} />
        <Tecnologias data={data.tecnologias} />
        <Road data={data.road} />
        <Interesse data={data.interesse} />
        <Footer />
      </div>
    );
  }
}
