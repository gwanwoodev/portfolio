import Cards from "./cards";

const Contents = props => (
    <div className="wrapper-contents">
        <Cards data={props.data} />
    </div>
)

export default Contents;