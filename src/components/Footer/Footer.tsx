const Footer = () => {
  return (
    <footer className="bg-gray-100 grid place-items-center py-10">
      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        <div data-testid="column">
          <h6 className="text-gray-500 text-sm font-semibold tracking-widest">
            INFO
          </h6>
          <hr className="my-4" />
          <p className="text-gray-500 text-sm pb-3" data-testid="link">
            About Us
          </p>
          <p className="text-gray-500 text-sm pb-3" data-testid="link">
            Updates
          </p>
        </div>
        <div data-testid="column">
          <h6 className="text-gray-500 text-sm font-semibold tracking-widest">
            POLICIES
          </h6>
          <hr className="my-4" />
          <p className="text-gray-500 text-sm pb-3" data-testid="link">
            Privacy
          </p>
          <p className="text-gray-500 text-sm pb-3" data-testid="link">
            Shipping & Return
          </p>
        </div>
        <div data-testid="column">
          <h6 className="text-gray-500 text-sm font-semibold tracking-widest">
            CONTACT US
          </h6>
          <hr className="my-4" />
          <p className="text-gray-500 text-sm pb-3">
            Feel free to join our Discord server or contact us at
            support@endgame.com for further inquiries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
