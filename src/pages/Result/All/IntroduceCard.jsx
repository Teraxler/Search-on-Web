export default function IntroduceCard(props) {
  const {
    title,
    type,
    website,
    imageUrl,
    description,
    descriptionSource,
    descriptionLink,
    attributes,
  } = props;

  const entriesAttributes = Object.entries(attributes);

  return (
    <div className="max-w-90 h-max">
      <div className="flex flex-col mb-5">
        <a
          className={`text-[28px]/9 text-eerie-black font-medium ${
            website ? "hover:underline" : ""
          }`}
          href={website}
        >
          {title}
        </a>
        <span className="text-[#474747] text-sm">{type}</span>
      </div>
      <div className="rounded-[20px] overflow-hidden w-max">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="mt-3 mb-6">
        <p className="text-sm/5.5 text-eerie-black">{description}</p>
        <div className="mt-5">
          <span className="text-davy-grey">Scource: </span>
          <a className="text-neon-blue hover:underline" href={descriptionLink}>
            {descriptionSource}
          </a>
        </div>
      </div>
      <div className="pt-6 mb-5 border-t border-gainsboro ">
        {entriesAttributes.map((attribute) => (
          <div key={attribute[0]}>
            <span className="font-bold text-eerie-black">{attribute[0]}: </span>
            <span>{attribute[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
