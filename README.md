# Electrobun Hello World

A simple Electrobun app pre-configured with Tailwindcss and SolidJs.

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run in development mode:
   ```bash
   bun dev
   ```

3. Build for production:
   ```bash
   bun build
   ```

## Project Structure

```
src/
├── bun/
│   └── index.ts          # Main process - creates and manages windows
└── renderers/
    └── main/
        ├── components/   # Your components
        ├── libs/         # Libs 
        ├── index.html    # Your app's html entry point
        ├── index.tsx     # Your Solid entry point
        ├── index.css     # Global style
        └── App.tsx.      # Top level component 

    
```

## Next Steps

Ready to build something more complex? Check out:

- **[Documentation](https://docs.electrobun.dev)** - Learn about all Electrobun features
- **[Examples](https://github.com/blackboardsh/electrobun/tree/main/playground)** - See advanced features like RPC, menus, and system tray
- **[GitHub](https://github.com/blackboardsh/electrobun)** - Star the repo and join the community

### Add More Features

Want to extend this app? Try adding:
- RPC communication between Bun and webview
- Native menus and system tray
- File dialogs and system integration
- Multiple windows and views

Happy building! 🚀