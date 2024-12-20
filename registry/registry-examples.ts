import { Registry } from "@/registry/schema";

export const examples: Registry = [
  {
    name: "magic-card-demo",
    type: "registry:example",
    registryDependencies: ["magic-card"],
    files: ["example/magic-card-demo.tsx"],
  },
  {
    name: "warp-animation-container-demo",
    type: "registry:example",
    registryDependencies: ["warp-animation-container"],
    files: ["example/warp-animation-container-demo.tsx"],
  },
  {
    name: "morphing-text-demo",
    type: "registry:example",
    registryDependencies: ["morphing-text"],
    files: ["example/morphing-text-demo.tsx"],
  },
  {
    name: "scroll-progress-demo",
    type: "registry:example",
    registryDependencies: ["scroll-progress"],
    files: ["example/scroll-progress-demo.tsx"],
  },
  {
    name: "neon-gradient-card-demo",
    type: "registry:example",
    files: ["example/neon-gradient-card-demo.tsx"],
  },
  {
    name: "meteors-demo",
    type: "registry:example",
    registryDependencies: ["meteors"],
    files: ["example/meteors-demo.tsx"],
  },
  {
    name: "grid-pattern-demo",
    type: "registry:example",
    registryDependencies: ["grid-pattern"],
    files: ["example/grid-pattern-demo.tsx"],
  },
  {
    name: "grid-pattern-linear-gradient",
    type: "registry:example",
    registryDependencies: ["grid-pattern"],
    files: ["example/grid-pattern-linear-gradient.tsx"],
  },
  {
    name: "grid-pattern-dashed",
    type: "registry:example",
    registryDependencies: ["grid-pattern"],
    files: ["example/grid-pattern-dashed.tsx"],
  },
  {
    name: "dot-pattern-demo",
    type: "registry:example",
    registryDependencies: ["dot-pattern"],
    files: ["example/dot-pattern-demo.tsx"],
  },
  {
    name: "dot-pattern-linear-gradient",
    type: "registry:example",
    registryDependencies: ["dot-pattern"],
    files: ["example/dot-pattern-linear-gradient.tsx"],
  },
  {
    name: "flickering-grid-demo",
    type: "registry:example",
    files: ["example/flickering-grid-demo.tsx"],
  },
  {
    name: "flickering-grid-rounded-demo",
    type: "registry:example",
    files: ["example/flickering-grid-rounded-demo.tsx"],
  },
  {
    name: "hero-video-dialog-demo",
    type: "registry:example",
    files: ["example/hero-video-dialog-demo.tsx"],
  },
  {
    name: "hero-video-dialog-demo-top-in-bottom-out",
    type: "registry:example",
    files: ["example/hero-video-dialog-demo-top-in-bottom-out.tsx"],
  },
  {
    name: "code-comparison-demo",
    type: "registry:example",
    files: ["example/code-comparison-demo.tsx"],
  },
  {
    name: "marquee-demo",
    type: "registry:example",
    registryDependencies: ["marquee"],
    files: ["example/marquee-demo.tsx"],
  },
  {
    name: "marquee-demo-vertical",
    type: "registry:example",
    registryDependencies: ["marquee"],
    files: ["example/marquee-demo-vertical.tsx"],
  },
  {
    name: "marquee-logos",
    type: "registry:example",
    registryDependencies: ["marquee"],
    files: ["example/marquee-logos.tsx"],
  },
  {
    name: "marquee-3d",
    type: "registry:example",
    registryDependencies: ["marquee"],
    files: ["example/marquee-3d.tsx"],
  },
  {
    name: "globe-demo",
    type: "registry:example",
    registryDependencies: ["globe"],
    files: ["example/globe-demo.tsx"],
  },
  {
    name: "tweet-card-demo",
    type: "registry:example",
    registryDependencies: ["tweet-card"],
    files: ["example/tweet-card-demo.tsx"],
  },
  {
    name: "tweet-card-images",
    type: "registry:example",
    registryDependencies: ["tweet-card"],
    files: ["example/tweet-card-images.tsx"],
  },
  {
    name: "tweet-card-meta-preview",
    type: "registry:example",
    registryDependencies: ["tweet-card"],
    files: ["example/tweet-card-meta-preview.tsx"],
  },
  {
    name: "shimmer-button-demo",
    type: "registry:example",
    registryDependencies: ["shimmer-button"],
    files: ["example/shimmer-button-demo.tsx"],
  },
  {
    name: "bento-demo",
    type: "registry:example",
    registryDependencies: [
      "bento-grid",
      "marquee",
      "animated-list-demo",
      "animated-beam-multiple-outputs",
      "shadcn:command",
      "shadcn:calendar",
    ],
    dependencies: ["@radix-ui/react-icons"],
    files: ["example/bento-demo.tsx"],
  },
  {
    name: "bento-demo-vertical",
    type: "registry:example",
    registryDependencies: ["bento-grid"],
    dependencies: ["@radix-ui/react-icons"],
    files: ["example/bento-demo-vertical.tsx"],
  },
  {
    name: "number-ticker-demo",
    type: "registry:example",
    registryDependencies: ["number-ticker"],
    files: ["example/number-ticker-demo.tsx"],
  },
  {
    name: "number-ticker-decimal-demo",
    type: "registry:example",
    registryDependencies: ["number-ticker"],
    files: ["example/number-ticker-decimal-demo.tsx"],
  },
  {
    name: "ripple-demo",
    type: "registry:example",
    registryDependencies: ["ripple"],
    files: ["example/ripple-demo.tsx"],
  },
  {
    name: "retro-grid-demo",
    type: "registry:example",
    files: ["example/retro-grid-demo.tsx"],
  },
  {
    name: "animated-list-demo",
    type: "registry:example",
    registryDependencies: ["animated-list"],
    files: ["example/animated-list-demo.tsx"],
  },
  {
    name: "animated-shiny-text-demo",
    type: "registry:example",
    registryDependencies: ["animated-shiny-text"],
    dependencies: ["@radix-ui/react-icons"],
    files: ["example/animated-shiny-text-demo.tsx"],
  },
  {
    name: "particles-demo",
    type: "registry:example",
    registryDependencies: ["particles"],
    dependencies: ["next-themes"],
    files: ["example/particles-demo.tsx"],
  },
  {
    name: "animated-grid-pattern-demo",
    type: "registry:example",
    registryDependencies: ["animated-grid-pattern"],
    files: ["example/animated-grid-pattern-demo.tsx"],
  },
  {
    name: "border-beam-demo",
    type: "registry:example",
    registryDependencies: ["border-beam"],
    files: ["example/border-beam-demo.tsx"],
  },
  {
    name: "animated-beam-demo",
    type: "registry:example",
    registryDependencies: ["animated-beam"],
    dependencies: ["@radix-ui/react-icons"],
    files: ["example/animated-beam-demo.tsx"],
  },
  {
    name: "animated-beam-unidirectional",
    type: "registry:example",
    registryDependencies: ["animated-beam"],
    files: ["example/animated-beam-unidirectional.tsx"],
  },
  {
    name: "animated-beam-bidirectional",
    type: "registry:example",
    registryDependencies: ["animated-beam"],
    files: ["example/animated-beam-bidirectional.tsx"],
  },
  {
    name: "animated-beam-multiple-inputs",
    type: "registry:example",
    registryDependencies: ["animated-beam"],
    files: ["example/animated-beam-multiple-inputs.tsx"],
  },
  {
    name: "animated-beam-multiple-outputs",
    type: "registry:example",
    registryDependencies: ["animated-beam"],
    files: ["example/animated-beam-multiple-outputs.tsx"],
  },
  {
    name: "text-reveal-demo",
    type: "registry:example",
    registryDependencies: ["text-reveal"],
    files: ["example/text-reveal-demo.tsx"],
  },
  {
    name: "animated-gradient-text-demo",
    type: "registry:example",
    registryDependencies: ["animated-gradient-text"],
    dependencies: ["lucide-react"],
    files: ["example/animated-gradient-text-demo.tsx"],
  },
  {
    name: "orbiting-circles-demo",
    type: "registry:example",
    registryDependencies: ["orbiting-circles"],
    dependencies: ["@radix-ui/react-icons"],
    files: ["example/orbiting-circles-demo.tsx"],
  },
  {
    name: "dock-demo",
    type: "registry:example",
    registryDependencies: ["dock"],
    files: ["example/dock-demo.tsx"],
  },
  {
    name: "dock-demo-2",
    type: "registry:example",
    registryDependencies: ["dock"],
    files: ["example/dock-demo-2.tsx"],
  },
  {
    name: "dock-demo-3",
    type: "registry:example",
    registryDependencies: ["dock"],
    files: ["example/dock-demo-3.tsx"],
  },
  {
    name: "word-rotate-demo",
    type: "registry:example",
    registryDependencies: ["word-rotate"],
    files: ["example/word-rotate-demo.tsx"],
  },
  {
    name: "hyper-text-demo",
    type: "registry:example",
    registryDependencies: ["hyper-text"],
    files: ["example/hyper-text-demo.tsx"],
  },
  {
    name: "avatar-circles-demo",
    type: "registry:example",
    registryDependencies: ["avatar-circles"],
    files: ["example/avatar-circles-demo.tsx"],
  },
  {
    name: "word-pull-up-demo",
    type: "registry:example",
    registryDependencies: ["word-pull-up"],
    files: ["example/word-pull-up-demo.tsx"],
  },
  {
    name: "typing-animation-demo",
    type: "registry:example",
    registryDependencies: ["typing-animation"],
    files: ["example/typing-animation-demo.tsx"],
  },
  {
    name: "blur-in-demo",
    type: "registry:example",
    registryDependencies: ["blur-in"],
    files: ["example/blur-in-demo.tsx"],
  },
  {
    name: "scroll-based-velocity-demo",
    type: "registry:example",
    registryDependencies: ["scroll-based-velocity"],
    files: ["example/scroll-based-velocity-demo.tsx"],
  },
  {
    name: "scratch-to-reveal-demo",
    type: "registry:example",
    registryDependencies: ["scratch-to-reveal"],
    files: ["example/scratch-to-reveal-demo.tsx"],
  },
  {
    name: "letter-pullup-demo",
    type: "registry:example",
    registryDependencies: ["letter-pullup"],
    files: ["example/letter-pullup-demo.tsx"],
  },
  {
    name: "flip-text-demo",
    type: "registry:example",
    registryDependencies: ["flip-text"],
    files: ["example/flip-text-demo.tsx"],
  },
  {
    name: "sparkles-text-demo",
    type: "registry:example",
    files: ["example/sparkles-text-demo.tsx"],
  },
  {
    name: "icon-cloud-demo",
    type: "registry:example",
    registryDependencies: ["icon-cloud"],
    files: ["example/icon-cloud-demo.tsx"],
  },
  {
    name: "gradual-spacing-demo",
    type: "registry:example",
    files: ["example/gradual-spacing-demo.tsx"],
  },
  {
    name: "word-fade-in-demo",
    type: "registry:example",
    files: ["example/word-fade-in-demo.tsx"],
  },
  {
    name: "fade-text-demo",
    type: "registry:example",
    files: ["example/fade-text-demo.tsx"],
  },
  {
    name: "shiny-button-demo",
    type: "registry:example",
    files: ["example/shiny-button-demo.tsx"],
  },
  {
    name: "box-reveal-demo",
    type: "registry:example",
    files: ["example/box-reveal-demo.tsx"],
  },
  {
    name: "animated-circular-progress-bar-demo",
    type: "registry:example",
    files: ["example/animated-circular-progress-bar-demo.tsx"],
  },
  {
    name: "shine-border-demo",
    type: "registry:example",
    files: ["example/shine-border-demo.tsx"],
  },
  {
    name: "shine-border-demo-2",
    type: "registry:example",
    files: ["example/shine-border-demo-2.tsx"],
  },
  {
    name: "confetti-demo",
    type: "registry:example",
    files: ["example/confetti-demo.tsx"],
  },
  {
    name: "confetti-basic-cannon",
    type: "registry:example",
    files: ["example/confetti-basic-cannon.tsx"],
  },
  {
    name: "confetti-random-direction",
    type: "registry:example",
    files: ["example/confetti-random-direction.tsx"],
  },
  {
    name: "confetti-fireworks",
    type: "registry:example",
    files: ["example/confetti-fireworks.tsx"],
  },
  {
    name: "confetti-stars",
    type: "registry:example",
    files: ["example/confetti-stars.tsx"],
  },
  {
    name: "confetti-side-cannons",
    type: "registry:example",
    files: ["example/confetti-side-cannons.tsx"],
  },
  {
    name: "confetti-custom-shapes",
    type: "registry:example",
    files: ["example/confetti-custom-shapes.tsx"],
  },
  {
    name: "confetti-emoji",
    type: "registry:example",
    files: ["example/confetti-emoji.tsx"],
  },
  {
    name: "animated-subscribe-button-demo",
    type: "registry:example",
    files: ["example/animated-subscribe-button-demo.tsx"],
  },
  {
    name: "cool-mode-demo",
    type: "registry:example",
    files: ["example/cool-mode-demo.tsx"],
  },
  {
    name: "cool-mode-custom",
    type: "registry:example",
    files: ["example/cool-mode-custom.tsx"],
  },
  {
    name: "pulsating-button-demo",
    type: "registry:example",
    files: ["example/pulsating-button-demo.tsx"],
  },
  {
    name: "ripple-button-demo",
    type: "registry:example",
    files: ["example/ripple-button-demo.tsx"],
  },
  {
    name: "file-tree-demo",
    type: "registry:example",
    files: ["example/file-tree-demo.tsx"],
  },
  {
    name: "blur-fade-demo",
    type: "registry:example",
    files: ["example/blur-fade-demo.tsx"],
  },
  {
    name: "blur-fade-text-demo",
    type: "registry:example",
    files: ["example/blur-fade-text-demo.tsx"],
  },
  {
    name: "safari-demo",
    type: "registry:example",
    files: ["example/safari-demo.tsx"],
  },
  {
    name: "safari-demo-2",
    type: "registry:example",
    files: ["example/safari-demo-2.tsx"],
  },
  {
    name: "safari-demo-3",
    type: "registry:example",
    files: ["example/safari-demo-3.tsx"],
  },
  {
    name: "iphone-15-pro-demo",
    type: "registry:example",
    files: ["example/iphone-15-pro-demo.tsx"],
  },
  {
    name: "iphone-15-pro-demo-2",
    type: "registry:example",
    files: ["example/iphone-15-pro-demo-2.tsx"],
  },
  {
    name: "iphone-15-pro-demo-3",
    type: "registry:example",
    files: ["example/iphone-15-pro-demo-3.tsx"],
  },
  {
    name: "rainbow-button-demo",
    type: "registry:example",
    files: ["example/rainbow-button-demo.tsx"],
  },
  {
    name: "interactive-hover-button-demo",
    type: "registry:example",
    files: ["example/interactive-hover-button-demo.tsx"],
  },
];
