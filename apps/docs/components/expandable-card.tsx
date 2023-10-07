import { useState } from "react";
import { MagicCard, MagicExclude } from "react-magic-motion";

function CloseFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="16"
        width="14"
        height="15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M26 5L18 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}

function OpenFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="8"
        width="21"
        height="23"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 24L15 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}

export function ExpandableCard(): JSX.Element {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          maxWidth: isCardExpanded ? "40rem" : "17rem",
          width: "100%",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          padding: `1.35rem ${isCardExpanded ? "2rem" : "0"}`,
          color: isCardExpanded ? "white" : "currentColor",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontWeight: 600,
              fontSize: "1.4em",
            }}
          >
            Mona Lisa
          </h3>

          <button
            style={{ position: "absolute", right: 0, zIndex: 9999 }}
            onClick={() => setIsCardExpanded(!isCardExpanded)}
          >
            <MagicExclude>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isCardExpanded ? (
                  <CloseFullscreenSvg />
                ) : (
                  <OpenFullscreenSvg />
                )}
              </svg>
            </MagicExclude>
          </button>
        </div>
        <div style={{ overflowY: "auto", overflowX: "hidden" }}>
          <img
            style={{
              maxWidth: isCardExpanded ? "24rem" : "17.5rem",
              width: "100%",
              height: "auto",
            }}
            alt="Mona Lisa"
            src="https://react-magic-motion.nyc3.cdn.digitaloceanspaces.com/examples/expandable-card/mona-lisa.jpg"
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                Title: The Enigmatic Smile of Mona Lisa
              </h4>
              <p>
                Unveil the allure of the world-renowned masterpiece, the Mona
                Lisa, displayed in the heart of the Louvre Museum in Paris.
                Painted by the illustrious Leonardo da Vinci between 1503 and
                1506, this portrait is celebrated for Mona Lisa's enigmatic
                smile that seems to change depending on the viewing angle.
              </p>
              <p>
                The exquisite blending of light and shadow, known as sfumato,
                contributes to the mystique of her expression. Da Vinci’s
                remarkable attention to detail is evident in the delicate
                veiling and the meticulous background landscapes that frame Mona
                Lisa's serene demeanor.
              </p>
              <p>
                The artistry and the mysteries enveloping the Mona Lisa continue
                to captivate audiences, making it an enduring symbol of the
                Renaissance era. Experience the magnetism of the Mona Lisa, a
                testament to Leonardo da Vinci's genius, and delve into a visual
                dialogue with a smile that has intrigued the world for
                centuries.
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
