# WanderAI — AI Travel Discovery Planner

A portfolio project for an AI Creator / Prompt Engineering role.

## Core experience

1. Type `India` to browse all 28 Indian states, or search for a state such as `Tamil Nadu`.
2. The application displays curated tourist destinations for that state.
3. Select a destination such as Kodaikanal.
4. View:
   - Destination image
   - Exact destination coordinates
   - Interactive OpenStreetMap map
   - Tourist attractions
   - Nearby hotels/restaurants/attractions when OpenStreetMap data is available
   - AI-style travel suggestion
   - Suggested multi-day itinerary

## Files

- `index.html` — page structure
- `style.css` — editorial travel design
- `script.js` — destination data, interactions, map, nearby OSM lookup
- `prompt.txt` — master prompt for connecting a real LLM

## Run

Open `index.html` with VS Code Live Server.

Internet is required for:
- Google Fonts
- Leaflet
- OpenStreetMap map tiles
- Overpass nearby-place lookup
- destination images

## Important

The current browser project uses a local recommendation function as a fallback. It is not pretending that a real LLM is running in the browser.

To make this a true GenAI application, add a backend such as:

User input
    ↓
Prompt Template
    ↓
Secure Backend
    ↓
Gemini / OpenAI API
    ↓
Generated Travel Plan
    ↓
Frontend

Do not put a production LLM API key in `script.js`.

## Map data

The map uses Leaflet with OpenStreetMap tiles. Nearby place discovery uses the public Overpass API.

For a production deployment, use a suitable commercial/self-hosted geocoding and places service or a backend proxy, cache results, and follow each provider's usage policy.

## Portfolio description

WanderAI is an AI-assisted travel discovery web application that combines prompt engineering, structured destination data, interactive mapping and travel recommendation workflows. The application demonstrates how user intent can be transformed into personalised travel suggestions and visual experiences.


## Indian states covered
All 28 states are included in the destination dataset, with starter destinations for each state. You can expand each state's destination list in `script.js` as the portfolio grows.
