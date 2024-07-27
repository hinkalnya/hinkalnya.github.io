import PopularTasks from "../modules/PopularTasks"
import FaqSection from "../modules/FaqSection"
import { faqData } from "../data"

const Home = () => {
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
                <PopularTasks />
            </section>
            <section>
                <h2 className="text-2xl mt-4">FAQ</h2>
                <FaqSection faqs={faqData} />
            </section>
        </>
    )
}

export default Home
