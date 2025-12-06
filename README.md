# Shadcn Dashboard Project

A modern, responsive, and feature-rich dashboard template built with the latest web technologies including Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design using shadcn/ui components.
- **Interactive Charts**: Visualizations powered by Recharts (Bar, Pie, Area charts).
- **Responsive Layout**: Collapsible sidebar and responsive navbar for all screen sizes.
- **Dark Mode**: Built-in dark mode support using `next-themes`.
- **Data Tables**: Advanced tables with pagination and sorting using Tanstack Table.
- **Form Handling**: Robust form validation with React Hook Form and Zod.
- **Dashboard Widgets**: Includes Todo List, Card Lists, Calendar, and more.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Tables**: [Tanstack Table](https://tanstack.com/table/v8)

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # React components
│   ├── charts/       # Recharts visualizations
│   ├── ui/           # Reusable shadcn/ui components
│   ├── AppSidebar/   # Sidebar navigation
│   ├── Navbar/       # Top navigation bar
│   └── ...           # Other feature components
└── lib/              # Utility functions and shared logic
```

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd shadcn-dashboard-project
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
