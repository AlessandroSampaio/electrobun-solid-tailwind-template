import { BunIcon } from './components/icons/bun-logo';
import { SolidJSIcon } from './components/icons/solid-logo';
import { TailwindCSSIcon } from './components/icons/tailwind-logo';
import { ThemeProvider } from './providers/theme-provider';

const App = () => {
  return (
    <ThemeProvider>
      <div class='w-full h-full flex flex-col p-4'>
        <div class='flex items-center justify-center w-full basis-1/2 gap-4'>
          <BunIcon class='size-36' />
          <SolidJSIcon class='size-36 ' />
          <TailwindCSSIcon class='size-36 ' />
        </div>
        <div class='space-y-4 mt-4'>
          <h1 class='text-2xl font-bold text-center'>
            Welcome to your Bun + SolidJS + TailwindCSS App!
          </h1>
          <p class='text-center'>
            This is a starter template to help you get up and running quickly with
            Bun, SolidJS, and TailwindCSS. Feel free to explore the code and start
            building your application!
          </p>
        </div>
      </div>
    </ThemeProvider>
  );

};

export default App;
