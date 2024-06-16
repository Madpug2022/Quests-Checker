import { QuestI } from "@/interfaces/quest"
import { FiDownload } from "react-icons/fi";
import { PiPaperPlaneTilt, PiCoffeeThin } from "react-icons/pi";
import { BsChatLeftText, BsBookmarkHeart } from "react-icons/bs";
import { LiaSmileWinkSolid } from "react-icons/lia";
import { GoArrowUpRight, GoCheck } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";


import "./style.scss"
import formatISODateToDDMMYYYY from "@/helpers/formatDate";
import Link from "next/link";

const QuestImage = ({ quest }: { quest: QuestI }) => {
    switch (quest.type) {
        case "install_extension":
            return <div className={`quest-icon icon__${quest.type}`}><FiDownload style={{ height: "16px", width: "16px" }} /></div>
        case "submit_application":
            return <div className={`quest-icon icon__${quest.type}`}><PiPaperPlaneTilt style={{ height: "16px", width: "16px" }} /></div>
        case "resolve-comment":
            return <div className={`quest-icon icon__${quest.type}`}><BsChatLeftText style={{ height: "16px", width: "16px" }} /></div>
        case "save_first_company":
            return <div className={`quest-icon icon__${quest.type}`}><BsBookmarkHeart style={{ height: "16px", width: "16px" }} /></div>
        case "add_contact":
            return <img className={`quest-icon icon__${quest.type}`} src={quest.company?.logo_url} alt="Add Contact" />
        case "send_linkedin_message":
            return <img className={`quest-icon icon__${quest.type}`} src={quest.company?.logo_url} alt="Send Linkedin Message" />
        case "send_linkedin_connection":
            return <img className={`quest-icon icon__${quest.type}`} src={quest.company?.logo_url} alt="Send Linkedin Connection" />
        case "send_first_email":
            return <img className={`quest-icon icon__${quest.type}`} src={"/assets/images/userplaceholder.png"} alt="Send First Email" />
        case "add_new_contact":
            return <img className={`quest-icon icon__${quest.type}`} src={quest.company?.logo_url} alt="Add New Contact" />
        case "schedule_coffee_chat":
            return <div className={`quest-icon icon__${quest.type}`}><PiCoffeeThin style={{ height: "16px", width: "16px" }} /></div>
        case "send_follow_up_email":
            return <img className={`quest-icon icon__${quest.type}`} src={quest.company?.logo_url} alt="Send Follow Up Email" />
        default:
            return <img src="/images/quests/default.png" alt="Default" />
    }
}

const QuestTitle = ({ quest }: { quest: QuestI }) => {
    switch (quest.type) {
        case "install_extension":
            return <h3 className="questcard__title">Install the CareerOS Chrome Extension</h3>
        case "submit_application":
            return <h3 className="questcard__title">Submit your application for {quest.job?.title || "Not found"} at {quest.company?.name || "Not found"}</h3>
        case "resolve-comment":
            return <h3 className="questcard__title">Resolve a comment from your Career Advisor</h3>
        case "save_first_company":
            return <h3 className="questcard__title">Save your first company</h3>
        case "add_contact":
            return <h3 className="questcard__title">Save a contact at {quest.company?.name || "Not found"}</h3>
        case "send_linkedin_message":
            return <h3 className="questcard__title">Send a LinkedIn message to {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"}</h3>
        case "send_linkedin_connection":
            return <h3 className="questcard__title">Send a LinkedIn invitation to {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"}</h3>
        case "send_first_email":
            return <h3 className="questcard__title">Send first email to {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"}</h3>
        case "add_new_contact":
            return <h3 className="questcard__title">Save a new contact at {quest.company?.name || "Not found"}</h3>
        case "schedule_coffee_chat":
            return <h3 className="questcard__title">Schedule a coffee chat with {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"}</h3>
        case "send_follow_up_email":
            return <h3 className="questcard__title">Send follow up email to {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"}</h3>
        default:
            return <h3 className="questcard__title">No Type found!</h3>
    }
}

const QuestDescription = ({ quest }: { quest: QuestI }) => {
    switch (quest.type) {
        case "install_extension":
            return <p className="questcard__description">Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.</p>
        case "submit_application":
            return <p className="questcard__description">Deadline: {formatISODateToDDMMYYYY(quest.due_date)}</p>
        case "resolve-comment":
            return <p className="questcard__description">You have an unresolved comment from your Career Advisor</p>
        case "save_first_company":
            return <p className="questcard__description">Browse our company database for your favorite companies or new inspiration and save your first company to get started.</p>
        case "add_contact":
            return <p className="questcard__description">You recently saved {quest.company?.name || ""}. The next step is to now save a contact who's working there to start networking with.</p>
        case "send_linkedin_message":
            return <p className="questcard__description">Send a customized LinkedIn message to reach out to your new contact. Don't worry! We'll help you with the wording.</p>
        case "send_linkedin_connection":
            return <p className="questcard__description">Send an invitation with a tailored message to your new contact. Our AI will help you!</p>
        case "send_first_email":
            return <p className="questcard__description">Send a first email to {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"} to get a conversation started.</p>
        case "add_new_contact":
            return <p className="questcard__description">Add another contact to this company to start networking.</p>
        case "schedule_coffee_chat":
            return <p className="questcard__description">Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our coffee chat tips to prepare for your meeting.</p>
        case "send_follow_up_email":
            return <p className="questcard__description">Send a follow-up email to {quest.contact?.first_name || "Not found"} {quest.contact?.last_name || "Not found"} at {quest.company?.name || "Not found"} to get a conversation started.</p>
        default:
            return <p className="questcard__description">No description found</p>
    }
}

const QuestCard = ({ quest, completed = false }: { quest?: QuestI, completed?: boolean }) => {

    if (completed && !quest) {
        return (
            <li className="questcard questcard--completed">
                <div className="questcard__iconcontainer">
                    <div className={`quest-icon icon__completed`}><LiaSmileWinkSolid style={{ height: "16px", width: "16px" }} /></div>
                </div>
                <div className="questcard__content">
                    <h3 className="questcard__title">All Quests completed!</h3>
                    <p className="questcard__description">You did it! Now, relax and wait for more...</p>
                </div>
            </li>
        )
    }

    return (
        quest && <li className="questcard">
            <div className="questcard__iconcontainer">
                <QuestImage quest={quest} />
            </div>
            <div className="questcard__content">
                <QuestTitle quest={quest} />
                <QuestDescription quest={quest} />
            </div>
            {quest.company && <div className="questcard__actions">
                <Link href={quest.company.linkedin_url} className="questcard__link">
                    <GoArrowUpRight style={{ height: "16px", width: "16px" }} />
                </Link>
            </div>}
            <div className="questcard__options">
                <GoCheck className="questcard__options__icon" />
                <RxCross2 className="questcard__options__icon" />
            </div>
        </li>
    )
}

export default QuestCard
