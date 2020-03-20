import cn from "classnames";

const MyAppSection = () => {
    return(
        <div className="header-section">
            <span className="header-title">Gwanwoodev </span>
            <span className={cn('header-title', 'bold')}>Portfolio</span>
        </div>
    );
}

export default MyAppSection;