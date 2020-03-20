import cn from "classnames";

const MyAppSection = () => {
    return(
        <div className="header-section">
            <span className="header-title">Gwanwoodev </span>
            <span className={cn('header-title', 'bold')}>Portfolio</span>
            <p className={cn('header-title', 'header-text')}>
                Lorem ipsum dolor sit amet. consectetur adlpiscing eLit.
                Suspendlsse dignissim consectetur feugiat.
                Fusce quis ex fringitta. faciUsis velit et.
            </p>
        </div>
    );
}

export default MyAppSection;