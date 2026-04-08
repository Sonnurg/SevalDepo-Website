import { brandAssets } from "../siteContent";

function SectionHeading({ kicker, title, light = false }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <img
        className={`section-decor${light ? " section-decor-light" : ""}`}
        src={brandAssets.titleDecor}
        alt=""
      />
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
