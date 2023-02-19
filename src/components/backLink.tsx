import { Link } from "react-router-dom";
import "./backLink.css";
import { IoMdArrowRoundBack } from "react-icons/io";
export const BackLink = (props: any) => {
    return(
        <div className="back-link">
            <Link to={props.path}><IoMdArrowRoundBack/></Link>
        </div>
    );
}