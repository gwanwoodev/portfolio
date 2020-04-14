import cn from "classnames";

const MyAppSection = () => {
    return(
        <div className="header-section">
            <span className="header-title">Gwanwoodev </span>
            <span className={cn('header-title', 'bold')}>Portfolio</span>
            <p className={cn('header-title', 'header-text')}>
                ph: 010-6778-0118
            </p>
            <p className={cn('header-title', 'header-text')}>
                em: gwanwoodev@kakao.com
            </p>
        </div>
    );
}

export default MyAppSection;