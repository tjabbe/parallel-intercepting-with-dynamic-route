import Link from "next/link";

export default function ClipsPage() {
  return (
    <div>
      <p>
        Clicking this link triggers the intercepted route, working as intended
      </p>
      <Link href="/dynamic-route/channel/clips/1">Clip 1</Link>
    </div>
  );
}
