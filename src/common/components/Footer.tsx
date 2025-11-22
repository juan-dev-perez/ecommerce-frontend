import { Facebook, Instagram, Store, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <Store size={36}/>
        <p>Copyright © 2025 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="#">
          <Twitter fill="white" />
        </a>
        <a href="#">
          <Youtube fill="white" color="black" />
        </a>
        <a href="#">
          <Facebook fill="white" />
        </a>
        <a href="#">
          <Instagram fill="white" color="black" />
        </a>
      </nav>
    </footer>
  );
}
