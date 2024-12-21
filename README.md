# SQLinkTodo

SQLinkTodo is a basic to-do application built using [SQLink](https://sqlinkjs.github.io), a Node.js library that simplifies the process of turning MySQL tables into RESTful APIs.

This project demonstrates how to leverage SQLink to quickly create a functional backend and integrate it with a simple front-end to manage tasks efficiently.

## Features
- **CRUD Operations**: Create, read, update, and delete tasks.
- **SQLink Integration**: Uses SQLink for seamless interaction with a MySQL database.
- **Efficient Backend**: Minimal setup for managing APIs and database operations.
- **Simple UI**: A straightforward interface for managing to-do tasks.

## Prerequisites
To run this application, ensure you have the following installed on your system:

- Node.js (>= 16.x)
- MySQL Server
- SQLink (installed via npm)

## Installation

Follow these steps to set up and run the SQLinkTodo application:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sqlinkjs/SQLinkTodo.git
   cd SQLinkTodo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up the Database**:
   - Create a MySQL database for the application.
   - Please refer the `TodoList.sql` to setup the database and table

4. **Start the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to use the to-do app.

## Usage

1. Add new tasks by entering a title and clicking the "Add" button.
2. View all tasks in the task list.
3. Edit a task by clicking the edit button and updating the details.
4. Delete tasks you no longer need by clicking the delete button.

## Built With

- [Node.js](https://nodejs.org/)
- [SQLink](https://sqlinkjs.github.io)
- [React](https://reactjs.org/)
- [MySQL](https://www.mysql.com/)

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [SQLink](https://sqlinkjs.github.io) for providing an easy-to-use library for database management.
- Special mention to all contributors for making this project possible.

---

Happy coding! If you have any questions or feedback, feel free to open an issue in the repository.
