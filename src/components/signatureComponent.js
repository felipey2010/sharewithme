import SiteText from "../data/SiteText.json";

export default function SignatureComponent({ siteLanguage }) {
  return (
    <div className="signature">
      {siteLanguage === "English" ? (
        <h5>Created by: Felipey.</h5>
      ) : (
        <h5>Criado por: Felipey.</h5>
      )}
    </div>
  );
}
