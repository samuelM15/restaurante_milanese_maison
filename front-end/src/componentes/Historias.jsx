import React from 'react';
import './Historias.css';

const Historia = () =>{
    return(
        <section className='secao_historia'>
            <div className='container_all'>
                <div className='container_historias'>
                    <h1>História</h1>
                    <p>Descubra as históriias inspiradorras que fazem parte do Café do Amanhã. Desde as viagens aventureiras de Nanda até as serenatas à beira mar de Junio, cada momento é selebração de suas paixões.</p>
                </div>

                <div className='box_containers'>
                    <div className='historias'>
                        <h2>Rock das Estradas</h2>
                        <p>Nanda sempre teve uma alma inquieta, apaixonada por viajens e pela liberdade que só a estrada pode oferecer. Durante uma viajem pelo interior do Brasil, ao som de suas bandas de rock favoritas, ela descobriu um pequeno café encondido em uma vila remota. Inpirada pelo lugar, decidiu trazer essa expêriencia unica para o Café do Amanhã, onde o aroma de café se mistura com uma trilha sonora de suas aventuras.</p>
                        <div className='container_iconi'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#8B4513" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4m0-.4V9a2 2 0 1 0-4 0v2m0-.5V5a2 2 0 1 0-4 0v9"/><path d="m7 15l-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"/></g></svg></div>
                    </div>

                    <div className='historias'>
                        <h2>MPB à Beira-Mar</h2>
                        <p>Junior, por outro lado, encontrara a verdadeira paz ao som das ondas do mar e de uma boa musica brasileira. Sua paixão pela MPB é evidente em cada em cada detalhe do Café do Amanhã, onde as melodias de grandes ícones como Vinícius de Moraes e Tom Jobin preenchem o ambiente. Foi uma noite tranquila, sentado na areia e ouvindo "Garota de Ipanema", que Junio teve a ideia de criar um espaço onde a música musica e o café se encontram em perfeita harmonia.</p>
                        <div className='container_iconi'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#8B4513" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13h1m16 0h1M5.6 6.6l.7.7m12.1-.7l-.7.7M8 13a4 4 0 1 1 8 0M3 17h18M7 20h5m4 0h1M12 5V4"/></svg></div>
                    </div>

                    <div className='historias'>
                        <h2>Um Encontro de Paixões</h2>
                        <p>Quando Nanda e junio se conheceram, parecia que o destino havia reunido duas almas complementares. Enquanto Nanda compartilha suas histórias de viajens e seu amor pelo rock, Junior fala de suas noites à Beira-Mar e da suavidade da MPB. Juntos, transformaram o Café do Amanhã em um lugar onde cada visita é uma nova história, cada xicara um novo capítulo, e cada cnção no ar uma celebração de paixões.</p>
                        <div className='container_iconi2'><svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#8B4513" d="M132.255 18.093c-32.842 0-59.592 33.923-59.592 75.935c0 21.274 7.079 40.468 18.092 54.284C22.623 158.879 7.903 253.733 24.1 339.874h23.563L46.63 234.53l18.688-.185l1.25 126.685l8.75 132.877h46.875v-172.29c-15.257-18.713-25.615-39.351-26.424-64.825l-.004-.1v-.1c-.154-15.988 6.478-35.643 19.219-52.566c12.741-16.922 32.481-30.98 57.783-31.29c17.252-.212 35.458 5.013 51.338 14.771c-12.131-20.214-29.245-34.177-51.26-38.32c11.507-13.88 18.971-33.345 18.971-55.157c.097-36.903-24.805-76.041-59.562-75.937zm247.841 0c-32.842 0-59.591 33.923-59.591 75.935c0 21.274 7.078 40.468 18.091 54.284c-25.296 3.923-43.223 19.473-54.945 41.875c16.803-11.476 36.697-17.682 55.465-17.452c25.302.311 45.042 14.369 57.783 31.291s19.373 36.578 19.219 52.567v.1l-.004.1c-.826 26.007-11.608 46.974-27.393 65.997v171.113h44.315l11.5-154.029h.03l1.062-105.531l18.687.185l-1.062 105.346h24.53c18.363-88.46-4.724-178.95-67.095-190.687c11.507-13.88 18.97-33.345 18.97-55.157c.098-36.903-24.805-76.041-59.562-75.937M172.99 190.733c-18.837.232-33.281 10.381-43.625 24.12c-10.326 13.715-15.675 31.13-15.594 41.506c1.226 36.63 26.557 61.833 61.219 92.044c26.758 23.322 58.19 48.519 80.617 83.38l.357-.637l.336.601c22.427-34.843 53.847-60.03 80.596-83.344c34.662-30.211 59.993-55.414 61.219-92.044c.081-10.376-5.268-27.791-15.594-41.506c-10.344-13.739-24.788-23.888-43.625-24.12c-28.453-.349-63.84 20.288-74.414 52.022l-8.539 25.625l-8.54-25.625c-10.573-31.734-45.96-52.37-74.413-52.021zm-32.11 150.989v152.181h44.315l7.893-105.714c-9.94-9.023-20.098-17.651-29.924-26.215c-7.726-6.734-15.242-13.43-22.283-20.252zm229.157.93c-6.762 6.5-13.94 12.894-21.315 19.322c-10.636 9.27-21.66 18.622-32.375 28.463l6.815 103.47h46.875z"/></svg></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Historia;