# simple-registration-site
A website that releases confetti when a new user registers and displays a joyful GIF when they log in
How to run this project
Prerequisites:

1:Python: Make sure you have Python installed.

2:MySQL Server: Install and run a MySQL server instance (e.g., via MySQL Workbench).

3:Libraries: Open your terminal in the project folder and run:

Bash:
pip install flask flask-cors mysql-connector-python
Setup:

Database: Open MySQL Workbench, create a database named users, and run the following command to create the table:

SQL:
CREATE TABLE users1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);
Configuration: Open app.py and replace YOUR_MYSQL_PASSWORD on line 12 with your actual MySQL root password.

Launch:
Run the server:

Bash
python app.py
Then simply open index.html in your browser!
