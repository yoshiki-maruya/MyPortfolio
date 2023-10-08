import Link from 'next/link';


export default function NotFound() {
  return (
    <div className='mx-auto max-w-xl py-8'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </div>
  );
}
