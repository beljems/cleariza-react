import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "./Link";
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="social-media">
            <ul className="social-media__list">
                <li className="social-media__item">
                    <Link 
                        iconComponent={<BsLinkedin/>} 
                        isTargetBlank={true}
                        link={''}
                    />
                </li>
                <li className="social-media__item">
                    <Link 
                        iconComponent={<BsGithub/>} 
                        isTargetBlank={true}
                        link={''}
                    />
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia;
