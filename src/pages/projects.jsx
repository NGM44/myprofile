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
    link: 'https://www.dgda.gov.sa/en',
    noLink: false,
    tag: 'FTE - Publicis Sapient',
  },
  {
    name: 'Banking App',
    description:
      'Worked as Mobile developer for a foreign entity in a Banking App',
    logo: logoHelioStream,
    noLink: true,
    tag: 'FTE - Publicis Sapient',
  },
  {
    name: 'Flutter Architecture',
    description:
      'Built Flutter Architecture for the company to support fast development',
    logo: logoCosmos,
    noLink: true,
    tag: 'FTE - Publicis Sapient',
  },
  {
    name: 'Captable',
    description:
      'platform issue ,track , manage your company securities and captable ownership',
    logo: logoOpenShuttle,
    noLink: false,
    link: 'https://captable.hissa.com',
    tag: 'FTE - Rulezero',
  },
  {
    name: 'Task Manager',
    description:
      'Track Task , Share & Collect Task Documents and handle reminders for corporates mainly in investing domain',
    logo: logoHelioStream,
    noLink: false,
    link: 'https://taskmanager.hissa.com',
    tag: 'FTE - Rulezero',
  },

  {
    name: 'Onboarding',
    description:
      'Portal to onboarding client for Captable and Esop portal in rulezero',
    logo: logoOpenShuttle,
    noLink: true,
    noLink: false,
    link: 'https://onboarding.hissa.com',
    tag: 'FTE - Rulezero',
  },
  {
    name: 'ESOP portal',
    description:
      'Portal where Employees can see their esop grant, accept esop, conduct buyback ,liquidity of options and more',
    logo: logoAnimaginary,
    noLink: false,
    link: 'https://employee.hissa.com',
    tag: 'FTE - Rulezero',
  },
  {
    name: 'Industrial Machinery',
    description:
      'Built an app to control machines via bluetooth saved company 5 million spend',
    logo: logoHelioStream,
    noLink: true,
    tag: 'Free Lancing',
  },
  {
    name: 'Sankalpa Pets',
    description: 'Built an website for a bottle manufacturing company',
    logo: logoCosmos,
    noLink: false,
    link: 'https://sankalpapets.com',
    tag: 'Free Lancing',
  },
  {
    name: 'Uk pickle',
    description: 'Built an website for a pickle manufacturing company',
    logo: logoOpenShuttle,
    link: 'https://ukpickles.com',
    noLink: false,
    tag: 'Free Lancing',
  },
  {
    name: 'India Auto Pins',
    description: 'Built an website for a nuts and bolt manufacturing company',
    logo: logoPlanetaria,
    link: 'https://indiaautopins.in',
    noLink: false,
    tag: 'Free Lancing',
  },
  {
    name: 'SSOT',
    description: 'Creative Online Games which can be played anywhere',
    logo: logoOpenShuttle,
    link: 'https://ssot.in',
    noLink: false,
    tag: 'Free Lancing',
  },
  {
    name: 'Sensormagics',
    description:
      'IOT platform to record and Analyze real time data from Air sensor such temparature ,humidity and 16 other unique values',
    logo: logoAnimaginary,
    link: 'https://sensormagics.com',
    noLink: false,
    tag: 'Free Lancing',
  },
  {
    name: 'Autocrud',
    description:
      'No code platform to build workflow, automation and softwware products',
    logo: logoPlanetaria,
    noLink: false,
    link: 'https://autocurd.com',
    tag: 'Free Lancing',
  },
  {
    name: 'XXXX',
    description:
      'Fintech Product , Cant Disclose',
    logo: logoCosmos,
    noLink: true,
    tag: 'Co-Founder',
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
        title={`Built ${projects.length + 1} Production app till now and building more.`}
        intro="I’ve worked on tons of little projects over the years but these are the ones that seen the production and users have used it and I’m most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card
              onClick={() => {
                window.open(project.link)
              }}
              as="li"
              className={'cursor-pointer'}
              key={project.name}
            >
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
              <div className="relative z-10 mt-6 flex w-full flex-row justify-between text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                {/* {!project.noLink ? (
                  <span className="ml-2">{project.link.label}</span>
                ) : ( */}
                <span className="ml-2">{project.tag}</span>
                {/* )} */}
                {!project.noLink && (
                  <div className="flex flex-row">
                    <LinkIcon className="h-6 w-6 flex-none" />

                    <a href={project.link} rel="noreferrer" target="_blank">
                      Visit
                    </a>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
