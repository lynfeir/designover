/**
 * Fixed, non-interactive grain + vignette layers that sit above the page
 * to give every marketing surface a filmic, cinematic finish.
 */
export default function CinematicFX() {
  return (
    <>
      <div
        aria-hidden
        className="cinematic-vignette pointer-events-none fixed inset-0 z-[55]"
      />
      <div
        aria-hidden
        className="cinematic-grain-layer pointer-events-none fixed inset-0 z-[56]"
      />
    </>
  );
}
