import { GlobeIcon } from "@/assets/icons";

import s from "./LanguageSwitcher.module.scss";
import { FC } from "react";

type Props = {
    className?: string;
};

const LanguageSwitcher: FC<Props> = ({ className = "" }) => {
    return (
        <div className={`${s.switcher} ${className}`}>
            <GlobeIcon />
            <div className={s.languages}>
                <button className={`${s.switch} ${s.switchActive}`}>Рус</button>
                <button className={s.switch}>Eng</button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
