
# Graphix-Pro

Graphix-Pro is a comprehensive solution for all your graphic design needs, specializing in signboards, vehicle wraps, decals, and much more. Built with Django, PostgreSQL, and SCSS, our web application offers a user-friendly interface for both clients and administrators to manage and showcase graphic design projects.

## Features

- Portfolio showcase of completed projects
- Detailed service pages including signboards, vehicle wraps, decals, etc.
- Client testimonials
- Contact form for inquiries
- Editable gallery for easy client management

## Installation

To get started with Graphix-Pro, ensure you have Python, PostgreSQL, and Node.js installed on your system. Then follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/GuiPro0408/Graphix-Pro.git
   cd Graphix-Pro
   ```

2. Set up a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure your PostgreSQL database in `settings.py`.

5. Run migrations to set up your database:
   ```bash
   python manage.py migrate
   ```

6. Compile SCSS files:
   ```bash
   npm install
   npm run compile-scss
   ```

7. Start the development server:
   ```bash
   python manage.py runserver
   ```

## Usage

After installation, access the web application at `http://localhost:8000`. Use the navigation bar to explore the services, portfolio, and contact form. Administrators can log in to manage the portfolio and service offerings.

## Contributing

Contributions to Graphix-Pro are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/GuiPro0408/Graphix-Pro](https://github.com/GuiPro0408/Graphix-Pro)

## Authors

Guillaume Juste: [GuiPro0408](https://github.com/GuiPro0408)
Ryan Juste: [Ryan-Juste](https://github.com/ryan-juste)
