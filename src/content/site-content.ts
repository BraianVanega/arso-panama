// src/content/site-content.ts
// Contenido centralizado del sitio ARSOPA Solutions S.A.
// Basado en el brief corporativo — no inventar clientes, cifras, certificaciones ni testimonios.

export const siteContent = {
  meta: {
    title: "ARSOPA Solutions S.A. | Consultoría Financiera y Administrativa",
    description:
      "Ayudamos a empresas y personas naturales a organizar información financiera, identificar riesgos y mejorar sus procesos de planificación y control.",
  },

  header: {
    brandName: "ARSOPA SOLUTIONS S.A.",
    tagline: "Consultoría Financiera y Administrativa",
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Servicios", href: "#servicios" },
      { label: "Cómo Trabajamos", href: "#metodologia" },
      { label: "Cumplimiento", href: "#cumplimiento" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: "Solicitar Consulta",
  },

  hero: {
    headline:
      "Soluciones para una gestión financiera y empresarial más ordenada.",
    subtext:
      "Ayudamos a empresas y personas naturales a organizar información financiera, identificar riesgos y mejorar sus procesos de planificación y control.",
    primaryCta: "Conocer nuestros servicios",
    secondaryCta: "Solicitar una consulta",
    entityCard: {
      title: "ARSOPA Solutions S.A.",
      details: [
        "Panamá · Zona Franca IFZA",
        "Empresa de consultoría financiera y administrativa",
      ],
    },
    trustBadges: [
      {
        title: "100% Independiente",
        description:
          "Sin vínculos que comprometan la objetividad del análisis.",
      },
      {
        title: "Cero Custodia",
        description:
          "No recibimos, custodiamos ni administramos fondos de clientes.",
      },
      {
        title: "Metodología Verificada",
        description:
          "Un proceso ordenado y documentado en cada etapa del servicio.",
      },
      {
        title: "Control Interno",
        description:
          "Procesos propios de control y trazabilidad en cada entrega.",
      },
    ],
  },

  about: {
    eyebrow: "Institución y Trayectoria",
    title: "Sobre ARSOPA Solutions S.A. · Respaldo y Solidez Institucional",
    body: "ARSOPA Solutions S.A. es una empresa panameña orientada a apoyar a empresas y personas naturales en la organización de sus procesos financieros y administrativos. Nuestro trabajo se basa en el análisis, la planificación, el control interno y la identificación de riesgos.",
    representative: {
      label: "Representante Legal",
      name: "Kevin",
      role: "Representante Legal Registrado",
    },
    teamNote:
      "Cuerpo Consultor Interdisciplinario — equipo de trabajo presentado únicamente con información verdadera y comprobable.",
  },

  services: {
    eyebrow: "Catálogo de Servicios",
    title: "Áreas de Práctica Especializada",
    subtitle:
      "Estructuramos intervenciones profesionales orientadas al análisis, la organización y la identificación de riesgos de cada cliente.",
    business: {
      label: "Servicios para Empresas",
      description:
        "Diagnóstico y ordenamiento financiero para empresas, sin intervenir sobre fondos ni operaciones bancarias.",
      items: [
        "Diagnóstico administrativo y financiero",
        "Elaboración de presupuestos y proyecciones",
        "Organización de flujos de caja",
        "Identificación de riesgos operativos y financieros",
        "Diseño de controles internos",
        "Preparación de reportes gerenciales",
        "Análisis de costos y rentabilidad",
        "Organización documental y apoyo en planificación comercial",
        "Creación de indicadores y tableros de gestión",
      ],
      cta: "Ver detalle de servicios para empresas",
    },
    individuals: {
      label: "Servicios para Personas Naturales",
      description:
        "Acompañamiento y ordenamiento financiero personal, con foco en planificación y control — sin ofrecer inversiones ni administración de patrimonio.",
      items: [
        "Organización financiera personal",
        "Elaboración de presupuestos",
        "Planificación de ingresos y gastos",
        "Identificación de riesgos financieros personales",
        "Educación financiera general",
        "Diseño de planes de ahorro y control",
      ],
      cta: "Ver detalle de servicios para personas",
      scopeNote:
        "No ofrecemos inversiones, administración de patrimonio ni recomendaciones sobre instrumentos financieros.",
    },
  },

  methodology: {
    eyebrow: "Práctica Operativa",
    title: "Metodología de Trabajo en 6 Fases",
    subtitle:
      "Garantizamos total trazabilidad y rigor metodológico desde la primera toma de contacto hasta el informe final.",
    steps: [
      {
        number: "01",
        title: "Reunión inicial",
        description:
          "Primer acercamiento para comprender el contexto y las necesidades del cliente.",
      },
      {
        number: "02",
        title: "Diagnóstico de necesidades",
        description:
          "Relevamiento de la situación administrativa y financiera actual.",
      },
      {
        number: "03",
        title: "Propuesta y alcance",
        description:
          "Definición formal del alcance, responsabilidades y condiciones del servicio.",
      },
      {
        number: "04",
        title: "Análisis de la información",
        description: "Revisión y procesamiento de la información recabada.",
      },
      {
        number: "05",
        title: "Entrega de recomendaciones",
        description:
          "Presentación de hallazgos y recomendaciones concretas al cliente.",
      },
      {
        number: "06",
        title: "Seguimiento",
        description:
          "Acompañamiento posterior a la entrega, cuando corresponda.",
      },
    ],
  },

  riskManagement: {
    eyebrow: "Alcance Consultivo",
    title: "Arquitectura Preventiva de Riesgos Empresariales",
    subtitle:
      "Nuestra metodología ayuda a identificar y documentar las variables críticas que comprometen la viabilidad patrimonial de las organizaciones en entornos de alta volatilidad.",
    disclaimer:
      "ARSOPA entrega análisis y recomendaciones, pero no administra el dinero del cliente.",
    items: [
      {
        title: "Riesgo de Flujo de Caja",
        description:
          "Planificación financiera y anticipación de necesidades de liquidez.",
      },
      {
        title: "Concentración de Clientes y Proveedores",
        description:
          "Identificación de dependencias que comprometen la continuidad del negocio.",
      },
      {
        title: "Procesos y Controles Internos",
        description:
          "Revisión de procesos administrativos y su nivel de control.",
      },
      {
        title: "Continuidad Operativa",
        description:
          "Evaluación de la capacidad de la organización para sostener su operación.",
      },
      {
        title: "Manejo y Protección de Información",
        description:
          "Buenas prácticas para el resguardo de información sensible.",
      },
    ],
  },

  nonIntermediationBanner: {
    label: "Cláusula de No Intermediación ni Custodia",
    text: "ARSOPA Solutions S.A. entrega exclusivamente servicios de análisis financiero, consultoría y recomendaciones estratégicas. La empresa NO capta, administra ni custodia fondos de terceros ni realiza operaciones en nombre de sus clientes en ninguna forma o modalidad.",
  },

  compliance: {
    eyebrow: "Marco Regulatorio",
    title: "Cumplimiento, Transparencia y Rigor Contractual",
    intro:
      "ARSOPA Solutions S.A. desarrolla sus servicios bajo principios de transparencia, confidencialidad y cumplimiento. La empresa no recibe, custodia ni administra fondos pertenecientes a sus clientes. Cada servicio se formaliza mediante una propuesta o contrato que establece su alcance, responsabilidades y condiciones.",
    items: [
      {
        title: "Contratos Formalizados y Confidencialidad",
        description:
          "Cada servicio se formaliza mediante una propuesta o contrato con alcance y condiciones claras.",
      },
      {
        title: "Debida Diligencia y KYC Riguroso",
        description:
          "Procesos de conocimiento del cliente aplicados de forma consistente.",
      },
      {
        title: "Acuerdos de Confidencialidad y Secreto",
        description:
          "La información de cada cliente se protege bajo estrictos acuerdos de confidencialidad.",
      },
      {
        title: "Verificabilidad y Trazabilidad Auditora",
        description:
          "Cada entrega puede sustentarse en documentación y contratos verificables.",
      },
    ],
  },

  contact: {
    eyebrow: "Canal Institucional",
    title: "Contacto y Solicitud de Información",
    subtitle:
      "Iniciá el diálogo confidencial con nuestro equipo para coordinar una sesión de exploración.",
    officeLabel: "Sede Institucional",
    officeDetails: {
      address: "Panamá, República de Panamá", // TODO: confirmar dirección oficial exacta
      email: "contacto@arsospa.com",
      phone: "", // TODO: teléfono empresarial
      hours: "", // TODO: horario de atención
    },
    form: {
      fields: [
        {
          name: "fullName",
          label: "Nombre completo",
          type: "text",
          required: true,
        },
        {
          name: "company",
          label: "Empresa / Organización",
          type: "text",
          required: false,
        },
        {
          name: "clientType",
          label: "Tipo de Cliente",
          type: "select",
          required: true,
          options: ["Empresa", "Persona natural"],
        },
        {
          name: "email",
          label: "Correo Corporativo",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          label: "Teléfono de Contacto",
          type: "tel",
          required: false,
        },
        {
          name: "message",
          label: "Mensaje / Requerimiento Específico",
          type: "textarea",
          required: true,
        },
      ],
      submitLabel: "Enviar Solicitud de Información",
      successMessage: "Solicitud enviada. Responderemos a la brevedad al correo indicado.",
      errorMessage: "No se pudo enviar la solicitud. Intente nuevamente o escriba a contacto@arsospa.com.",
    },
  },

  footer: {
    columns: [
      {
        title: "ARSOPA Solutions",
        items: ["Nosotros", "Cuerpo Consultor", "Cumplimiento"],
      },
      {
        title: "Áreas de Práctica",
        items: ["Servicios para Empresas", "Servicios para Personas Naturales"],
      },
      {
        title: "Contacto y Horario",
        items: ["contacto@arsospa.com"],
      },
      {
        title: "Marco Legal y Cumplimiento",
        items: ["Aviso de Privacidad", "Términos de Uso"],
      },
    ],
    legalLine:
      "ARSOPA Solutions S.A. · Panamá, República de Panamá. Todos los derechos reservados.",
    // TODO: incorporar RUC cuando esté disponible
  },
} as const;

export type SiteContent = typeof siteContent;
