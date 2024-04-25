import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <div>
        <Link href="/dynamic-route">dynamic-route where the issue happens</Link>
      </div>
      <div>
        <Link href="/static-route">static-route with no issue</Link>
      </div>
    </div>
  );
}
