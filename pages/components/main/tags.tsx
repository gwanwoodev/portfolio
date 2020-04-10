import Tag from "./tag";

const MyAppTags = (_props:any ) => {
    return(
        <div className="tags">
            <Tag tagText="HTML,CSS" />
            <Tag tagText="ES6+" />
            <Tag tagText="Typescript" />
            <Tag tagText="React.js" />
            <Tag tagText="Node.js" />
            <Tag tagText="Express.js" />
        </div>        
    )
}

export default MyAppTags;