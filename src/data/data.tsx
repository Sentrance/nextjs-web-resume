import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/kelly-sikkema-WTCh36XETTQ-unsplash.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Pierre Peixoto web resume',
  description: "Web resume for Pierre Peixoto",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Pierre Peixoto`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Ingénieur <strong className="text-stone-100">DevOps</strong> à <strong className="text-stone-100">forte polyvalence</strong> technique vivant actuellement sur Paris.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Bilingue en anglais après plus de deux ans passée en Corée du Sud, j'adore voyager.
        Sur mon temps libre je développe de petits projets personnels.
        Sur  mon temps libre j'adore lire des manwha, les jeux-vidéos et sociabiliser.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Voir mon C.V',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `https://www.linkedin.com/in/pierrepeixoto/`,
      text: 'Me contacter',
      target: "_blank",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Vrai passionné de code, ayant dès mon plus jeune âge été impliqué dans du game-design et du développement 
  de serveurs de jeux. J'aime également voyager et ai vécu de nombreuses années à l'étranger.`,
  aboutItems: [
    {label: 'Localisation', text: 'Paris', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Intérêts', text: 'Voyages, Manwha, Homelab, Jeux-vidéos', Icon: SparklesIcon},
    {label: 'Etudes', text: 'Epitech Paris', Icon: AcademicCapIcon}
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues',
    skills: [
      {
        name: 'Anglais (bilingue)',
        level: 10,
      },
      {
        name: 'Français (natif)',
        level: 10,
      },
      {
        name: 'Portugais (professionnel)',
        level: 7,
      },
      {
        name: 'Espagnol (professionnel)',
        level: 7,
      },
      {
        name: 'Coréen (débutant)',
        level: 3,
      },
    ],
  },
  {
    name: 'DevOps / CloudOps',
    skills: [
      {
        name: 'Kubernetes',
        level: 9,
      },
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Terraform',
        level: 8,
      },
      {
        name: 'Helm',
        level: 8,
      },
      {
        name: 'ArgoCD / FluxCD',
        level: 8,
      },
      {
        name: 'AWS / GCP / Azure',
        level: 7,
      },
      {
        name: 'CI/CD (Jenkins, GitLab, Bamboo)',
        level: 8,
      },
    ],
  },
  {
    name: 'Développement',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C / C++ / C#',
        level: 7,
      },
      {
        name: 'React.js / Node.js',
        level: 8,
      },
      {
        name: 'GraphQL / NoSQL',
        level: 7,
      },
      {
        name: 'Elixir',
        level: 5,
      },
    ],
  },
  {
    name: 'Compétences sociales',
    skills: [
      {
        name: 'Gestion de projet',
        level: 8,
      },
      {
        name: 'Méthodologie agile',
        level: 9,
      },
      {
        name: 'Parler en public',
        level: 7,
      },
      {
        name: 'Assistance client',
        level: 8,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015 - 2020',
    location: 'Epitech - Paris',
    title: 'Master 2 Expert des technologies de l\'information',
    content: <p>Formation d'expert en technologies de l'information avec un focus sur le développement logiciel, la gestion de projet et l'innovation numérique.</p>,
  },
  {
    date: '2018 - 2019',
    location: 'Keimyung University - Daegu (Corée du Sud)',
    title: 'Jeu vidéo avancé et développement mobile',
    content: <p>Spécialisation en développement de jeux vidéo et d'applications mobiles, avec une immersion culturelle en Corée du Sud.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mars 2025 - Mai 2025',
    location: 'Factory',
    title: 'Consultant DevOps & CloudOps',
    content: (
      <p>
        Audit puis transition d'une infrastructure hybride On-Premise et SaaS vers microsoft Azure. Optimisation du code
        et bonne pratiques. Mise en place de pipelines CI/CD. Migration de bases de données PostgresSQL vers Azure DB.
        Migration du code utilisant le package supabase vers des hooks utilisant des appels SQL. Mise en place d'une
        authentification OAuth Azure. Optimisation de code et mise à la norme.
        Formation des équipes sur l'utilisation des pipelines, de
        terraform, d'Azure, de Git et des bonnes pratiques de code.
        <br />
        <br />
        <strong>Environnement technique:</strong> Microsoft Azure, Terraform, Next.js, PostgresSQL, Github actions.
      </p>
    ),
  },
  {
    date: 'Octobre 2024 - Décembre 2024',
    location: 'Flatcube SL',
    title: 'Consultant DevOps',
    content: (
      <p>
        Audit pour la création d'un cluster dédié Kubernetes. Transition de serveurs déployés sur des machines dédiées via Docker vers une infrastructure K8s. Mise en place du déploiement continu des serveurs de jeux, création d'alertes et d'une documentation complète.
        <br />
        <br />
        <strong>Environnement technique:</strong> Kubernetes, Helm, Ansible, Docker, Git, FluxCD
      </p>
    ),
  },
  {
    date: 'Avril 2023 - Mai 2024',
    location: 'Digazu',
    title: 'Ingénieur DevOps',
    content: (
      <p>
        Implémentation et maintenance de pipelines CI/CD pour automatiser les processus de build, de test et de déploiement. Automatisation du provisionnement et configuration des serveurs. Orchestration de conteneurs avec Kubernetes. Identification et résolution des goulots d'étranglement de performances au niveau de l'application et de l'infrastructure.
        <br />
        <br />
        <strong>Environnement technique:</strong> Kubernetes, Terraform, Helm, ArgoCD, AWS, Docker, Gitlab, Git, CI/CD, GCP, Elixir, Java, Python
      </p>
    ),
  },
  {
    date: 'Février 2022 - Avril 2023',
    location: 'Aisin Europe',
    title: 'Ingénieur DevOps',
    content: (
      <p>
        Accompagnement de l'équipe dans l'application des bonnes pratiques cloud. Migration des applications locales vers AWS. Création d'outils pour les développeurs. Déploiement d'un système d'autorisation pour les applications Kubernetes. Standardisation d'un système de gestion de versions personnalisé. Collecte de métriques et de logs via Prometheus et Grafana.
        <br />
        <br />
        <strong>Environnement technique:</strong> AWS, Kubernetes, Terraform, Helm, ArgoCD, Bitbucket, pipelines Bamboo, CI/CD, Grafana
      </p>
    ),
  },
  {
    date: 'Mars 2021 - Novembre 2021',
    location: 'Ascentia',
    title: 'Concepteur de jeux et développeur Java JDK',
    content: (
      <p>
        Au sein du plus gros serveur Minecraft français (4 millions d'utilisateurs enregistrés, 18 000 utilisateurs quotidiens), développement de nouvelles idées de jeux et contribution à la création d'un nouveau serveur. Collaboration avec les équipes de développement pour améliorer l'expérience utilisateur. Aide à la création de mini-jeux PoC en Java.
        <br />
        <br />
        <strong>Environnement technique:</strong> Java, Jenkins, Docker, Kubernetes, Terraform, Git
      </p>
    ),
  },
  {
    date: 'Mars 2020 - Décembre 2020',
    location: 'Letsplay.cloud',
    title: 'Lead full-stack et DevOps',
    content: (
      <p>
        Estimation et développement d'un nouveau site web à partir de zéro. Reproduction des maquettes web et mobiles. Hébergement du site via AWS serverless. Création d'une pipeline CI/CD et d'une structure backend. Livraison d'une documentation de projet adaptée aux futurs développeurs.
        <br />
        <br />
        <strong>Environnement technique:</strong> Figma, React.JS, Node.js, AWS serverless / lambda / pipeline / SAM, Pipeline Gitlab
      </p>
    ),
  },
];
/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Sentrance'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pierrepeixoto/'}
];