import styled from "styled-components";

// export const LoaderParent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &.latest-article-loader {
//     min-height: 418px;
//     margin: 0 auto;
//   }
//   &.blog-list-loader {
//     min-height: 500px;
//     margin: 0 auto;
//   }
//   .loader {
//     width: 48px;
//     height: 48px;
//     border-radius: 50%;
//     display: inline-block;
//     position: relative;
//     border: 3px solid;
//     border-color: #1fabd3 #1fabd3 transparent transparent;
//     box-sizing: border-box;

//     animation: rotation 1s linear infinite;
//     &:after,
//     &:before {
//       content: "";
//       box-sizing: border-box;
//       position: absolute;
//       left: 0;
//       right: 0;
//       top: 0;
//       bottom: 0;
//       margin: auto;
//       border: 3px solid;
//       border-color: transparent transparent rgb(67, 73, 86) rgb(67, 73, 86);
//       width: 40px;
//       height: 40px;
//       border-radius: 50%;
//       box-sizing: border-box;
//       animation: rotationBack 0.5s linear infinite;
//       transform-origin: center center;
//     }
//     &:before {
//       width: 32px;
//       height: 32px;
//       border-color: green green transparent transparent;
//       animation: rotation 1.5s linear infinite;
//     }
//   }
//   @keyframes rotation {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
//   @keyframes rotationBack {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(-360deg);
//     }
//   }
// `;

export const LoaderParent = styled.div`
  .loader {
    :root {
      --hue: 223;
      --bg: hsl(var(--hue), 90%, 95%);
      --fg: hsl(var(--hue), 90%, 5%);
      --trans-dur: 0.3s;
      font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
    }
    main {
      padding: 1.5em 0;
    }
    .ip {
      width: 8em;
      height: 4em;
    }
    .ip__track {
      stroke: hsl(var(--hue), 90%, 90%);
      transition: stroke var(--trans-dur);
    }
    .ip__worm1,
    .ip__worm2 {
      animation: worm1 2s linear infinite;
    }
    .ip__worm2 {
      animation-name: worm2;
    }

    /* Dark theme */
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: hsl(var(--hue), 90%, 5%);
        --fg: hsl(var(--hue), 90%, 95%);
      }
      .ip__track {
        stroke: hsl(var(--hue), 90%, 15%);
      }
    }

    /* Animation */
    @keyframes worm1 {
      from {
        stroke-dashoffset: 0;
      }
      50% {
        animation-timing-function: steps(1);
        stroke-dashoffset: -358;
      }
      50.01% {
        animation-timing-function: linear;
        stroke-dashoffset: 358;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes worm2 {
      from {
        stroke-dashoffset: 358;
      }
      50% {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: -358;
      }
    }
  }
`;
