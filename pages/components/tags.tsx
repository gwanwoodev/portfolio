import Tag from "./tag";

const MyAppTags = (_props:any ) => {
    return(
        <div className="contents-tags">
            <Tag tagText="All" />
            <Tag tagText="HTML+CSS" />
            <Tag tagText="Javascript" />
            <Tag tagText="React.js" />
            <Tag tagText="Node.js" />
        </div>        
    )
}

export default MyAppTags;