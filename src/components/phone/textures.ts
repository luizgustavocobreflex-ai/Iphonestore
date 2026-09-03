import * as THREE from "three";

/**
 * Procedural brushed-metal roughness map. Avoids any external HDRI/texture
 * fetch so the whole scene stays self-contained inside the bundled artifact.
 */
export function makeBrushedRoughnessMap(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#8a8a8a";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 6000; i++) {
    const y = Math.random() * size;
    const shade = 120 + Math.random() * 90;
    ctx.strokeStyle = `rgba(${shade},${shade},${shade},${0.05 + Math.random() * 0.08})`;
    ctx.lineWidth = Math.random() * 1.2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y + (Math.random() - 0.5) * 4);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 3);
  return tex;
}

/**
 * A believable "screen is on" texture: soft dark wallpaper gradient, a status
 * row and a grid of rounded app icons. Rendered once to a canvas and reused.
 */
export function makeScreenTexture(accent = "#c9a876"): THREE.CanvasTexture {
  const w = 620;
  const h = 1340;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  const bg = ctx.createLinearGradient(0, 0, w * 0.3, h);
  bg.addColorStop(0, "#1c1a17");
  bg.addColorStop(0.45, "#0c0c0e");
  bg.addColorStop(1, "#050506");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const glow = ctx.createRadialGradient(w * 0.75, h * 0.12, 10, w * 0.75, h * 0.12, w * 0.9);
  glow.addColorStop(0, "rgba(201,168,118,0.28)");
  glow.addColorStop(1, "rgba(201,168,118,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  // status bar
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.font = "600 30px 'Space Grotesk', sans-serif";
  ctx.textBaseline = "middle";
  ctx.fillText("9:41", 40, 70);
  ctx.fillRect(w - 120, 55, 70, 26);

  // clock widget
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.font = "300 128px 'Fraunces', serif";
  ctx.fillText("09:41", 40, 230);
  ctx.font = "400 30px 'Space Grotesk', sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.fillText("Quinta-feira, 3 de setembro", 42, 280);

  // app icon grid
  const cols = 4;
  const pad = 44;
  const cell = (w - pad * 2) / cols;
  const colors = [accent, "#3d3d40", "#5a5a5d", "#2b2b2e", accent, "#44444a", "#6b6b6f", "#313134"];
  for (let i = 0; i < 12; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = pad + col * cell + cell / 2;
    const y = 460 + row * 150;
    const r = 46;
    ctx.beginPath();
    ctx.moveTo(x - r + 16, y - r);
    ctx.arcTo(x + r, y - r, x + r, y + r, 16);
    ctx.arcTo(x + r, y + r, x - r, y + r, 16);
    ctx.arcTo(x - r, y + r, x - r, y - r, 16);
    ctx.arcTo(x - r, y - r, x + r, y - r, 16);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // dock
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  const dockY = h - 190;
  ctx.beginPath();
  const dr = 44;
  ctx.moveTo(pad, dockY);
  ctx.arcTo(w - pad, dockY, w - pad, dockY + 150, dr);
  ctx.arcTo(w - pad, dockY + 150, pad, dockY + 150, dr);
  ctx.arcTo(pad, dockY + 150, pad, dockY, dr);
  ctx.arcTo(pad, dockY, w - pad, dockY, dr);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
