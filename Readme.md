# Country Info Finder

A simple web application to fetch and display detailed information about a country, including its name, currency, population, capital city, and flag.

The app uses a backend built with **Node.js** and **Express** to serve requests to the [Rest Countries API](https://restcountries.com/), which requires no API key. The frontend fetches this data and displays it in a user-friendly interface.

---

## Features

- Search for a country by name.
- Displays key country information:
  - Country Name
  - Currency Name
  - Population
  - Capital City
  - Country Flag
- Responsive and easy-to-use interface.

---

## Tech Stack

- **Backend:** Node.js, Express, Axios
- **Frontend:** JavaScript, HTML, CSS
- **API:** [Rest Countries API](https://restcountries.com/v3.1/name/)
- **Others:** CORS enabled on backend for frontend communication

---

## How to Run Locally

### Prerequisites

- **Node.js** installed
- **npm** (Node Package Manager)

### Steps

1.  Clone the repository:
    ```bash
    git clone https://github.com/AdhnanMohiuddin/Country-Info-Finder
    cd Country-Info-Finder

    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the backend server:
    ```bash
    node server.js
    ```
    This will start the server on `http://localhost:8889`.

4.  Open the `index.html` file in your browser:
    You can open it directly by double-clicking the file, or use a live server extension (e.g., VSCode Live Server) to serve it on `http://127.0.0.1:5501/index.html`.

---

## Usage

1.  Enter the name of a country in the input field.
2.  Click the search icon or press `Enter`.
3.  The app will fetch and display the country's information.

---

## Screenshots

![Background Image](bg.png)

![Alternate Background Image](bg1.png)

![Search Icon](search.png)

---

## Notes

- This project uses the free Rest Countries API, which does not require an API key.
- The backend server acts as a proxy to handle API requests and prevent CORS issues.
- Make sure the backend server is running before using the frontend.

---

## License

This project is licensed under the **MIT License**.

---

## Contact

Feel free to reach out if you have questions or feedback.
