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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;