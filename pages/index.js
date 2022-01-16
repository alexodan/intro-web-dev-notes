import { BrowserMockup } from '../components/browser-mockup'
import Layout from '../components/layout'
import { Lesson } from '../components/lesson'
import { getLessonContent } from '../lib/lessons'

const Home = ({ lesson }) => {
  return (
    <Layout widthClass="max-w-4xl">
      <div className="flex flex-col items-center mb-16">
        <div className="flex flex-col self-stretch">
          <p className="text-center text-4xl mt-32 font-bold">
            Pagina de bienvenida al curso de{' '}
            <strong className="text-pink-800 font-bold">html, css y js</strong>.
          </p>
        </div>
        <div className="text-center mt-8">
          <a href="/course" className="btn btn-primary btn-big">
            Ir al curso
          </a>
        </div>

        <div data-aos="fade" className="flex flex-col self-stretch">
          <p className="text-center text-2xl mt-6 text-gray-500 leading-8">
            Este es un template creado por Sébastien Castiel para su curso de{' '}
            <a href="https://useeffect.dev" className="text-pink-800">
              React Hooks
            </a>
            .
          </p>
          <div className="text-center mt-8">
            <a
              href="https://github.com/scastiel/nextjs-course-template"
              className="btn btn-primary btn-big"
            >
              GitHub repo
            </a>
          </div>
        </div>

        <div className="flex flex-col self-stretch">
          <BrowserMockup title="example.com">
            <Lesson lesson={lesson} />
            <div className="my-8 flex flex-col space-y-2 items-center">
              <span>Liked this lesson?</span>
              <a className="btn btn-primary" href="/course">
                Continue learning
              </a>
            </div>
          </BrowserMockup>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: { lesson: await getLessonContent('01.01-first-sublesson') },
  }
}

export default Home
