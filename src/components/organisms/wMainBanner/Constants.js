/* eslint-disable react/react-in-jsx-scope */
import {pathServer} from "../../../lib/shared/constants/Strings";

export const BANNER= [
    {
        id: 1, 
        service:1, 
        src: `${pathServer.PATH_IMG}company/banner.svg`,
        isSvg() { 
           return  this.src.includes(".svg")
        },
        renderTitle: () => <h1>Esté completamente seguro con <b>GRIZZLY</b></h1>,
        description:"Resguardo de agentes de seguridad privada a edificios, condominios y urbanizaciones."

    },
    {
        id: 2, 
        service:2, 
        className: 'img-banner-1',
        src: `${pathServer.PATH_IMG}company/banner-1.png`,
        isSvg() { 
           return  this.src.includes(".svg")
        },
        renderTitle: () => <h1>Soluciones <b>Tecnológicas</b></h1>,
        description:"La más alta tecnología en cámaras de seguridad, sistemas de alarmas e identificación de vehículos."

    },
    {
        id: 3,
        service:3, 
        className: 'img-banner-2',
        src: `${pathServer.PATH_IMG}company/banner-2.png`,
        isSvg() { 
           return  this.src.includes(".svg")
        },
        renderTitle: () => <h1><b>Limpieza 360</b></h1>,
        description:"Ejecutamos un servicio de limpieza integral con una propuesta innovadora de reciclaje que obtiene beneficio económico para nuestros clientes."

    },
    {
        id:4,
        service:1, 
        className: 'img-banner-3',
        src: `${pathServer.PATH_IMG}company/banner-3.png`,
        isSvg() { 
           return  this.src.includes(".svg")
        },
        renderTitle: () => <h1>Gestión de <b>Talento Humano</b></h1>,
        description:"Conoce nuestro riguroso proceso de selección, evaluación y capacitación para garantizar el personal más calificado"

    },
]
