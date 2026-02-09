const CVDownloadButton = () => {
  return (
    <a
      href="/Lebenslauf.pdf"
      download="MyCV"
      target="_blank"
      className="ui-btn w-full border border-[2px] border-x-red-800 border-y-red-700 hover:border-[#FC8972] inset-shadow-sm cursor-pointer inline-flex justify-center"
    >
      <span>DOWNLOAD CV</span>
    </a>
  );
};

export default CVDownloadButton;
