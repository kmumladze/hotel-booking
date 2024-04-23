import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="">
            <h1>
              Loftet <i class="fa-solid fa-map-location"></i>
            </h1>
          </a>
          <p>-nice places to stay-</p>
        </div>

        <ul>
          <li>
            {' '}
            <Link href="/">Home</Link>
          </li>
          <li>
            {' '}
            <Link href="/about">About</Link>
          </li>
          <li>
            {' '}
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
