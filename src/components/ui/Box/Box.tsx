import "./style.scss"
import { CiCircleInfo } from "react-icons/ci";

const Box = ({ title, tutorial, children, ...props }:
    { title?: string, tutorial?: string, children?: React.ReactNode, props?: any }
) => {
    return (
        <section className="box">
            <div className="box__header">
                <h2 className="box__header__title">{title}</h2>
                {tutorial && <CiCircleInfo className="box__header__icon" title={tutorial} />}
            </div>
            <div className="box__content">
                {children}
            </div>
        </section>
    )
}

export default Box
