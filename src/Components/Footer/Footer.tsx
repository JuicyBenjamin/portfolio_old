const Footer = () => {
  return (
    <footer className="bg-purple bg-gray-800 min-h-32 grid grid-cols-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-4 [&>div]:text-center text-slate-100/80 p-8 border-t border-gray-200/50">
      <div>
        <p>Contact me</p>
        <p>Phone: +45 27 57 51 40</p>
        <p>Mail: benjaminvinterberg@gmail.com</p>
      </div>
      <div>
        <p>Projects</p>
        <p>Card Collection App</p>
      </div>
      <div>
        <p>Socials</p>
        <p>LinkedIn</p>
      </div>
    </footer>
  );
};

export default Footer;
