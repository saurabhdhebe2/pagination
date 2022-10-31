const Header = () => {
  return (
    <header>
      <div className="max-w-screen-xl md:mx-auto mt-4">
        <h1 className="md:mx-8 text-2xl font-bold">
          You can connect to a ready API (available online or can make one
          yourself) and create a data grid to have server-side pagination
        </h1>
        <p className="mx-8 text-lg text-gray-600 mt-4">
          *For example:* If your API has say 10000 or more records and your page
          shows only 10 records on one screen then your web app made using
          next.js / react.js should be pulling in ONLY 10 first records (1 to
          10) on the first-page load and further on 2nd-page load (pressing of
          next button) it should read ONLY next 10 records (11 to 20) and
          further display on the data grid.
        </p>
      </div>
    </header>
  );
};

export default Header;
