---
description: Crée une page standard GDG Libreville (structure et charte communes à tous nos sites)
---

---
description: Crée une page standard GDG Libreville (structure + identité communes à tous nos sites)
---

# Workflow — Créer une page GDG

Utilise ce workflow pour générer une page web autonome (HTML/CSS/JS) cohérente avec l'identité de GDG Libreville. Invocation : `/create_page`.

## Étapes

1. Si le nom de la page n'est pas fourni, demande-le (ex. « accueil », « merci »).

2. Crée un fichier `<nom>.html` autonome contenant :
   - un **en-tête** avec le texte « GDG Libreville » et le wordmark « Build with AI » ;
   - un **bloc central** pour le contenu principal ;
   - un **pied de page** avec les liens réseaux (LinkedIn, Facebook, WhatsApp).

3. **Applique l'identité GDG Libreville en suivant la skill `gdg-branding`** (c'est la source de vérité de la charte — lis-la et respecte-la) :
   - palette : les 4 couleurs Google (#4285F4, #EA4335, #F9AB00, #34A853), fond clair, texte #1E1E1E ;
   - **touches gabonaises OBLIGATOIRES en ornement discret** : intègre le motif « pagne » défini dans la skill (en bordure haut/bas ou en séparateur de sections), sans qu'il domine le contenu ;
   - police système sans-serif, coins arrondis, espacements généreux, textes en français.

4. N'utilise aucun framework : HTML, CSS et JavaScript purs.

// turbo
5. Lance un serveur local (`python3 -m http.server`) et ouvre la page dans le navigateur pour vérifier le rendu, puis renvoie une capture.