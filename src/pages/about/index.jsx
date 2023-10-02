import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nikhil Mudakavi</title>
        <meta
          name="description"
          content="I’m Nikhil Mudakavi, a Passionate Product Developer with Expertise in Frontend, Backend, and UI/UX design."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl text-balance">
              I’m Nikhil Mudakavi, a Passionate Product Developer with Expertise in Frontend, Backend, and UI/UX Design.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              From a young age, I loved creating things. In my third year of Engineering, during the COVID pandemic, I and two friends built COVID Aware - a website educating people about COVID with real-time case counts. Seeing its impact, I knew my passion lay in developing digital experiences that make a difference.
              </p>
              <p>
              Embarking on my journey, I joined the prestigious company Publicis Sapient as a mobile developer. During my time at Publicis Sapient, I had an exciting journey completing three prestigious projects across different sectors, including banking, an internal accelerator, and the tourism industry, all within just one and a half years. Working alongside brilliant tech minds, skilled UI/UX developers, and insightful product managers, I soaked in valuable knowledge and even delved into UI/UX design. The experience sharpened my skills and enriched my growth as a mobile developer.
              </p>
              <p>
              Fuelled by a desire to experience the exhilarating pace of the startup world and eager to hone my skills in moving swiftly, I joined Rulezero as a frontend developer. As time progressed, my role expanded to include backend development, and Notably, I also actively contributed to UI/UX design for each feature in the product. At Rulezero, I took pride in building a robust software solution that fulfilled our customers needs in record time. The journey continues, and I am thrilled to be part of a team that consistently creates exciting and innovative solutions in private equity market.
              </p>
              <p>
              Calling all dreamers and innovators! Lets team up to craft extraordinary digital experiences that leave a lasting impact. Reach me on the below given social media handles to ignite our creativity and build frontend, backend, and UI/UX wonders together!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/NGM95476967" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/nikhil_mudakavi/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/NGM44" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ngm44/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:nikhilgmudakavi@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                nikhilgmudakavi@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
