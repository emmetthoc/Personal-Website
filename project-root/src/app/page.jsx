import Card from '../components/shared/card';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-white">Home Page</h1>
      <a className="text-white" href="/projects">
        Show Projects
      </a>
      <Card>
        <div>Hello</div>
      </Card>
    </div>
  );
};

export default HomePage;
