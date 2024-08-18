import Faq from "../components/Faq"

const FaqSection = ({ faqs }) => (
    <div className="faq-section">
        {faqs &&
            faqs.map(({ question, answer }, index) => (
                <Faq key={index} question={question} answer={answer} />
            ))}
    </div>
)

export default FaqSection
