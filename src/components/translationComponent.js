export default function TranslatorComponent({ siteLanguage, setSiteLanguage }) {
  async function handleLanguage(value) {
    setSiteLanguage(value);
    localStorage.setItem("@sharewithme/language", value);
  }

  return (
    <div className="right-container">
      <select
        name="languages"
        id="languages"
        value={siteLanguage}
        onChange={e => handleLanguage(e.target.value)}>
        <option value="English">English</option>
        <option value="Português">Português</option>
      </select>
    </div>
  );
}
