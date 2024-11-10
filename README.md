# Earthquake Visualizer 🌎

An interactive web application that helps visualize recent earthquake activity around the world. This tool is designed for geography students and enthusiasts like **Casey** who want to study seismic patterns and recent geological events. Built with React, Leaflet, and the USGS Earthquake API, the Earthquake Visualizer displays earthquake locations on an interactive map, complete with details such as magnitude, location, and time.

## Features

- **Real-Time Earthquake Data**: Displays recent earthquakes around the world using data from the USGS Earthquake API.
- **Interactive Map**: Uses Leaflet to render an interactive map that supports zooming and panning.
- **Customizable Markers**: Each earthquake is marked with a red circular marker, showing exact location and clickable details.
- **Detailed Popups**: Clicking on a marker reveals a popup with the earthquake’s magnitude, location, and timestamp.
- **Error Handling**: Gracefully handles network errors and displays appropriate messages if data cannot be fetched.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Mapping Library**: [React-Leaflet](https://react-leaflet.js.org/) (integrated with Leaflet for interactive maps)
- **API**: [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/) for real-time earthquake data
- **CSS**: Custom CSS for clean, modern styling

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kishan0101/earthquake-visualizer.git
   cd earthquake-visualizer


2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. Open [[http://localhost:3000](https://wjdr6h.csb.app/)](https://wjdr6h.csb.app/) to view it in your browser.

## Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── App.js               
│   ├── App.css              
│   ├── index.js             
│   └── ...                  
└── package.json
```

## Usage

1. **View Earthquakes**: Open the application to see recent earthquake activity visualized on a world map.
2. **Click for Details**: Each earthquake location is marked with a red circle. Click on a marker to view a popup with detailed information:
   - **Magnitude**: Indicates the strength of the earthquake.
   - **Location**: Shows where the earthquake occurred.
   - **Time**: Displays the date and time of the earthquake.
3. **Explore**: Use the map’s zoom and pan features to explore earthquakes in specific regions.

## API Information

This application uses the USGS Earthquake API to retrieve earthquake data for the past day. No API key is required.

### Endpoints Used

- **All Earthquakes (Past Day)**: `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`

## Screenshots

### Home Page![screenshot-wjdr6h_csb_app-2024_11_10-17_46_14](https://github.com/user-attachments/assets/e4af39d8-2b8d-4500-ac79-ae7068650b2a)

![Home Page]

## Custom Marker Design

Markers are designed as bold red circles, helping users easily identify earthquake locations on the map. Clicking a marker opens a popup with additional details.

## Contributing

Contributions are welcome! If you have suggestions for features or improvements, please fork the project and submit a pull request.

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [USGS Earthquake API](https://earthquake.usgs.gov/fdsnws/event/1/)
- [React](https://reactjs.org/)
- [React-Leaflet](https://react-leaflet.js.org/) and [Leaflet](https://leafletjs.com/)
- Icons by [FontAwesome](https://fontawesome.com/)

---

