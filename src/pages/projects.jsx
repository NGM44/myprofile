import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Tourism App',
    description:
      'Development of Tourism App for a foreign Government entity from scratch.',
    logo: logoAnimaginary,
    noLink: true,
    tag: "FTE - Publicis Sapient"
  },
  {
    name: 'Banking App',
    description: 'Worked as Mobile developer for a foreign entity in a Banking App',
    logo: logoHelioStream,
    noLink: true,
     tag: "FTE - Publicis Sapient"
  },
  {
    name: 'Flutter Architecture',
    description: 'Built Flutter Architecture for the company to support fast development',
    logo: logoCosmos,
    noLink: true,
    tag: "FTE - Publicis Sapient"
  },
  {
    name: 'XXXXXXX',
    description:
      'Cant disclose yet',
    logo: logoOpenShuttle,
    noLink: true,
    tag: "FTE - Rulezero"
  },
  {
    name: 'XXXXXX',
    description:  'Cant disclose yet',
    logo: logoAnimaginary,
    noLink: true,
    tag: "FTE - Rulezero"
  },
  {
    name: 'Industrial Machinery',
    description:
      'Built an app to control machines via bluetooth saved company 5 million spend',
    logo: logoHelioStream,
    noLink: true,
    tag: "Free Lancing"
  },
  {
    name: 'Sankalpa Pets',
    description:
      'Built an website for a bottle manufacturing company',
    logo: logoCosmos,
    noLink: true,
    tag: "Free Lancing"
  },
  {
    name: 'Uk pickle',
    description:
      'Built an website for a pickle manufacturing company',
    logo: logoOpenShuttle,
    noLink: true,
    tag: "Free Lancing"
  },
  {
    name: 'Covid Awareness Website',
    description:
      'Built a Covid Awareness Website in covid time.',
    logo: logoPlanetaria,
    noLink: true,
    tag: "Engineering"
  },
  {
    name: 'Autonomous Car Simulation',
    description:
      'Developed an autonomous car simulation in the Webots platform in a virtual environment.',
    logo: logoAnimaginary,
    noLink: true,
    tag: "Engineering"
  },
  {
    name: 'Inventory Management',
    description:
      'Developed an inventory management software for handling computer equipment as part of my internship',
    logo: logoHelioStream,
    noLink: true,
    tag: "Engineering"
  },
  {
    name: 'Pulse Oximeter',
    description:
      'Built a pulse oximeter for final year project for one senior',
    logo: logoPlanetaria,
    noLink: true,
    tag: "Engineering"
  },
  {
    name: 'ARTS',
    description:
      'Advanced Road Transportation system with 9 different concept.',
    logo: logoOpenShuttle,
    noLink: true,
    tag: "Diploma"
  },
  {
    name: 'Rain Detector',
    description:
      'My First Project , Simple but yet First Love',
    logo: logoPlanetaria,
    noLink: true,
    tag: "Diploma"
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nikhil Mudakavi</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                {!project.noLink && <LinkIcon className="h-6 w-6 flex-none" />}
                {!project.noLink ? (
                  <span className="ml-2">{project.link.label}</span>
                ) : (<span className="ml-2">{project.tag}</span>)}
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
