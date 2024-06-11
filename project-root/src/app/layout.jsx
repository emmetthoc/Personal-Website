import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
  title: "Emmett's Website",
  description: 'Cool beans',
  keywords: "resume, Emmett, Hersh, O'Connor, Hersh-O'Connor",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1">
            <div className="w-1/6 bg-slate-900 p-4">
              <ul>
                <li className="mb-2 text-white">Item 1</li>
                <li className="mb-2 text-white">Item 2</li>
                <li className="mb-2 text-white">Item 3</li>
              </ul>
            </div>
            <main className="flex-1 bg-slate-900 p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MainLayout;
