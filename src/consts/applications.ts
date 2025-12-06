import type { Application } from '@/types/applications'
import applicationsBanner from '@/assets/banners/applicationsBanner.png'

export const staffApplication: Application = {
  id: "staff",
  name: "Staff",
  banner: {
    url: applicationsBanner.src,
    alt: "Banner de postulaciones de TS"
  },
  sections: [
    {
      name: "Información de Usuario",
      questions: [
        {
          label: "¿ID de usuario? ( Discord )",
          aside: "A continuación te dejamos adjuntado un [enlace](https://support.discord.com/hc/es/articles/206346498--D%C3%B3nde-puedo-encontrar-mi-ID-de-usuario-servidor-mensaje) donde puedes ver como obtener el id de tu cuenta de Discord.",
          type: "short",
          required: true,
        },
        {
          label: "¿Edad?",
          aside: "Procura proporcionar tú edad real.",
          type: "short",
          required: true
        },
        {
          label: "¿Región?",
          aside: "Europa, America, Asia, África, Oceanía, y Antartida.",
          type: "short",
          required: true
        },
        {
          label: "¿Disponibilidad horaria?",
          aside: "Tiempo para dedicar a TS Community Brawl.",
          type: "long",
          required: true
        }
      ]
    },
    {
      name: "Habilidades y Experiencia",
      questions: [
        {
          label: "¿Por qué deseas postularte como Staff?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuentas con experiencia como Staff en otras comunidades de Discord?",
          type: "select",
          options: [
            "Sí",
            "No"
          ],
          required: true
        },
        {
          label: "Háblanos sobre ella: nombre de cada servidor, tú papel en ellos (rol) y la cantidad de miembros de cada uno.",
          type: "long",
          aside: "Si no cuentas con experiencia siendo Staff en otros servidores de Discord, no es necesario que respondas a esta pregunta y no por ellos significa que vayas a ser rechazado.",
          required: false
        },
        {
          label: "¿Según tu criterio que es ser un buen Staff?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuales crees que son las funciones de cada rango del Staff?",
          type: "long",
          required: true,
          aside: "Owner, Co-Owner, Administrador, Supervisor, Instructor, Moderador."
        }
      ]
    },
    {
      name: "Casos Prácticos de Moderación",
      questions: [
        {
          label: "¿Que harías si un miembro de TS Comunity Brawl te insulta?",
          type: "select",
          required: true,
          options: [
            "Baneo Permamente",
            "Muteo Permamente",
            "Aislamiento Permamente",
            "Warn",
            "Aviso verbal sin penalización",
            "Other"
          ]
        },
        {
          label: "Justifica tu respuesta anterior",
          aside: "Si no ves necesaria esta pregunta, no la contestes.",
          type: "short",
          required: false
        },
        {
          label: "¿Que harías si un miembro envía un enlace a su servidor de Discord en un canal publico de TS Community?",
          type: "select",
          required: true,
          options: [
            "Baneo Permamente",
            "Muteo Permamente",
            "Aislamiento Permamente",
            "Warn",
            "Aviso verbal sin penalización",
            "Other"
          ]
        },
        {
          label: "Justifica tu respuesta anterior",
          aside: "Si no ves necesaria esta pregunta, no la contestes.",
          type: "long",
          required: false
        },
        {
          label: "¿Que harías si ves a un alto rango del Staff abusando de su poder?",
          type: "long",
          required: true
        },
        {
          label: "¿Cuales crees que son buenas practicas a la hora de moderar un servidor?",
          type: "long",
          required: true
        }
      ]
    }
  ]
}

export default [
  staffApplication
]