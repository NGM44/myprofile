import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <article  href={article.link} className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.link}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description  href={article.link}>{article.description}</Card.Description>
        <Card.Cta  href={article.link}>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}


const articlesToPost = [
  {
    author: 'NGM',
    date: '2023-10-01',
    link: 'https://medium.com/@NGM44/discovering-the-web-how-does-the-internet-really-work-1c61e695233b',
    title: 'Discovering the Web: How Does the Internet Really Work?',
    description:
      'Ever wondered how a simple click on a link magically takes you to a world of information? Let’s unravel the web’s behind-the-scenes…',
  },

  {
    author: 'NGM',
    date: '2023-10-01',
    link: 'https://medium.com/@NGM44/mastering-ux-magic-the-google-approach-to-ux-research-38440912e28',
    title: 'Mastering UX Magic: The Google Approach to UX Research.',
    description:
      'Ever wondered how a simple click on a link magically takes you to a world of information? Let’s unravel the web’s behind-the-scenes…',
  },
  {
    author: 'NGM',
    date: '2023-09-25',
    title: 'The Crux of UX Design in 2023',
    link: 'https://medium.com/@NGM44/the-crux-of-ux-design-in-2023-ee36d10a2730',
    description:
      'Every product is designed with a strong emphasis on UX. Understanding the crux of UX design can pave the way for enhancing your product.',
  },

  {
    author: 'NGM',
    date: '2023-09-02',
    link: 'https://medium.com/@NGM44/personal-m-tech-week-1-2-big-failure-65292941e13f',
    title: ' Personal M-Tech Week 1 & 2 (Big Failure)',
    description:
      'As you’re aware , I began my personal M-Tech program on August 22nd 2023. While Week 1 progressed well, Week 2 veered off course entirely.',
  },
  {
    author: 'NGM',
    date: '2023-08-23',
    title: 'Personal M-Tech',
    link: 'https://medium.com/@NGM44/personal-m-tech-8a1decda9b8a',
    description:
      ' After 2 and half years as full stack developer. I wanted to do something more satisfactory . So here is an crazy idea which might be…',
  },
  {
    author: 'NGM',
    date: '2023-05-26',
    link: 'https://medium.com/@NGM44/edit-your-images-with-python-now-37790cb4cf16',
    title: 'Edit your Images with Python Now!!',
    description:
      'Image processing is a fundamental aspect of many applications, and the Python programming language offers a versatile library called Pillow…',
  },
  {
    author: 'NGM',
    date: '2023-05-25',
    link: 'https://medium.com/@NGM44/hack-the-location-of-phone-number-with-this-python-lib-e6744a56bd76',
    title: 'Hack The Location of Phone Number with this Python lib.',
    description:
      'The phonenumbers library is a popular Python library for parsing, formatting, and validating phone numbers. The library provides various…',
  },
  {
    author: 'NGM',
    date: '2023-05-15',
    link: 'https://medium.com/@NGM44/quick-read-about-new-announcement-made-by-google-in-i-o-23-4a6b88f8741e',
    title: 'Quick Read About New Announcement made by Google in I/O 23',
    description:
      'In Google I/O keynote conference, Google uttered the term “AI” over 140 Times. This momentous occasion unveiled an extensive array of AI…',
  },
  {
    author: 'NGM',
    date: '2023-05-10',
    link: 'https://medium.com/@NGM44/ondc-vs-swiggy-zomato-what-is-this-ondc-1ccc7b44ff8c',
    title: 'ONDC vs Swiggy, Zomato ?????? What is this ONDC?????',
    description:
      'Open Network for Digital Commerce (ONDC) is a dynamic realm where digital transactions crosses the limitations and barriers. ONDC is a…',
  },

  {
    author: 'NGM',
    date: '2023-04-04',
    link: 'https://medium.com/@NGM44/zustand-state-manager-better-then-redux-and-context-react-b3c207e2ae51', 
    title: 'Zustand State Manager better then Redux and context???(REACT)',
    description:
      'Zustand is a small, fast and scalable barebones state-management solution using simplified flux principles. This is an one state-manager in…',
  },

  {
    author: 'NGM',
    date: '2023-01-07',
    link: 'https://medium.com/@NGM44/want-to-build-a-revolutionary-product-then-dont-miss-this-book-d2c8320399aa',
    title:
      ' Want to build a Revolutionary Product ? Then dont miss this book!!!',
    description:
      'Hooked: How to Build Habit-Forming Products” is a book by Nir Eyal that explores the psychology behind why some products become habits…',
  },
  {
    author: 'NGM',
    date: '2022-11-24',
    link:'https://medium.com/@NGM44/impeller-flutter-8d8aba691fa3',
    title: 'Impeller & Flutter',
    description: 'New Rendering Engine for smooth animation in flutter',
  },
  {
    author: 'NGM',
    date: '2022-10-09',
    link: 'https://medium.com/@NGM44/rework-reimagine-the-way-you-work-64019d732113',
    title: 'REWORK, Reimagine the way you work!',
    description:
      'REWORK written by Jason Fried Co-Founder & CEO of Basecamp (formerly 37 Signals).  This book made me think everything that I have been…',
  },

  {
    author: 'NGM',
    date: '2022-05-05',
    link: 'https://medium.com/@NGM44/5-steps-for-awesome-ux-design-4318d4fc0129',
    title: '5 Steps for Awesome UX Design…!',
    description:
      'Make your product a benchmark in the market by following these 5 steps in your UX Design Journey. Stick through the Article till end to…',
  },
  {
    author: 'NGM',
    date: '2022-06-04',
    link: 'https://medium.com/@NGM44/ux-designing-and-its-5-secrets-953576c2fe9e',
    title: 'UX Designing and its 5 Secrets…!',
    description:
      'User Experience is simply refers to the way a product behaves and is used in the real world. A positive user experience is one in which the…',
  },
  {
    author: 'NGM',
    link: 'https://medium.com/@NGM44/how-i-developed-an-app-in-just-48-hours-8f8cca16cb69',
    date: '2022-04-01',
    title: 'How I Developed an App in Just 48 hours..!',
    description:
      'Big Myth in Market is that Creating a app requires months of time which itself is a Half Truth, When you have passion for development...',
  },
]

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Nikhil Mudakavi</title>
        <meta
          name="Nikhil Mudakavi Blogs"
          content="Nikhil Blogs, Product Development, UI UX Design, Programming, Startups and more thoughts collected in below."
        />
      </Head>
      <SimpleLayout
        title="Writing on Product, UI UX Design, AI and Startups."
        intro="All of my long-form thoughts on Product, Ui Ux Design, AI, Startups and more, collected in below."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articlesToPost.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
