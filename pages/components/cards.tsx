import Card from "./card";

const dummySrc = "https://gwanwoodev.github.io/assets/img/posts/momentum_base_thumb.jpg";
const previewText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."

const MyAppCards = (_props:any) => {
    return(
        <div className="contents-cards">
            <Card title="lorem ipsum 1" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 2" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 3" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 4" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 5" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 6" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 7" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 8" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 9" imgSrc={dummySrc} previewText={previewText} />
            <Card title="lorem ipsum 10" imgSrc={dummySrc} previewText={previewText} />
        </div>
    )
}

export default MyAppCards;