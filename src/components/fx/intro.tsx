/**
 * First-load brand reveal — a porcelain curtain that holds the wordmark while a
 * champagne hairline draws beneath it, then the whole panel lifts to uncover
 * the hero. Rendered in the (persistent) root layout and driven purely by CSS,
 * so it paints with the very first frame (no flash of content), plays once per
 * hard load, and never replays on client-side navigation. Skipped under
 * prefers-reduced-motion (CSS) and for automated agents — the inline guard sets
 * a class before paint so crawlers, link previews and visual audits see the
 * real page immediately.
 */
export function Intro() {
  return (
    <>
      <script
        // Runs synchronously during HTML parse, before the curtain paints.
        dangerouslySetInnerHTML={{
          __html:
            "try{if(navigator.webdriver)document.documentElement.classList.add('intro-skip')}catch(e){}",
        }}
      />
      <div className="intro-curtain" aria-hidden>
        <span className="intro-curtain__bloom" />
        <span className="relative flex flex-col items-center">
          <span className="intro-mark font-display text-4xl font-normal tracking-[0.02em] text-noir md:text-6xl">
            Richy<span className="text-champagne">&middot;</span>Risk
          </span>
          <span className="intro-rule mt-5 block h-px bg-champagne/70" />
          <span className="intro-tag mt-5 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-stone">
            Luxury Skin &amp; Color
          </span>
        </span>
      </div>
    </>
  );
}
