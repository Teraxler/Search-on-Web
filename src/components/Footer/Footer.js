export default function Footer(props) {
  return (
    <footer
      className={`text-sm w-full pt-6 pb-3 bg-[#f2f2f2] text-[#1f1f1f] ${props.className}`}
    >
      <div className="flex justify-evenly flex-wrap">
        <div className="flex">
          <a
            className="block p-3.75 hover:underline"
            target="blank"
            href="https://about.google/?utm_source=google-IR&utm_medium=referral&utm_campaign=hp-footer&fg=1"
          >
            About
          </a>
          <a
            className="block p-3.75 hover:underline"
            target="blank"
            href="https://www.google.com/intl/en_ir/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
          >
            Advertising
          </a>
          <a
            className="block p-3.75 hover:underline"
            target="blank"
            href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
          >
            Business
          </a>
        </div>
        <div className="flex">
          <a
            className="block p-3.75 hover:underline"
            target="blank"
            href="https://policies.google.com/privacy?hl=en-IR&fg=1"
          >
            Privacy
          </a>
          <a
            className="block p-3.75 hover:underline"
            target="blank"
            href="https://policies.google.com/terms?hl=en-IR&fg=1"
          >
            Terms
          </a>
          <button className="block p-3.75 hover:underline">Settings</button>
        </div>
      </div>
    </footer>
  );
}
