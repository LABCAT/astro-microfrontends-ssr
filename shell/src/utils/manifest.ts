import { asset, css, js } from "./entrypoints";

const fetchManifest = async (url: string) => {
  const responseB = await fetch(url);
  return await responseB.json();
};

export const buildManifest = async () => {
  const manifestA = await fetchManifest("http://localhost:4173/manifest.json");
  const manifestB = await fetchManifest("http://localhost:4174/manifest.json");

  return {
    mfa: {
      url: `http://localhost:4173/${manifestA[js][asset]}`,
      css: `http://localhost:4173/${manifestA[css][asset]}`,
    },
    mfb: {
      url: `http://localhost:4174/${manifestB[js][asset]}`,
      css: `http://localhost:4174/${manifestB[css][asset]}`,
    },
  };
};
