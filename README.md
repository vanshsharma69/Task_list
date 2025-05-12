Great job on building the drag-and-drop tasks UI! Here's a clean and professional `README.md` you can include in your project:

---

## 🧩 Drag-and-Drop Task Manager (React + DnD Kit)

This is a simple yet functional drag-and-drop task manager built using **React** and **@dnd-kit**, showcasing an interactive UI for managing tasks. Users can add new tasks and rearrange them via drag-and-drop.

### 📸 Screenshot

![Task Manager Screenshot](./Screenshot%202025-05-12%20164152.png)


---

### 🚀 Features

* ✅ Add tasks dynamically
* 🖱️ Drag-and-drop to reorder tasks using `@dnd-kit/core`
* 🎨 Clean and responsive UI with basic styling
* ♿️ Keyboard support for accessibility (via `KeyboardSensor`)

---

### 🛠️ Tech Stack

* **React** (Vite-based setup)
* **@dnd-kit** for drag-and-drop
* **CSS** for layout and styling

---

### 📁 Project Structure

```
src/
├── components/
│   ├── Add.jsx          // Input + Button to add tasks
│   ├── Column.jsx       // Task list container with sortable support
├── App.jsx              // Main App component
├── App.css              // Global styles
└── main.jsx             // Entry point
```

---

### 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/drag-drop-task-manager.git
   cd drag-drop-task-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

---

### 📚 DnD Kit Modules Used

* `@dnd-kit/core` – Basic DnD context & sensors
* `@dnd-kit/sortable` – Sorting logic & hooks (`useSortable`, `SortableContext`)
* `arrayMove()` – Helper for reordering array items

---

### 🔮 Future Improvements

* ✅ Add delete/edit task options
* 🧱 Create multiple columns or categories
* 🌐 Save task order to local storage or backend
* 🪄 Add animation for smoother drag effects

---

### 📧 Submission Details

* **Assignment Name:** FrontendDev assignment – Websites.co.in
* **Due Date:** 16 May 2025
* **Submit To:** `hr@websites.co.in` (with video demonstration)

---

### 👨‍💻 Author

**Your Name** – [GitHub](https://github.com/your-username)

---

Let me know if you'd like me to include instructions for deployment (e.g., Vercel or Netlify), or generate a demo video script!
