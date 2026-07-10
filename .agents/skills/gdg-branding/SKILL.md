---
name: gdg-branding
description: "Charte graphique, composants et touches gabonaises de GDG Libreville (Build with AI). À utiliser dès que l'agent crée ou modifie une page web, un composant d'interface (compte à rebours, bouton, en-tête, hero, section, pied de page), un visuel ou un motif qui doit respecter l'identité GDG Libreville : couleurs Google, ornements gabonais, français."
---

# GDG Libreville — Branding

## Palette (couleurs Google)
- Bleu   `#4285F4`
- Rouge  `#EA4335`
- Jaune  `#F9AB00`
- Vert   `#34A853`
- Fond clair `#FFFFFF` / `#F8F9FA`
- Texte `#1E1E1E` ; texte secondaire `#5F6368`

## Typographie
- Titres : sans-serif géométrique (Poppins ou, à défaut, la police système).
- Corps : sans-serif régulière, interligne aéré.
- Jamais de titres tout en majuscules ; jamais de souligné (sauf liens).

## Signature de marque
- Wordmark « Build with AI » avec le mot « with » en bleu `#4285F4`.
- Motif récurrent : un petit cluster de 4 cercles aux couleurs Google (bleu, rouge, jaune, vert), placé dans un coin.

## Touches gabonaises (ornements)
La charte Google reste la base. On ajoute une identité locale **uniquement en ornement**, jamais en couleur dominante :
- **Inspiration** : géométrie de l'art gabonais — masques Punu & Fang (symétrie, formes en amande, lignes épurées) et motifs de pagne / wax (triangles, losanges, zigzags).
- **Emplacements** : bordures haut/bas, séparateurs de sections, coins, ou arrière-plans très subtils (faible opacité).
- **Règle d'or** : les motifs **réutilisent la palette Google**, ils n'introduisent **aucune nouvelle couleur**, et restent discrets (ils n'entrent jamais en concurrence avec le contenu).

### Motif « pagne » réutilisable (bandeau / séparateur)

```html
<!-- Ornement gabonais — réutilise la palette Google, purement décoratif -->
<svg viewBox="0 0 240 24" width="100%" height="24" aria-hidden="true"
     role="presentation" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pagne" width="40" height="24" patternUnits="userSpaceOnUse">
      <polygon points="0,24 10,0 20,24" fill="#4285F4"/>
      <polygon points="10,0 20,24 30,0" fill="#EA4335"/>
      <polygon points="20,24 30,0 40,24" fill="#F9AB00"/>
      <rect x="0" y="20" width="40" height="4" fill="#34A853"/>
    </pattern>
  </defs>
  <rect width="240" height="24" fill="url(#pagne)"/>
</svg>
```
Utilisable en haut/bas de page, comme séparateur entre sections, ou en filet fin. Pour un fond, réduire l'opacité (ex. `opacity:.08`).

## Composant — compte à rebours (snippet de référence)

```html
<div id="countdown" style="font-weight:700;color:#4285F4"></div>
<script>
  const cible = new Date("2026-07-11T19:00:00+01:00").getTime();
  setInterval(() => {
    const d = cible - Date.now();
    const j = Math.floor(d / 86400000),
          h = Math.floor((d % 86400000) / 3600000),
          m = Math.floor((d % 3600000) / 60000),
          s = Math.floor((d % 60000) / 1000);
    document.getElementById("countdown").textContent = `${j}j ${h}h ${m}m ${s}s`;
  }, 1000);
</script>
```

## Règles d'usage
- Une seule couleur dominante par écran ; les autres en accents.
- Toujours prévoir un espace de respiration (marges généreuses).
- Textes en français, ton chaleureux et professionnel, ancré à Libreville / au Gabon.
- Les motifs gabonais sont **décoratifs** : discrets, réutilisant la palette Google, jamais dominants.