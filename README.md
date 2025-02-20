# Next.js Form with Shadcn/UI

A modern, type-safe form implementation using Next.js, Shadcn/UI, TypeScript, Tailwind CSS, Zod, and React Hook Form.

## Features

- 🎨 Modern UI components with Shadcn/UI
- 🔒 Type-safe form handling with TypeScript
- ✅ Form validation using Zod
- 🎯 Efficient form management with React Hook Form
- 💅 Styling with Tailwind CSS
- 📱 Responsive design

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-name>
```

2 . Install dependencies

```bash
npm install
# or
bun install
```

3 . Start the development server

```bash
npm run dev
# or
bun dev
```

## Project Structure

```bash
├── components/
│   └── ui/          # Shadcn/UI components
├── app/
│   └── page.tsx     # Main form component
└── ...
```

## Form Features

- Username validation
  - Minimum 2 characters
  - Maximum 30 characters
- Real-time form validation
- Error messages
- Clean and responsive UI
- Custom styling with Tailwind CSS

## Usage

The form component provides:

- Input validation using Zod schema
- Responsive card layout
- Error handling and display
- Custom styling with Tailwind CSS

Example schema:

```typescript
const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(30),
});
```

## Styling

The project uses Tailwind CSS for styling with custom configurations for:

- Form inputs
- Buttons
- Cards
- Typography
- Responsive design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
