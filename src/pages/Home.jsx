import ListTasks from "../modules/ListTasks"
import FaqSection from "../modules/FaqSection"

const Home = ({ faq, tasks }) => {
    return (
        <>
            <header>
                <h1 className="text-3xl">University Task Helper</h1>
                <p className="mt-2">
                    Offering comprehensive assistance with homeworks, lab works
                    and tests.
                </p>
            </header>
            <section>
                <h2 className="text-2xl mt-4">Popular orders</h2>
                <ListTasks tasks={tasks} limit={6} />
            </section>
            <section>
                <h2 className="text-2xl mt-4">FAQ</h2>
                <FaqSection faqs={faq} />
            </section>
        </>
    )
}

export default Home
