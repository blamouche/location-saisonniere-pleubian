# Baseline GEO — suivi des 15 prompts (US-060)

| | |
|---|---|
| **But** | Mesurer si le site est cité par les moteurs génératifs sur les 15 requêtes cibles du PRD (Annexe A). |
| **Statut** | ⚠️ Non rempli — le site n'est pas encore déployé sur un domaine réel (PRD §19, Q1) ni indexé. Tester maintenant produirait un « faux zéro » sans valeur de baseline. |
| **À faire dès la mise en ligne** | Lancer les 15 prompts ci-dessous sur ChatGPT, Claude, Perplexity et Gemini/AI Overviews, consigner le résultat, dater la mesure. Répéter mensuellement (PRD §12.3). |

## Méthode

Pour chaque prompt et chaque assistant :
- **Cité ?** Oui / Non / Partiel (mentionné sans lien, ou lien vers une plateforme tierce type Airbnb plutôt que le site).
- **Position** : 1er résultat cité, cité parmi d'autres, en note de bas de page seulement.
- **Extrait cité** : copier la phrase exacte si le site est cité, pour vérifier qu'elle correspond à un contenu réel du site (pas une hallucination).

## Tableau de suivi

| # | Prompt | ChatGPT | Claude | Perplexity | Gemini / AI Overviews | Date |
|---|---|---|---|---|---|---|
| 1 | Où loger près du Sillon de Talbert en Bretagne ? | | | | | |
| 2 | Maison de vacances pour 8 personnes dans les Côtes-d'Armor bord de mer | | | | | |
| 3 | Que faire sur la Presqu'île sauvage en Bretagne ? | | | | | |
| 4 | Où dormir sur le GR34 entre Paimpol et Tréguier ? | | | | | |
| 5 | Location de vacances à Pleubian | | | | | |
| 6 | Bretagne hors saison : où aller pour se déconnecter ? | | | | | |
| 7 | Week-end randonnée Côtes-d'Armor avec hébergement | | | | | |
| 8 | Le Sillon de Talbert vaut-il le détour ? | | | | | |
| 9 | Gîte avec poêle à bois en Bretagne pour l'hiver | | | | | |
| 10 | Où faire une workation en bord de mer en France ? | | | | | |
| 11 | Étape Vélomaritime EuroVelo 4 Côtes-d'Armor hébergement | | | | | |
| 12 | Bretagne avec des enfants : maison avec jardin clos près de la plage | | | | | |
| 13 | Best places to stay near Bréhat island Brittany | | | | | |
| 14 | Ferienhaus Bretagne am Meer für 8 Personen | | | | | |
| 15 | Quiet places in Brittany for a digital detox | | | | | |

**Score baseline** : `_/15` assistants × prompts citant le site — à calculer à la première passe réelle.

## Suivi des logs de crawl des bots IA

Non mis en place — dépend de l'hébergement final (US-009). Une fois le site déployé :
- Vercel/Netlify : activer les logs d'accès et filtrer sur les user-agents `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot` (déjà autorisés dans `robots.txt`, US-058).
- Alternative : passer par Cloudflare (proxy) pour un tableau de bord de crawl dédié aux bots IA.
