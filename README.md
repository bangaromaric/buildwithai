# Build with AI – Google Antigravity | GDG Libreville

Mbolo ! Bienvenue sur le dépôt officiel du site web de l'événement **Build with AI – Google Antigravity**, organisé par la communauté **GDG Libreville** à Libreville, au Gabon. 🇬🇦✨

Ce site moderne, rapide et élégant présente l'événement phare de l'IA au Gabon, son programme, ses intervenants et permet aux passionnés de tech de s'inscrire en ligne.

---

## 🌟 Identité visuelle & Design

Le design de ce site respecte une charte graphique unique alliant l'univers de Google et la culture gabonaise :
*   **Palette Google** : Utilisation exclusive des 4 couleurs de Google (Bleu `#4285F4`, Rouge `#EA4335`, Jaune `#F9AB00`, Vert `#34A853`) sur fond clair (`#FFFFFF` / `#F8F9FA`) avec une typographie moderne (`Google Sans`).
*   **Touches Gabonaises** : Présence d'ornements traditionnels discrets inspirés de l'art gabonais (géométrie des masques Punu & Fang, motifs de pagne / wax colorés) intégrés sous forme de bandeaux et séparateurs SVG.
*   **Aesthetics Premium** : Animations micro-interactives au survol, compte à rebours dynamique, transitions douces et cartes d'informations soignées.

---

## 📁 Structure du projet

Le projet est conçu en **HTML, CSS et JavaScript purs**, sans aucun framework lourd, garantissant un temps de chargement ultra-rapide (idéal pour tous les types de connexions).

```text
├── index.html         # Page d'accueil principale (Hero, compte à rebours, intervenants, programme, modal d'inscription)
├── merci.html         # Page de confirmation d'inscription dynamique et personnalisée
├── evenements.html    # Agenda des futurs rendez-vous du GDG Libreville (Codelabs, DevFest)
├── app.js             # Logique d'interactivité (compte à rebours, modal, gestion des inscriptions et redirection)
├── style.css          # Design system complet (variables CSS, polices, responsive design et motifs locaux)
└── images/            # Dossier regroupant les visuels et avatars des intervenants
```

---

## 🚀 Fonctionnalités clés

1.  **Compte à rebours interactif** : Calcule en temps réel le temps restant jusqu'au lancement officiel de l'événement le **11 Juillet 2026 à 19h00 (Heure du Gabon)**.
2.  **Formulaire d'inscription intelligent** : Valide les entrées utilisateur et propose une participation en *Présentiel (à l'ENPTI)* ou en *Virtuel*.
3.  **Personnalisation dynamique** : La page `merci.html` accueille le participant par son prénom et affiche le récapitulatif de son pass choisi après soumission du formulaire.
4.  **Agenda communautaire** : La page `evenements.html` liste les futurs rendez-vous (Codelabs, DevFest) avec une section de contact WhatsApp intégrée aux couleurs officielles de la marque.

---

## 💻 Installation et lancement local

Pour lancer et tester le site sur votre machine, aucun outil complexe n'est requis. Un simple serveur HTTP suffit.

### Option 1 : Via Python (Recommandé)
Lancez la commande suivante dans le dossier du projet :
```bash
python -m http.server 8080
```
Puis ouvrez votre navigateur à l'adresse : [http://localhost:8080](http://localhost:8080)

### Option 2 : Extension VS Code (Live Server)
Si vous utilisez VS Code, faites un clic droit sur `index.html` et choisissez **Open with Live Server**.

---

## 🤝 Rejoindre la communauté

Le **GDG Libreville** (Google Developer Group) est une communauté ouverte à tous les passionnés de technologies, développeurs, designers et curieux résidant au Gabon. 

Pour nous suivre et échanger :
*   **LinkedIn** : [GDG Libreville](https://linkedin.com)
*   **Facebook** : [GDG Libreville](https://facebook.com)
*   **WhatsApp** : [Discuter avec nous](https://wa.me/24100000000)

---
*Fait avec ❤️ par la communauté GDG Libreville au Gabon.*
