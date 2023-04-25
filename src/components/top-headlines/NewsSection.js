import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Template from './Template'
import './style.css';
import Loader from '../Loader';
const resp =[
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "LA NACION",
      "title": "Es de 1915. La centenaria máquina de soda italiana dio origen a un famosos coctel se exhibe (y se usa) en Buenos Aires. - LA NACION",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy5sYW5hY2lvbi5jb20uYXIvbGEtbmFjaW9uLXJldmlzdGEvbGEtY2VudGVuYXJpYS1tYXF1aW5hLWRlLXNvZGEtaXRhbGlhbmEtZGUtMTkxNS1xdWUtZGlvLW9yaWdlbi1hLXVuby1kZS1sb3MtZmFtb3Nvcy1jb2N0ZWxlcy1kZWwtbmlkMjMwNDIwMjMv0gGpAWh0dHBzOi8vd3d3LmxhbmFjaW9uLmNvbS5hci9sYS1uYWNpb24tcmV2aXN0YS9sYS1jZW50ZW5hcmlhLW1hcXVpbmEtZGUtc29kYS1pdGFsaWFuYS1kZS0xOTE1LXF1ZS1kaW8tb3JpZ2VuLWEtdW5vLWRlLWxvcy1mYW1vc29zLWNvY3RlbGVzLWRlbC1uaWQyMzA0MjAyMy8_b3V0cHV0VHlwZT1hbXA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T16:16:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "La República",
      "title": "Elon Musk está dispuesto a apostar las ganancias de Tesla en autos sin conductor - La República",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5sYXJlcHVibGljYS5jby9nbG9ib2Vjb25vbWlhL2Vsb24tbXVzay1lc3RhLWRpc3B1ZXN0by1hLWFwb3N0YXItbGFzLWdhbmFuY2lhcy1kZS10ZXNsYS1lbi1hdXRvcy1zaW4tY29uZHVjdG9yLTM1OTkwMzjSAYEBaHR0cHM6Ly9hbXAubGFyZXB1YmxpY2EuY28vZ2xvYm9lY29ub21pYS9lbG9uLW11c2stZXN0YS1kaXNwdWVzdG8tYS1hcG9zdGFyLWxhcy1nYW5hbmNpYXMtZGUtdGVzbGEtZW4tYXV0b3Mtc2luLWNvbmR1Y3Rvci0zNTk5MDM4?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T16:14:37Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "PronaTEC",
      "title": "Nova linha de crédito ESPECIAL para quem é MEI - PronaTEC",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiO2h0dHBzOi8vcHJvbmF0ZWMucHJvLmJyL25vdmEtbGluaGEtZGUtY3JlZGl0by1lc3BlY2lhbC1tZWkv0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T16:00:54Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "KURIER",
      "title": "RWA-Chef Wolf: „Versorgungssicherheit mit Lebensmitteln wird leiden“ - KURIER",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiaGh0dHBzOi8va3VyaWVyLmF0L3dpcnRzY2hhZnQvcndhLWNoZWYtd29sZi12ZXJzb3JndW5nc3NpY2hlcmhlaXQtbWl0LWxlYmVuc21pdHRlbG4td2lyZC1sZWlkZW4vNDAyNDIyNDk40gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T16:00:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Bloomberg Línea Latinoamérica",
      "title": "El inminente ‘halving’ del bitcoin empujaría precio a más de US$50.000 - Bloomberg Línea Latinoamérica",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmJsb29tYmVyZ2xpbmVhLmNvbS8yMDIzLzA0LzIzL2VsLWlubWluZW50ZS1oYWx2aW5nLWRlbC1iaXRjb2luLWVtcHVqYXJpYS1wcmVjaW8tYS1tYXMtZGUtdXM1MDAwMC_SAXxodHRwczovL3d3dy5ibG9vbWJlcmdsaW5lYS5jb20vMjAyMy8wNC8yMy9lbC1pbm1pbmVudGUtaGFsdmluZy1kZWwtYml0Y29pbi1lbXB1amFyaWEtcHJlY2lvLWEtbWFzLWRlLXVzNTAwMDAvP291dHB1dFR5cGU9YW1w?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:56:03Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "meinbezirk.at",
      "title": "Musikschule Pielachtal: Instrumentenkarussell Grünau - Pielachtal - meinbezirk.at",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vd3d3Lm1laW5iZXppcmsuYXQvcGllbGFjaHRhbC9jLWxva2FsZXMvaW5zdHJ1bWVudGVua2FydXNzZWxsLWdydWVuYXVfYTYwMDMyMzHSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:53:48Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "BeInCrypto Español",
      "title": "Resumen semanal de BeInCrypto: 23 de abril de 2023 - BeInCrypto Español",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiPmh0dHBzOi8vZXMuYmVpbmNyeXB0by5jb20vcmVzdW1lbi1zZW1hbmFsLWJlaW5jcnlwdG8tMjMtMDQtMjMv0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:52:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "meinbezirk.at",
      "title": "Ganzjährige Gemüseernte: Das immergrüne Hochbeet - Bruck an der Mur - meinbezirk.at",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3Lm1laW5iZXppcmsuYXQvYnJ1Y2stYW4tZGVyLW11ci9jLXJlZ2lvbmF1dGVuLWNvbW11bml0eS9kYXMtaW1tZXJncnVlbmUtaG9jaGJlZXRfYTU5ODkzOTTSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:46:28Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "News38",
      "title": "VW-Betriebsratschefin: Manche Berufsfelder haben keine Zukunft mehr – „sozialer Sprengstoff“ - News38",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3Lm5ld3MzOC5kZS93b2xmc2J1cmcvdncvYXJ0aWNsZTMwMDEzOTgyMS92dy1kYW5pZWxhLWNhdmFsbG8ta3VlbnN0bGljaGUtaW50ZWxsaWdlbnotdW1zY2h1bHVuZ2VuLW5ld3MuaHRtbNIBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:45:25Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Pulzo.com",
      "title": "Aerolínea lanza gangazo con tiquetes desde $ 99.000; toca 'volar' para comprarlos - Pulzo.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnB1bHpvLmNvbS9lY29ub21pYS9hdmlhbmNhLW9mcmVjZS10aXF1ZXRlcy1kZXNkZS05OTAwMC10b2RvLWNvbG9tYmlhLXByb21vY2lvbi1jdWFuZG8tUFAyNzY1NzY40gFvaHR0cHM6Ly93d3cucHVsem8uY29tL2FtcC9lY29ub21pYS9hdmlhbmNhLW9mcmVjZS10aXF1ZXRlcy1kZXNkZS05OTAwMC10b2RvLWNvbG9tYmlhLXByb21vY2lvbi1jdWFuZG8tUFAyNzY1NzY4?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:31:46Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Rotas de Viagem",
      "title": "Ranking elege as melhores comidas de rua do mundo - Veja o TOP 10! - Rotas de Viagem",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vcm90YXNkZXZpYWdlbS5jb20uYnIvY29taWRhcy1kZS1ydWEtbGlzdGEtZGFzLW1lbGhvcmVzLWRvLW11bmRvLWluY2x1aW5kby1kby1icmFzaWwv0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:31:04Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Boerse-express.com",
      "title": "EQS-Adhoc: H&K AG: Kapitalerhöhung (deutsch) - Boerse-express.com",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LmJvZXJzZS1leHByZXNzLmNvbS9uZXdzL2FydGljbGVzL2Vxcy1hZGhvYy1oay1hZy1rYXBpdGFsZXJob2VodW5nLWRldXRzY2gtNTUxMzY10gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:30:00Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Le Figaro",
      "title": "Logement : Geoffroy Roux de Bézieux prédit «une catastrophe» si rien n'est fait - Le Figaro",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vd3d3LmxlZmlnYXJvLmZyL2NvbmpvbmN0dXJlL2xvZ2VtZW50LWdlb2Zmcm95LXJvdXgtZGUtYmV6aWV1eC1wcmVkaXQtdW5lLWNhdGFzdHJvcGhlLXNpLXJpZW4tbi1lc3QtZmFpdC0yMDIzMDQyM9IBeGh0dHBzOi8vYW1wLmxlZmlnYXJvLmZyL2NvbmpvbmN0dXJlL2xvZ2VtZW50LWdlb2Zmcm95LXJvdXgtZGUtYmV6aWV1eC1wcmVkaXQtdW5lLWNhdGFzdHJvcGhlLXNpLXJpZW4tbi1lc3QtZmFpdC0yMDIzMDQyMw?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:28:19Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Decrypt en Español",
      "title": "La Semana en Cripto: Mercados Se Desploman. Bitcoin y Ethereum Caen Más de 10% - Decrypt en Español",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiTmh0dHBzOi8vZGVjcnlwdC5jby9lcy8xMzc2MDEvc2VtYW5hLWNyaXB0by1tZXJjYWRvcy1kZXNwbG9tYW4tYml0Y29pbi1ldGhlcmV1bdIBVGh0dHBzOi8vZGVjcnlwdC5jby9lcy8xMzc2MDEvc2VtYW5hLWNyaXB0by1tZXJjYWRvcy1kZXNwbG9tYW4tYml0Y29pbi1ldGhlcmV1bT9hbXA9MQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:26:06Z",
      "content": null
    },
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Alix Martichoux",
      "title": "These cities saw home prices triple. Then what happened? - The Hill",
      "description": "When the pandemic hit, the line on the graph of ever-increasing home prices suddenly shot up to an even steeper trajectory. By 2022, at least 13 major U.S. cities had seen home values go up by more than 200% – i.e. triple – since 2000. But the past year has b…",
      "url": "https://thehill.com/homenews/nexstar_media_wire/3961068-these-cities-saw-home-prices-triple-then-what-happened/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/04/GettyImages-1475361646.jpg?w=1280",
      "publishedAt": "2023-04-23T15:22:00Z",
      "content": "Skip to content\r\n(NEXSTAR) – When the pandemic hit, the line on the graph of ever-increasing home prices suddenly shot up to an even steeper trajectory. By 2022, at least 13 major U.S. cities had see… [+3212 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "MuyComputer",
      "title": "Google añade la verificación a celebridades fallecidas - MuyComputer",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3Lm11eWNvbXB1dGVyLmNvbS8yMDIzLzA0LzIzL2dvb2dsZS1hbmFkZS1sYS12ZXJpZmljYWNpb24tYS1jZWxlYnJpZGFkZXMtZmFsbGVjaWRhcy_SAWJodHRwczovL3d3dy5tdXljb21wdXRlci5jb20vMjAyMy8wNC8yMy9nb29nbGUtYW5hZGUtbGEtdmVyaWZpY2FjaW9uLWEtY2VsZWJyaWRhZGVzLWZhbGxlY2lkYXMvYW1wLw?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:12:14Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Marca México",
      "title": "Precio del dólar 23 de abril 2023: cotización en compra y venta - Marca México",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiTGh0dHBzOi8vd3d3Lm1hcmNhLmNvbS9teC9hY3R1YWxpZGFkLzIwMjMvMDQvMjMvNjQ0NTRhMmUyMjYwMWRlZDA2OGI0NTdiLmh0bWzSAUxodHRwczovL2FtcC5tYXJjYS5jb20vbXgvYWN0dWFsaWRhZC8yMDIzLzA0LzIzLzY0NDU0YTJlMjI2MDFkZWQwNjhiNDU3Yi5odG1s?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:09:44Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Men's Health",
      "title": "Consigue una cara y pelo \"más frescos\" con estos 5 productos - Men's Health",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3Lm1lbnNoZWFsdGguY29tL2VzL21vZGEtY3VpZGFkb3MtaG9tYnJlL2c0MzUwNjc5Ny9jYXJhLXktcGVsby1mcmVzY29zLXByb2R1Y3Rvcy_SAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:05:03Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Andro4all",
      "title": "Este es el único launcher que ha conseguido que deje de usar Nova Launcher - Andro4all",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vYW5kcm80YWxsLmNvbS9wZXJzb25hbGl6YWNpb24vZXN0ZS1lcy1lbC11bmljby1sYXVuY2hlci1xdWUtaGEtY29uc2VndWlkby1xdWUtZGVqZS1kZS11c2FyLW5vdmEtbGF1bmNoZXLSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:02:49Z",
      "content": null
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "Car & Motor",
      "title": "Αφρός ξυρίσματος στο αυτοκίνητο -Το κόλπο για να γλιτώσεις χρήματα | carandmotor.gr - Car & Motor",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiVmh0dHBzOi8vd3d3LmNhcmFuZG1vdG9yLmdyL3N5bWJveWxlcy9hZnJvcy14eXJpc21hdG9zLXN0by1heXRva2luaXRvLWdsaXRvc2Vpcy1ocmltYXRh0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-04-23T15:02:00Z",
      "content": null
    }
  ]
function NewsSection(props) {
  const [arts,setArticles] = useState(resp)
  const [totalResults,setTR] = useState(0)
  const[page,setPage] = useState(1)
  const [loader,setLoader] = useState(true)
  useEffect(()=>{

    getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.category])
  
  const getData = async  () =>{
    setLoader(true)
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=20&apiKey=${process.env.REACT_APP_KEY}`);
    const newsData = await data.json();
    setArticles(newsData.articles)
    setTR(newsData.totalResults)

    setLoader(false)
  }
  // FETCH MORE DATA METHOD
 const fetchMoreData = async () => {
     setPage((page) => page + 1);
     const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=20&apiKey=${process.env.REACT_APP_KEY}`);
     const newsData = await data.json();
     setArticles(arts.concat(newsData.articles))
     setTR(newsData.totalResults)
  };
  return (
    <>
    {!loader?<div className='mt-4 container-fluid mb-4'>
      {arts.map((items)=>{
       return (
        <div className='card' key={crypto.randomUUID()} >
      <Template
       imageUrl={items.urlToImage?items.urlToImage:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}
        title={items.title?items.title.slice(0,70):""}
         desc={items.description?items.description.slice(0,120):""}
          lnk={items.url}
          />
        </div>
     );})}
               <InfiniteScroll
          dataLength={arts.length}
          next={fetchMoreData}
          hasMore={arts.length !==totalResults}
        ></InfiniteScroll>
     </div>:<Loader/>}
    </>
  )
}
NewsSection.defaultProps = {
  category:'general'
}
export default NewsSection;